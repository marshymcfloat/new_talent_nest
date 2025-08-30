import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LicenceAndCertificateOrderByWithRelationInputObjectSchema } from './objects/LicenceAndCertificateOrderByWithRelationInput.schema';
import { LicenceAndCertificateWhereInputObjectSchema } from './objects/LicenceAndCertificateWhereInput.schema';
import { LicenceAndCertificateWhereUniqueInputObjectSchema } from './objects/LicenceAndCertificateWhereUniqueInput.schema';
import { LicenceAndCertificateScalarFieldEnumSchema } from './enums/LicenceAndCertificateScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LicenceAndCertificateFindManySelectSchema: z.ZodType<Prisma.LicenceAndCertificateSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    organization: z.boolean().optional(),
    dateIssed: z.boolean().optional(),
    expiryDate: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LicenceAndCertificateSelect>;

export const LicenceAndCertificateFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    organization: z.boolean().optional(),
    dateIssed: z.boolean().optional(),
    expiryDate: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const LicenceAndCertificateFindManySchema: z.ZodType<Prisma.LicenceAndCertificateFindManyArgs> = z.object({ select: LicenceAndCertificateFindManySelectSchema.optional(),  orderBy: z.union([LicenceAndCertificateOrderByWithRelationInputObjectSchema, LicenceAndCertificateOrderByWithRelationInputObjectSchema.array()]).optional(), where: LicenceAndCertificateWhereInputObjectSchema.optional(), cursor: LicenceAndCertificateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.LicenceAndCertificateScalarFieldEnum), z.nativeEnum(Prisma.LicenceAndCertificateScalarFieldEnum).array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LicenceAndCertificateFindManyArgs>;

export const LicenceAndCertificateFindManyZodSchema = z.object({ select: LicenceAndCertificateFindManySelectSchema.optional(),  orderBy: z.union([LicenceAndCertificateOrderByWithRelationInputObjectSchema, LicenceAndCertificateOrderByWithRelationInputObjectSchema.array()]).optional(), where: LicenceAndCertificateWhereInputObjectSchema.optional(), cursor: LicenceAndCertificateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.LicenceAndCertificateScalarFieldEnum), z.nativeEnum(Prisma.LicenceAndCertificateScalarFieldEnum).array()]).optional() }).strict();