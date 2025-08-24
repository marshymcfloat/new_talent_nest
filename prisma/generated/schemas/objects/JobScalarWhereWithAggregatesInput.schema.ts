import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumJobTypeWithAggregatesFilterObjectSchema } from './EnumJobTypeWithAggregatesFilter.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { EnumJobClassWithAggregatesFilterObjectSchema } from './EnumJobClassWithAggregatesFilter.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  company: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumJobTypeWithAggregatesFilterObjectSchema), JobTypeSchema]).optional(),
  salary: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  JobClass: z.union([z.lazy(() => EnumJobClassWithAggregatesFilterObjectSchema), JobClassSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional()
}).strict();
export const JobScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.JobScalarWhereWithAggregatesInput> = makeSchema();
export const JobScalarWhereWithAggregatesInputObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type JobScalarWhereWithAggregatesInput = {
  AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[];
  OR?: JobScalarWhereWithAggregatesInput[];
  NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[];
  id?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  company?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  title?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  location?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  type?: z.infer<typeof EnumJobTypeWithAggregatesFilterObjectSchema> | unknown;
  salary?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  JobClass?: z.infer<typeof EnumJobClassWithAggregatesFilterObjectSchema> | unknown;
  createdAt?: z.infer<typeof DateTimeWithAggregatesFilterObjectSchema> | Date;
  updatedAt?: z.infer<typeof DateTimeWithAggregatesFilterObjectSchema> | Date;
};
(JobScalarWhereWithAggregatesInputObjectZodSchema satisfies z.ZodType<JobScalarWhereWithAggregatesInput>);
