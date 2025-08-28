import { z } from 'zod';
import { ResumeSelectObjectSchema } from './objects/ResumeSelect.schema';
import { ResumeIncludeObjectSchema } from './objects/ResumeInclude.schema';
import { ResumeWhereUniqueInputObjectSchema } from './objects/ResumeWhereUniqueInput.schema';
import { ResumeCreateInputObjectSchema } from './objects/ResumeCreateInput.schema';
import { ResumeUncheckedCreateInputObjectSchema } from './objects/ResumeUncheckedCreateInput.schema';
import { ResumeUpdateInputObjectSchema } from './objects/ResumeUpdateInput.schema';
import { ResumeUncheckedUpdateInputObjectSchema } from './objects/ResumeUncheckedUpdateInput.schema';

export const ResumeUpsertSchema = z.object({ select: ResumeSelectObjectSchema.optional(), include: ResumeIncludeObjectSchema.optional(), where: ResumeWhereUniqueInputObjectSchema, create: z.union([ ResumeCreateInputObjectSchema, ResumeUncheckedCreateInputObjectSchema ]), update: z.union([ ResumeUpdateInputObjectSchema, ResumeUncheckedUpdateInputObjectSchema ])  })