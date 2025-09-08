import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'username', 'password', 'role', 'summary', 'availability', 'preferredWorkType', 'preferredLocation', 'rightToWork', 'expectedSalary', 'jobClassification'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;