import { z } from 'zod';

// prettier-ignore
export const LicenceAndCertificateInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    organization: z.string().optional().nullable(),
    dateIssed: z.date().optional().nullable(),
    expiryDate: z.date().optional().nullable(),
    description: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type LicenceAndCertificateInputType = z.infer<typeof LicenceAndCertificateInputSchema>;
