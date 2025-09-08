import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  organization: z.string().optional().nullable(),
  dateIssed: z.coerce.date().optional().nullable(),
  expiryDate: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const LicenceAndCertificateCreateManyInputObjectSchema: z.ZodType<Prisma.LicenceAndCertificateCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LicenceAndCertificateCreateManyInput>;
export const LicenceAndCertificateCreateManyInputObjectZodSchema = makeSchema();
