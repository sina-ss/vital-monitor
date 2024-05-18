import { Injectable } from '@nestjs/common';
import { Alert } from '@prisma/client';
import axios from 'axios';

@Injectable()
export class SmsService {
  private readonly apiUrl = 'https://api.sms.ir/v1/send/verify';
  private readonly apiKey =
    'JccG96mC06y0xpDXxTOX1iB3uIHt56sndtdNYKeVcXewsXNQxGEVDIqESyAadezw';

  async sendAlert(
    alert: Alert,
    recipients: string[],
    patientName: string,
    doctorName: string,
  ) {
    const promises = recipients.map(async (mobile) => {
      const data = {
        mobile,
        templateId: 340533,
        parameters: [
          {
            name: 'message',
            value: alert.message,
          },
          {
            name: 'patient',
            value: patientName,
          },
          {
            name: 'doctor',
            value: doctorName,
          },
        ],
      };

      try {
        const response = await axios.post(this.apiUrl, data, {
          headers: {
            'X-API-KEY': this.apiKey,
          },
        });
        return response.data;
      } catch (error) {
        console.log(error);
        throw new Error(`Failed to send SMS alert to ${mobile}`);
      }
    });

    return Promise.all(promises);
  }
}
