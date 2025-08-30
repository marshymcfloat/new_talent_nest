import { z } from 'zod';
import { LanguageSelectObjectSchema } from './objects/LanguageSelect.schema';
import { LanguageCreateManyInputObjectSchema } from './objects/LanguageCreateManyInput.schema';

export const LanguageCreateManyAndReturnSchema = z.object({ select: LanguageSelectObjectSchema.optional(), data: z.union([ LanguageCreateManyInputObjectSchema, z.array(LanguageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()