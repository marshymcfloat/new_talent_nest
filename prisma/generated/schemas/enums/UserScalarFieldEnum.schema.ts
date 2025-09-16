import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'username', 'password', 'role', 'summary', 'availability', 'preferredWorkTypes', 'preferredLocation', 'rightToWork', 'expectedSalary', 'jobClassification', 'approachability'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;