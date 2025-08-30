import { z } from 'zod';
import { LicenceAndCertificateSelectObjectSchema } from './objects/LicenceAndCertificateSelect.schema';
import { LicenceAndCertificateWhereUniqueInputObjectSchema } from './objects/LicenceAndCertificateWhereUniqueInput.schema';
import { LicenceAndCertificateCreateInputObjectSchema } from './objects/LicenceAndCertificateCreateInput.schema';
import { LicenceAndCertificateUncheckedCreateInputObjectSchema } from './objects/LicenceAndCertificateUncheckedCreateInput.schema';
import { LicenceAndCertificateUpdateInputObjectSchema } from './objects/LicenceAndCertificateUpdateInput.schema';
import { LicenceAndCertificateUncheckedUpdateInputObjectSchema } from './objects/LicenceAndCertificateUncheckedUpdateInput.schema';

export const LicenceAndCertificateUpsertSchema = z.object({ select: LicenceAndCertificateSelectObjectSchema.optional(),  where: LicenceAndCertificateWhereUniqueInputObjectSchema, create: z.union([ LicenceAndCertificateCreateInputObjectSchema, LicenceAndCertificateUncheckedCreateInputObjectSchema ]), update: z.union([ LicenceAndCertificateUpdateInputObjectSchema, LicenceAndCertificateUncheckedUpdateInputObjectSchema ])  })