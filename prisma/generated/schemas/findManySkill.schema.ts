import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillIncludeObjectSchema } from './objects/SkillInclude.schema';
import { SkillOrderByWithRelationInputObjectSchema } from './objects/SkillOrderByWithRelationInput.schema';
import { SkillWhereInputObjectSchema } from './objects/SkillWhereInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './objects/SkillWhereUniqueInput.schema';
import { SkillScalarFieldEnumSchema } from './enums/SkillScalarFieldEnum.schema';
import { SkillCountOutputTypeArgsObjectSchema } from './objects/SkillCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SkillFindManySelectSchema: z.ZodType<Prisma.SkillSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SkillSelect>;

export const SkillFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SkillFindManySchema: z.ZodType<Prisma.SkillFindManyArgs> = z.object({ select: SkillFindManySelectSchema.optional(), include: z.lazy(() => SkillIncludeObjectSchema.optional()), orderBy: z.union([SkillOrderByWithRelationInputObjectSchema, SkillOrderByWithRelationInputObjectSchema.array()]).optional(), where: SkillWhereInputObjectSchema.optional(), cursor: SkillWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SkillScalarFieldEnumSchema, SkillScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SkillFindManyArgs>;

export const SkillFindManyZodSchema = z.object({ select: SkillFindManySelectSchema.optional(), include: z.lazy(() => SkillIncludeObjectSchema.optional()), orderBy: z.union([SkillOrderByWithRelationInputObjectSchema, SkillOrderByWithRelationInputObjectSchema.array()]).optional(), where: SkillWhereInputObjectSchema.optional(), cursor: SkillWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SkillScalarFieldEnumSchema, SkillScalarFieldEnumSchema.array()]).optional() }).strict();