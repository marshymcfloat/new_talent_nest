import { z } from 'zod';

export const ApplicationStatusSchema = z.enum(['NEW', 'IN_REVIEW', 'INTERVIEWING', 'OFFERED', 'HIRED', 'REJECTED'])

export type ApplicationStatus = z.infer<typeof ApplicationStatusSchema>;