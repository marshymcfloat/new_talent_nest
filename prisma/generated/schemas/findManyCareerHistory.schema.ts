import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CareerHistoryIncludeObjectSchema } from './objects/CareerHistoryInclude.schema';
import { CareerHistoryOrderByWithRelationInputObjectSchema } from './objects/CareerHistoryOrderByWithRelationInput.schema';
import { CareerHistoryWhereInputObjectSchema } from './objects/CareerHistoryWhereInput.schema';
import { CareerHistoryWhereUniqueInputObjectSchema } from './objects/CareerHistoryWhereUniqueInput.schema';
import { CareerHistoryScalarFieldEnumSchema } from './enums/CareerHistoryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CareerHistoryFindManySelectSchema: z.ZodType<Prisma.CareerHistorySelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    company: z.boolean().optional(),
    dateStarted: z.boolean().optional(),
    dateEnded: z.boolean().optional(),
    description: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CareerHistorySelect>;

export const CareerHistoryFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    company: z.boolean().optional(),
    dateStarted: z.boolean().optional(),
    dateEnded: z.boolean().optional(),
    description: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional()
  }).strict();

export const CareerHistoryFindManySchema: z.ZodType<Prisma.CareerHistoryFindManyArgs> = z.object({ select: CareerHistoryFindManySelectSchema.optional(), include: z.lazy(() => CareerHistoryIncludeObjectSchema.optional()), orderBy: z.union([CareerHistoryOrderByWithRelationInputObjectSchema, CareerHistoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CareerHistoryWhereInputObjectSchema.optional(), cursor: CareerHistoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CareerHistoryScalarFieldEnumSchema, CareerHistoryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CareerHistoryFindManyArgs>;

export const CareerHistoryFindManyZodSchema = z.object({ select: CareerHistoryFindManySelectSchema.optional(), include: z.lazy(() => CareerHistoryIncludeObjectSchema.optional()), orderBy: z.union([CareerHistoryOrderByWithRelationInputObjectSchema, CareerHistoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CareerHistoryWhereInputObjectSchema.optional(), cursor: CareerHistoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CareerHistoryScalarFieldEnumSchema, CareerHistoryScalarFieldEnumSchema.array()]).optional() }).strict();