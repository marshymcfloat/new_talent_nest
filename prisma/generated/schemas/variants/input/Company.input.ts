import { z } from 'zod';

// prettier-ignore
export const CompanyInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    websiteUrl: z.string().optional().nullable(),
    logoUrl: z.string().optional().nullable(),
    verifiedDomains: z.array(z.string()),
    jobs: z.array(z.unknown()),
    members: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CompanyInputType = z.infer<typeof CompanyInputSchema>;
