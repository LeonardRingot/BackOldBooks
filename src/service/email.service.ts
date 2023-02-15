import { IEmailService, IService } from "../core/service.interface";
import { EmailDTO } from "../dto/email.dto"

export class EmailService implements IEmailService{
  async  sendEmail(): Promise<any[]> {
    const response = await fetch('http://141.94.247.187:3000/api/v1/send', {
        method: 'POST',
        body: JSON.stringify({
            
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        throw new Error('Failed to send email.');
      }
    }
  
    
}