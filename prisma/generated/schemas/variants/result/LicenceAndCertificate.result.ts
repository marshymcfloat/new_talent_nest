import { z } from 'zod';

// prettier-ignore
export const LicenceAndCertificateResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    organization: z.string().nullable(),
    dateIssed: z.date().nullable(),
    expiryDate: z.date().nullable(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type LicenceAndCertificateResultType = z.infer<typeof LicenceAndCertificateResultSchema>;
