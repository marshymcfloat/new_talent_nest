import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeCreateWithoutUserInputObjectSchema } from './ResumeCreateWithoutUserInput.schema';
import { ResumeUncheckedCreateWithoutUserInputObjectSchema } from './ResumeUncheckedCreateWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResumeCreateWithoutUserInputObjectSchema), z.lazy(() => ResumeUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ResumeCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ResumeCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCreateOrConnectWithoutUserInput>;
export const ResumeCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
