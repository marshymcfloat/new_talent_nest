import { z } from 'zod';
import { LanguageSelectObjectSchema } from './objects/LanguageSelect.schema';
import { LanguageIncludeObjectSchema } from './objects/LanguageInclude.schema';
import { LanguageWhereUniqueInputObjectSchema } from './objects/LanguageWhereUniqueInput.schema';
import { LanguageCreateInputObjectSchema } from './objects/LanguageCreateInput.schema';
import { LanguageUncheckedCreateInputObjectSchema } from './objects/LanguageUncheckedCreateInput.schema';
import { LanguageUpdateInputObjectSchema } from './objects/LanguageUpdateInput.schema';
import { LanguageUncheckedUpdateInputObjectSchema } from './objects/LanguageUncheckedUpdateInput.schema';

export const LanguageUpsertSchema = z.object({ select: LanguageSelectObjectSchema.optional(), include: LanguageIncludeObjectSchema.optional(), where: LanguageWhereUniqueInputObjectSchema, create: z.union([ LanguageCreateInputObjectSchema, LanguageUncheckedCreateInputObjectSchema ]), update: z.union([ LanguageUpdateInputObjectSchema, LanguageUncheckedUpdateInputObjectSchema ])  })