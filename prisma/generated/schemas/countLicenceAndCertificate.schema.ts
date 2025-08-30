import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LicenceAndCertificateOrderByWithRelationInputObjectSchema } from './objects/LicenceAndCertificateOrderByWithRelationInput.schema';
import { LicenceAndCertificateWhereInputObjectSchema } from './objects/LicenceAndCertificateWhereInput.schema';
import { LicenceAndCertificateWhereUniqueInputObjectSchema } from './objects/LicenceAndCertificateWhereUniqueInput.schema';
import { LicenceAndCertificateCountAggregateInputObjectSchema } from './objects/LicenceAndCertificateCountAggregateInput.schema';

export const LicenceAndCertificateCountSchema: z.ZodType<Prisma.LicenceAndCertificateCountArgs> = z.object({ orderBy: z.union([LicenceAndCertificateOrderByWithRelationInputObjectSchema, LicenceAndCertificateOrderByWithRelationInputObjectSchema.array()]).optional(), where: LicenceAndCertificateWhereInputObjectSchema.optional(), cursor: LicenceAndCertificateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LicenceAndCertificateCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.LicenceAndCertificateCountArgs>;

export const LicenceAndCertificateCountZodSchema = z.object({ orderBy: z.union([LicenceAndCertificateOrderByWithRelationInputObjectSchema, LicenceAndCertificateOrderByWithRelationInputObjectSchema.array()]).optional(), where: LicenceAndCertificateWhereInputObjectSchema.optional(), cursor: LicenceAndCertificateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LicenceAndCertificateCountAggregateInputObjectSchema ]).optional() }).strict();