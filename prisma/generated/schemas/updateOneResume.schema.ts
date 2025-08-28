import { z } from 'zod';
import { ResumeSelectObjectSchema } from './objects/ResumeSelect.schema';
import { ResumeIncludeObjectSchema } from './objects/ResumeInclude.schema';
import { ResumeUpdateInputObjectSchema } from './objects/ResumeUpdateInput.schema';
import { ResumeUncheckedUpdateInputObjectSchema } from './objects/ResumeUncheckedUpdateInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './objects/ResumeWhereUniqueInput.schema';

export const ResumeUpdateOneSchema = z.object({ select: ResumeSelectObjectSchema.optional(), include: ResumeIncludeObjectSchema.optional(), data: z.union([ResumeUpdateInputObjectSchema, ResumeUncheckedUpdateInputObjectSchema]), where: ResumeWhereUniqueInputObjectSchema  })