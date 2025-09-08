import { z } from 'zod';

export const EducationScalarFieldEnumSchema = z.enum(['id', 'userId', 'course', 'institution', 'highlight', 'isComplete', 'finishedYear', 'expectedFinishMonth', 'expectedFinishYear', 'deletedAt'])

export type EducationScalarFieldEnum = z.infer<typeof EducationScalarFieldEnumSchema>;