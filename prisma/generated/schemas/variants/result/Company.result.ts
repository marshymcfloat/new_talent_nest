import { z } from 'zod';

// prettier-ignore
export const CompanyResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    websiteUrl: z.string().nullable(),
    logoUrl: z.string().nullable(),
    verifiedDomains: z.array(z.string()),
    jobs: z.array(z.unknown()),
    questions: z.array(z.unknown()),
    members: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CompanyResultType = z.infer<typeof CompanyResultSchema>;
