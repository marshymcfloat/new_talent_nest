import { z } from 'zod';

// prettier-ignore
export const ResumeModelSchema = z.object({
    id: z.string(),
    Title: z.string(),
    url: z.string(),
    isPrimary: z.boolean(),
    userId: z.string(),
    User: z.unknown(),
    JobApplications: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ResumeModelType = z.infer<typeof ResumeModelSchema>;
