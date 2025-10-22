declare module "nodemailer" {
  export type SendMailOptions = {
    from?: string;
    to?: string;
    subject?: string;
    html?: string;
  };

  export type TransportOptions = {
    service?: string;
    auth?: {
      user?: string;
      pass?: string;
    };
  };

  export interface Transporter {
    verify(): Promise<void>;
    sendMail(mailOptions: SendMailOptions): Promise<unknown>;
  }

  export function createTransport(options: TransportOptions): Transporter;

  const nodemailer: {
    createTransport: typeof createTransport;
  };

  export default nodemailer;
}
