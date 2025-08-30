import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LicenceAndCertificateSelectObjectSchema } from './LicenceAndCertificateSelect.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  select: z.lazy(() => LicenceAndCertificateSelectObjectSchema).optional()
}).strict();
export const LicenceAndCertificateArgsObjectSchema = makeSchema();
export const LicenceAndCertificateArgsObjectZodSchema = makeSchema();
