import { z } from 'zod';

export const CareerHistoryScalarFieldEnumSchema = z.enum(['id', 'title', 'company', 'dateStarted', 'dateEnded', 'description', 'userId', 'createdAt', 'updatedAt', 'deletedAt'])

export type CareerHistoryScalarFieldEnum = z.infer<typeof CareerHistoryScalarFieldEnumSchema>;