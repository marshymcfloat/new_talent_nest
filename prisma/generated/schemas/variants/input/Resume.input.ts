import { z } from 'zod';

// prettier-ignore
export const ResumeInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    url: z.string(),
    isPrimary: z.boolean(),
    userId: z.string(),
    User: z.unknown(),
    JobApplications: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable()
}).strict();

export type ResumeInputType = z.infer<typeof ResumeInputSchema>;
