import { z } from 'zod';
import { LanguageWhereInputObjectSchema } from './objects/LanguageWhereInput.schema';
import { LanguageOrderByWithAggregationInputObjectSchema } from './objects/LanguageOrderByWithAggregationInput.schema';
import { LanguageScalarWhereWithAggregatesInputObjectSchema } from './objects/LanguageScalarWhereWithAggregatesInput.schema';
import { LanguageScalarFieldEnumSchema } from './enums/LanguageScalarFieldEnum.schema';
import { LanguageCountAggregateInputObjectSchema } from './objects/LanguageCountAggregateInput.schema';
import { LanguageMinAggregateInputObjectSchema } from './objects/LanguageMinAggregateInput.schema';
import { LanguageMaxAggregateInputObjectSchema } from './objects/LanguageMaxAggregateInput.schema';

export const LanguageGroupBySchema = z.object({ where: LanguageWhereInputObjectSchema.optional(), orderBy: z.union([LanguageOrderByWithAggregationInputObjectSchema, LanguageOrderByWithAggregationInputObjectSchema.array()]).optional(), having: LanguageScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(LanguageScalarFieldEnumSchema), _count: z.union([ z.literal(true), LanguageCountAggregateInputObjectSchema ]).optional(), _min: LanguageMinAggregateInputObjectSchema.optional(), _max: LanguageMaxAggregateInputObjectSchema.optional() })