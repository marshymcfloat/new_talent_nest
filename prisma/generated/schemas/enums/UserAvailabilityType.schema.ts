import { z } from 'zod';

export const UserAvailabilityTypeSchema = z.enum(['NOW', 'TWOWEEKS', 'FOURWEEKS', 'EIGHTWEEKS', 'TWELVEPLUSWEEKS'])

export type UserAvailabilityType = z.infer<typeof UserAvailabilityTypeSchema>;