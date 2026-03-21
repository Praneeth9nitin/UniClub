import * as z from 'zod';

export const CollegeAdminScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'password', 'phone', 'collegeId'])

export type CollegeAdminScalarFieldEnum = z.infer<typeof CollegeAdminScalarFieldEnumSchema>;