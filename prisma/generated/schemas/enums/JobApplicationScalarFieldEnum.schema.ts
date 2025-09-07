import { z } from 'zod';

export const JobApplicationScalarFieldEnumSchema = z.enum(['id', 'userId', 'jobId', 'resumeId', 'status', 'notes', 'isArchived', 'createdAt', 'updatedAt'])