import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberWhereUniqueInputObjectSchema } from './CompanyMemberWhereUniqueInput.schema';
import { CompanyMemberUpdateWithoutUserInputObjectSchema } from './CompanyMemberUpdateWithoutUserInput.schema';
import { CompanyMemberUncheckedUpdateWithoutUserInputObjectSchema } from './CompanyMemberUncheckedUpdateWithoutUserInput.schema';
import { CompanyMemberCreateWithoutUserInputObjectSchema } from './CompanyMemberCreateWithoutUserInput.schema';
import { CompanyMemberUncheckedCreateWithoutUserInputObjectSchema } from './CompanyMemberUncheckedCreateWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CompanyMemberUpdateWithoutUserInputObjectSchema), z.lazy(() => CompanyMemberUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => CompanyMemberCreateWithoutUserInputObjectSchema), z.lazy(() => CompanyMemberUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CompanyMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CompanyMemberUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUpsertWithWhereUniqueWithoutUserInput>;
export const CompanyMemberUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
