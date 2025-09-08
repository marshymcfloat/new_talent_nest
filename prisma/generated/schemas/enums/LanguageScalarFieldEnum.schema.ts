import { z } from 'zod';

export const LanguageScalarFieldEnumSchema = z.enum(['id', 'name'])

export type LanguageScalarFieldEnum = z.infer<typeof LanguageScalarFieldEnumSchema>;