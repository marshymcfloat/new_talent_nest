import { z } from 'zod';
import { LanguageSelectObjectSchema } from './objects/LanguageSelect.schema';
import { LanguageUpdateManyMutationInputObjectSchema } from './objects/LanguageUpdateManyMutationInput.schema';
import { LanguageWhereInputObjectSchema } from './objects/LanguageWhereInput.schema';

export const LanguageUpdateManyAndReturnSchema = z.object({ select: LanguageSelectObjectSchema.optional(), data: LanguageUpdateManyMutationInputObjectSchema, where: LanguageWhereInputObjectSchema.optional()  }).strict()