import { z } from 'zod';
import { LicenceAndCertificateOrderByWithRelationInputObjectSchema } from './objects/LicenceAndCertificateOrderByWithRelationInput.schema';
import { LicenceAndCertificateWhereInputObjectSchema } from './objects/LicenceAndCertificateWhereInput.schema';
import { LicenceAndCertificateWhereUniqueInputObjectSchema } from './objects/LicenceAndCertificateWhereUniqueInput.schema';
import { LicenceAndCertificateCountAggregateInputObjectSchema } from './objects/LicenceAndCertificateCountAggregateInput.schema';
import { LicenceAndCertificateMinAggregateInputObjectSchema } from './objects/LicenceAndCertificateMinAggregateInput.schema';
import { LicenceAndCertificateMaxAggregateInputObjectSchema } from './objects/LicenceAndCertificateMaxAggregateInput.schema';

export const LicenceAndCertificateAggregateSchema = z.object({ orderBy: z.union([LicenceAndCertificateOrderByWithRelationInputObjectSchema, LicenceAndCertificateOrderByWithRelationInputObjectSchema.array()]).optional(), where: LicenceAndCertificateWhereInputObjectSchema.optional(), cursor: LicenceAndCertificateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), LicenceAndCertificateCountAggregateInputObjectSchema ]).optional(), _min: LicenceAndCertificateMinAggregateInputObjectSchema.optional(), _max: LicenceAndCertificateMaxAggregateInputObjectSchema.optional() })