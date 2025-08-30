import { z } from 'zod';
import { LanguageSelectObjectSchema } from './objects/LanguageSelect.schema';
import { LanguageIncludeObjectSchema } from './objects/LanguageInclude.schema';
import { LanguageCreateInputObjectSchema } from './objects/LanguageCreateInput.schema';
import { LanguageUncheckedCreateInputObjectSchema } from './objects/LanguageUncheckedCreateInput.schema';

export const LanguageCreateOneSchema = z.object({ select: LanguageSelectObjectSchema.optional(), include: LanguageIncludeObjectSchema.optional(), data: z.union([LanguageCreateInputObjectSchema, LanguageUncheckedCreateInputObjectSchema])  })