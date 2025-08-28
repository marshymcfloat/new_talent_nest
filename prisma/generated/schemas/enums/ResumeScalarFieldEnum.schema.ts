import { z } from 'zod';

export const ResumeScalarFieldEnumSchema = z.enum(['id', 'Title', 'url', 'isPrimary', 'userId', 'createdAt', 'updatedAt'])