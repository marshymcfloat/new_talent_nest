import { z } from 'zod';

export const SkillScalarFieldEnumSchema = z.enum(['id', 'name'])

export type SkillScalarFieldEnum = z.infer<typeof SkillScalarFieldEnumSchema>;