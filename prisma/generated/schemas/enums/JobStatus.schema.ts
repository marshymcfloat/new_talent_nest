import { z } from 'zod';

export const JobStatusSchema = z.enum(['ACTIVE', 'PAUSED', 'CLOSED'])

export type JobStatus = z.infer<typeof JobStatusSchema>;