import { z } from 'zod';

export const JobScalarFieldEnumSchema = z.enum(['id', 'company', 'title', 'location', 'type', 'salary', 'JobClass', 'createdAt', 'updatedAt'])