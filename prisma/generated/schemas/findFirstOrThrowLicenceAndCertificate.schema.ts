import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LicenceAndCertificateOrderByWithRelationInputObjectSchema } from './objects/LicenceAndCertificateOrderByWithRelationInput.schema';
import { LicenceAndCertificateWhereInputObjectSchema } from './objects/LicenceAndCertificateWhereInput.schema';
import { LicenceAndCertificateWhereUniqueInputObjectSchema } from './objects/LicenceAndCertificateWhereUniqueInput.schema';
import { LicenceAndCertificateScalarFieldEnumSchema } from './enums/LicenceAndCertificateScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LicenceAndCertificateFindFirstOrThrowSelectSchema: z.ZodType<Prisma.LicenceAndCertificateSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    organization: z.boolean().optional(),
    dateIssed: z.boolean().optional(),
    expiryDate: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LicenceAndCertificateSelect>;

export const LicenceAndCertificateFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    organization: z.boolean().optional(),
    dateIssed: z.boolean().optional(),
    expiryDate: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const LicenceAndCertificateFindFirstOrThrowSchema: z.ZodType<Prisma.LicenceAndCertificateFindFirstOrThrowArgs> = z.object({ select: LicenceAndCertificateFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([LicenceAndCertificateOrderByWithRelationInputObjectSchema, LicenceAndCertificateOrderByWithRelationInputObjectSchema.array()]).optional(), where: LicenceAndCertificateWhereInputObjectSchema.optional(), cursor: LicenceAndCertificateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LicenceAndCertificateScalarFieldEnumSchema, LicenceAndCertificateScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LicenceAndCertificateFindFirstOrThrowArgs>;

export const LicenceAndCertificateFindFirstOrThrowZodSchema = z.object({ select: LicenceAndCertificateFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([LicenceAndCertificateOrderByWithRelationInputObjectSchema, LicenceAndCertificateOrderByWithRelationInputObjectSchema.array()]).optional(), where: LicenceAndCertificateWhereInputObjectSchema.optional(), cursor: LicenceAndCertificateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LicenceAndCertificateScalarFieldEnumSchema, LicenceAndCertificateScalarFieldEnumSchema.array()]).optional() }).strict();