-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "specialization" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(20) NOT NULL,
    "address" TEXT,
    "hospitalAffiliate" TEXT,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(20) NOT NULL,
    "address" TEXT,
    "emergencyContactName" VARCHAR(100) NOT NULL,
    "emergencyContactPhone" VARCHAR(20) NOT NULL,
    "insuranceProvider" TEXT,
    "policyNumber" TEXT,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientProfile" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "medicalHistory" TEXT NOT NULL,
    "currentSymptoms" TEXT NOT NULL,
    "medicationDetails" TEXT,
    "allergies" TEXT,
    "familyMedicalHistory" TEXT,
    "lifestyleInfo" TEXT,
    "psychologicalHealth" TEXT,
    "recentTravelHistory" TEXT,
    "vaccinationHistory" TEXT,

    CONSTRAINT "PatientProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VitalSign" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "heartRate" INTEGER NOT NULL,
    "bloodPressure" VARCHAR(10) NOT NULL,
    "respiratoryRate" INTEGER NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "oxygenSaturation" DOUBLE PRECISION NOT NULL,
    "painScale" SMALLINT NOT NULL,

    CONSTRAINT "VitalSign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Threshold" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "heartRateMin" INTEGER NOT NULL,
    "heartRateMax" INTEGER NOT NULL,
    "bloodPressureMin" INTEGER NOT NULL,
    "bloodPressureMax" INTEGER NOT NULL,
    "respiratoryRateMin" INTEGER NOT NULL,
    "respiratoryRateMax" INTEGER NOT NULL,
    "temperatureMin" DOUBLE PRECISION NOT NULL,
    "temperatureMax" DOUBLE PRECISION NOT NULL,
    "oxygenSaturationMin" DOUBLE PRECISION NOT NULL,
    "oxygenSaturationMax" DOUBLE PRECISION NOT NULL,
    "painScaleMax" SMALLINT NOT NULL,

    CONSTRAINT "Threshold_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alert" (
    "id" SERIAL NOT NULL,
    "thresholdId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "alertTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_email_key" ON "Doctor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PatientProfile_patientId_key" ON "PatientProfile"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "Threshold_patientId_key" ON "Threshold"("patientId");

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientProfile" ADD CONSTRAINT "PatientProfile_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitalSign" ADD CONSTRAINT "VitalSign_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Threshold" ADD CONSTRAINT "Threshold_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_thresholdId_fkey" FOREIGN KEY ("thresholdId") REFERENCES "Threshold"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
