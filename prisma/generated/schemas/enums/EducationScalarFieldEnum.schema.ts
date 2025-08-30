import { z } from 'zod';

export const EducationScalarFieldEnumSchema = z.enum(['id', 'userId', 'course', 'institution', 'dateStarted', 'dateEnded', 'highlight', 'createdAt', 'updatedAt'])