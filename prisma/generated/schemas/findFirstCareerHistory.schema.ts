import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CareerHistoryIncludeObjectSchema } from './objects/CareerHistoryInclude.schema';
import { CareerHistoryOrderByWithRelationInputObjectSchema } from './objects/CareerHistoryOrderByWithRelationInput.schema';
import { CareerHistoryWhereInputObjectSchema } from './objects/CareerHistoryWhereInput.schema';
import { CareerHistoryWhereUniqueInputObjectSchema } from './objects/CareerHistoryWhereUniqueInput.schema';
import { CareerHistoryScalarFieldEnumSchema } from './enums/CareerHistoryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CareerHistoryFindFirstSelectSchema: z.ZodType<Prisma.CareerHistorySelect> = z.object({
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

export const CareerHistoryFindFirstSelectZodSchema = z.object({
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

export const CareerHistoryFindFirstSchema: z.ZodType<Prisma.CareerHistoryFindFirstArgs> = z.object({ select: CareerHistoryFindFirstSelectSchema.optional(), include: z.lazy(() => CareerHistoryIncludeObjectSchema.optional()), orderBy: z.union([CareerHistoryOrderByWithRelationInputObjectSchema, CareerHistoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CareerHistoryWhereInputObjectSchema.optional(), cursor: CareerHistoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.CareerHistoryScalarFieldEnum), z.nativeEnum(Prisma.CareerHistoryScalarFieldEnum).array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CareerHistoryFindFirstArgs>;

export const CareerHistoryFindFirstZodSchema = z.object({ select: CareerHistoryFindFirstSelectSchema.optional(), include: z.lazy(() => CareerHistoryIncludeObjectSchema.optional()), orderBy: z.union([CareerHistoryOrderByWithRelationInputObjectSchema, CareerHistoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CareerHistoryWhereInputObjectSchema.optional(), cursor: CareerHistoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.CareerHistoryScalarFieldEnum), z.nativeEnum(Prisma.CareerHistoryScalarFieldEnum).array()]).optional() }).strict();