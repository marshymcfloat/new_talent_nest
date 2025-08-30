import { z } from 'zod';
import { LicenceAndCertificateWhereInputObjectSchema } from './objects/LicenceAndCertificateWhereInput.schema';
import { LicenceAndCertificateOrderByWithAggregationInputObjectSchema } from './objects/LicenceAndCertificateOrderByWithAggregationInput.schema';
import { LicenceAndCertificateScalarWhereWithAggregatesInputObjectSchema } from './objects/LicenceAndCertificateScalarWhereWithAggregatesInput.schema';
import { LicenceAndCertificateScalarFieldEnumSchema } from './enums/LicenceAndCertificateScalarFieldEnum.schema';
import { LicenceAndCertificateCountAggregateInputObjectSchema } from './objects/LicenceAndCertificateCountAggregateInput.schema';
import { LicenceAndCertificateMinAggregateInputObjectSchema } from './objects/LicenceAndCertificateMinAggregateInput.schema';
import { LicenceAndCertificateMaxAggregateInputObjectSchema } from './objects/LicenceAndCertificateMaxAggregateInput.schema';

export const LicenceAndCertificateGroupBySchema = z.object({ where: LicenceAndCertificateWhereInputObjectSchema.optional(), orderBy: z.union([LicenceAndCertificateOrderByWithAggregationInputObjectSchema, LicenceAndCertificateOrderByWithAggregationInputObjectSchema.array()]).optional(), having: LicenceAndCertificateScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(LicenceAndCertificateScalarFieldEnumSchema), _count: z.union([ z.literal(true), LicenceAndCertificateCountAggregateInputObjectSchema ]).optional(), _min: LicenceAndCertificateMinAggregateInputObjectSchema.optional(), _max: LicenceAndCertificateMaxAggregateInputObjectSchema.optional() })