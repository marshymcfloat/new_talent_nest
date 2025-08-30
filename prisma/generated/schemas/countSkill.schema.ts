import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillOrderByWithRelationInputObjectSchema } from './objects/SkillOrderByWithRelationInput.schema';
import { SkillWhereInputObjectSchema } from './objects/SkillWhereInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './objects/SkillWhereUniqueInput.schema';
import { SkillCountAggregateInputObjectSchema } from './objects/SkillCountAggregateInput.schema';

export const SkillCountSchema: z.ZodType<Prisma.SkillCountArgs> = z.object({ orderBy: z.union([SkillOrderByWithRelationInputObjectSchema, SkillOrderByWithRelationInputObjectSchema.array()]).optional(), where: SkillWhereInputObjectSchema.optional(), cursor: SkillWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SkillCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SkillCountArgs>;

export const SkillCountZodSchema = z.object({ orderBy: z.union([SkillOrderByWithRelationInputObjectSchema, SkillOrderByWithRelationInputObjectSchema.array()]).optional(), where: SkillWhereInputObjectSchema.optional(), cursor: SkillWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SkillCountAggregateInputObjectSchema ]).optional() }).strict();