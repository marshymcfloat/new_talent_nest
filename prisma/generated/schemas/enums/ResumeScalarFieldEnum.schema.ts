import { z } from 'zod';

export const ResumeScalarFieldEnumSchema = z.enum(['id', 'title', 'url', 'isPrimary', 'userId', 'createdAt', 'updatedAt', 'deletedAt'])

export type ResumeScalarFieldEnum = z.infer<typeof ResumeScalarFieldEnumSchema>;