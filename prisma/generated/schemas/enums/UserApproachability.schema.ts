import { z } from 'zod';

export const UserApproachabilitySchema = z.enum(['OPEN', 'RECRUITERS_ONLY', 'CLOSED'])

export type UserApproachability = z.infer<typeof UserApproachabilitySchema>;