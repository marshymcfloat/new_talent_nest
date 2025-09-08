import { z } from 'zod';

export const UserRoleSchema = z.enum(['EMPLOYER', 'JOB_SEEKER'])

export type UserRole = z.infer<typeof UserRoleSchema>;