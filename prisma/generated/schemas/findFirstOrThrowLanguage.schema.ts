import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LanguageIncludeObjectSchema } from './objects/LanguageInclude.schema';
import { LanguageOrderByWithRelationInputObjectSchema } from './objects/LanguageOrderByWithRelationInput.schema';
import { LanguageWhereInputObjectSchema } from './objects/LanguageWhereInput.schema';
import { LanguageWhereUniqueInputObjectSchema } from './objects/LanguageWhereUniqueInput.schema';
import { LanguageScalarFieldEnumSchema } from './enums/LanguageScalarFieldEnum.schema';
import { LanguageCountOutputTypeArgsObjectSchema } from './objects/LanguageCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LanguageFindFirstOrThrowSelectSchema: z.ZodType<Prisma.LanguageSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LanguageSelect>;

export const LanguageFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const LanguageFindFirstOrThrowSchema: z.ZodType<Prisma.LanguageFindFirstOrThrowArgs> = z.object({ select: LanguageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => LanguageIncludeObjectSchema.optional()), orderBy: z.union([LanguageOrderByWithRelationInputObjectSchema, LanguageOrderByWithRelationInputObjectSchema.array()]).optional(), where: LanguageWhereInputObjectSchema.optional(), cursor: LanguageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LanguageScalarFieldEnumSchema, LanguageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LanguageFindFirstOrThrowArgs>;

export const LanguageFindFirstOrThrowZodSchema = z.object({ select: LanguageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => LanguageIncludeObjectSchema.optional()), orderBy: z.union([LanguageOrderByWithRelationInputObjectSchema, LanguageOrderByWithRelationInputObjectSchema.array()]).optional(), where: LanguageWhereInputObjectSchema.optional(), cursor: LanguageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LanguageScalarFieldEnumSchema, LanguageScalarFieldEnumSchema.array()]).optional() }).strict();