import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumJobTypeFilterObjectSchema } from './EnumJobTypeFilter.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { EnumJobClassFilterObjectSchema } from './EnumJobClassFilter.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { JobApplicationListRelationFilterObjectSchema } from './JobApplicationListRelationFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  company: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumJobTypeFilterObjectSchema), JobTypeSchema]).optional(),
  salary: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  JobClass: z.union([z.lazy(() => EnumJobClassFilterObjectSchema), JobClassSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  JobApplication: z.lazy(() => JobApplicationListRelationFilterObjectSchema).optional()
}).strict();
export const JobWhereInputObjectSchema: z.ZodType<Prisma.JobWhereInput> = makeSchema();
export const JobWhereInputObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type JobWhereInput = {
  AND?: JobWhereInput | JobWhereInput[];
  OR?: JobWhereInput[];
  NOT?: JobWhereInput | JobWhereInput[];
  id?: z.infer<typeof StringFilterObjectSchema> | string;
  company?: z.infer<typeof StringFilterObjectSchema> | string;
  title?: z.infer<typeof StringFilterObjectSchema> | string;
  location?: z.infer<typeof StringFilterObjectSchema> | string;
  type?: z.infer<typeof EnumJobTypeFilterObjectSchema> | unknown;
  salary?: z.infer<typeof StringFilterObjectSchema> | string;
  JobClass?: z.infer<typeof EnumJobClassFilterObjectSchema> | unknown;
  createdAt?: z.infer<typeof DateTimeFilterObjectSchema> | Date;
  updatedAt?: z.infer<typeof DateTimeFilterObjectSchema> | Date;
  JobApplication?: z.infer<typeof JobApplicationListRelationFilterObjectSchema>;
};
(JobWhereInputObjectZodSchema satisfies z.ZodType<JobWhereInput>);
