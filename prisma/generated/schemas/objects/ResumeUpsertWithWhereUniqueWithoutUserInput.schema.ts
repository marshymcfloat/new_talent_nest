import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateWithoutUserInputObjectSchema } from './ResumeUpdateWithoutUserInput.schema';
import { ResumeUncheckedUpdateWithoutUserInputObjectSchema } from './ResumeUncheckedUpdateWithoutUserInput.schema';
import { ResumeCreateWithoutUserInputObjectSchema } from './ResumeCreateWithoutUserInput.schema';
import { ResumeUncheckedCreateWithoutUserInputObjectSchema } from './ResumeUncheckedCreateWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ResumeUpdateWithoutUserInputObjectSchema), z.lazy(() => ResumeUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ResumeCreateWithoutUserInputObjectSchema), z.lazy(() => ResumeUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ResumeUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ResumeUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUpsertWithWhereUniqueWithoutUserInput>;
export const ResumeUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
