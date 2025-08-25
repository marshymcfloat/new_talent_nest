import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationFindManySchema } from '../findManyJobApplication.schema';
import { AccountFindManySchema } from '../findManyAccount.schema';
import { SessionFindManySchema } from '../findManySession.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  JobApplication: z.union([z.boolean(), z.lazy(() => JobApplicationFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
