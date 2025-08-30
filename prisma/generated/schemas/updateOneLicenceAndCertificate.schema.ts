import { z } from 'zod';
import { LicenceAndCertificateSelectObjectSchema } from './objects/LicenceAndCertificateSelect.schema';
import { LicenceAndCertificateUpdateInputObjectSchema } from './objects/LicenceAndCertificateUpdateInput.schema';
import { LicenceAndCertificateUncheckedUpdateInputObjectSchema } from './objects/LicenceAndCertificateUncheckedUpdateInput.schema';
import { LicenceAndCertificateWhereUniqueInputObjectSchema } from './objects/LicenceAndCertificateWhereUniqueInput.schema';

export const LicenceAndCertificateUpdateOneSchema = z.object({ select: LicenceAndCertificateSelectObjectSchema.optional(),  data: z.union([LicenceAndCertificateUpdateInputObjectSchema, LicenceAndCertificateUncheckedUpdateInputObjectSchema]), where: LicenceAndCertificateWhereUniqueInputObjectSchema  })