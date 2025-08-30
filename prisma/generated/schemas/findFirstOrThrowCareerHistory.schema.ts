import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CareerHistoryIncludeObjectSchema } from './objects/CareerHistoryInclude.schema';
import { CareerHistoryOrderByWithRelationInputObjectSchema } from './objects/CareerHistoryOrderByWithRelationInput.schema';
import { CareerHistoryWhereInputObjectSchema } from './objects/CareerHistoryWhereInput.schema';
import { CareerHistoryWhereUniqueInputObjectSchema } from './objects/CareerHistoryWhereUniqueInput.schema';
import { CareerHistoryScalarFieldEnumSchema } from './enums/CareerHistoryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CareerHistoryFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CareerHistorySelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    company: z.boolean().optional(),
    dateStarted: z.boolean().optional(),
    dateEnded: z.boolean().optional(),
    description: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CareerHistorySelect>;

export const CareerHistoryFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    company: z.boolean().optional(),
    dateStarted: z.boolean().optional(),
    dateEnded: z.boolean().optional(),
    description: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const CareerHistoryFindFirstOrThrowSchema: z.ZodType<Prisma.CareerHistoryFindFirstOrThrowArgs> = z.object({ select: CareerHistoryFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CareerHistoryIncludeObjectSchema.optional()), orderBy: z.union([CareerHistoryOrderByWithRelationInputObjectSchema, CareerHistoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CareerHistoryWhereInputObjectSchema.optional(), cursor: CareerHistoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.CareerHistoryScalarFieldEnum), z.nativeEnum(Prisma.CareerHistoryScalarFieldEnum).array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CareerHistoryFindFirstOrThrowArgs>;

export const CareerHistoryFindFirstOrThrowZodSchema = z.object({ select: CareerHistoryFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CareerHistoryIncludeObjectSchema.optional()), orderBy: z.union([CareerHistoryOrderByWithRelationInputObjectSchema, CareerHistoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CareerHistoryWhereInputObjectSchema.optional(), cursor: CareerHistoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.CareerHistoryScalarFieldEnum), z.nativeEnum(Prisma.CareerHistoryScalarFieldEnum).array()]).optional() }).strict();