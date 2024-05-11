import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Seed doctors
  for (let i = 0; i < 10; i++) {
    await prisma.doctor.create({
      data: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specialization: faker.lorem.word(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number('###-###-####'),
        address: faker.address.streetAddress(),
        hospitalAffiliate: faker.company.name(),
      },
    });
  }

  // Seed patients
  for (let i = 0; i < 50; i++) {
    const doctor = await prisma.doctor.findFirst({
      orderBy: { id: 'asc' },
      skip: i % 10,
    });

    const patient = await prisma.patient.create({
      data: {
        doctorId: doctor.id,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        dob: faker.date.past(50, new Date(2000, 0, 1)),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number('###-###-####'),
        address: faker.address.streetAddress(),
        emergencyContactName: faker.name.fullName(),
        emergencyContactPhone: faker.phone.number('###-###-####'),
        insuranceProvider: faker.company.name(),
        policyNumber: faker.datatype.string(10),
      },
    });

    // Seed patient profile
    await prisma.patientProfile.create({
      data: {
        patientId: patient.id,
        medicalHistory: faker.lorem.paragraphs(3),
        currentSymptoms: faker.lorem.sentences(5),
        medicationDetails: faker.lorem.paragraph(),
        allergies: faker.lorem.words(3).split(' ').join(', '),
        familyMedicalHistory: faker.lorem.paragraph(),
        lifestyleInfo: faker.lorem.sentences(2),
        psychologicalHealth: faker.lorem.sentence(),
        recentTravelHistory: faker.lorem.sentence(),
        vaccinationHistory: faker.lorem.sentence(),
      },
    });

    // Seed vital signs
    for (let j = 0; j < 100; j++) {
      await prisma.vitalSign.create({
        data: {
          patientId: patient.id,
          timestamp: faker.date.recent(30),
          heartRate: faker.datatype.number({ min: 60, max: 100 }),
          bloodPressure: `${faker.datatype.number({ min: 90, max: 140 })}/${faker.datatype.number({ min: 60, max: 90 })}`,
          respiratoryRate: faker.datatype.number({ min: 12, max: 20 }),
          temperature: faker.datatype.float({
            min: 36.5,
            max: 37.5,
            precision: 0.1,
          }),
          oxygenSaturation: faker.datatype.float({
            min: 95,
            max: 100,
            precision: 0.1,
          }),
          painScale: faker.datatype.number({ min: 0, max: 10 }),
        },
      });
    }

    // Seed thresholds and alerts
    const threshold = await prisma.threshold.create({
      data: {
        patientId: patient.id,
        heartRateMin: 60,
        heartRateMax: 100,
        bloodPressureMin: 90,
        bloodPressureMax: 140,
        respiratoryRateMin: 12,
        respiratoryRateMax: 20,
        temperatureMin: 36.5,
        temperatureMax: 37.5,
        oxygenSaturationMin: 95,
        oxygenSaturationMax: 100,
        painScaleMax: 5,
      },
    });

    await prisma.alert.create({
      data: {
        thresholdId: threshold.id,
        patientId: patient.id,
        doctorId: doctor.id,
        message: faker.lorem.sentence(),
        alertTime: faker.date.recent(1),
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
