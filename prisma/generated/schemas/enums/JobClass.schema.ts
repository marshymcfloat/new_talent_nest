import { z } from 'zod';

export const JobClassSchema = z.enum(['ACCOUNTING', 'CONSTRUCTION', 'SALES', 'SUPPORT', 'IT'])

export type JobClass = z.infer<typeof JobClassSchema>;