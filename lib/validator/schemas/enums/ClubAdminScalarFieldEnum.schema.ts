import * as z from 'zod';

export const ClubAdminScalarFieldEnumSchema = z.enum(['id', 'firstName', 'lastName', 'email', 'password', 'clubId'])

export type ClubAdminScalarFieldEnum = z.infer<typeof ClubAdminScalarFieldEnumSchema>;