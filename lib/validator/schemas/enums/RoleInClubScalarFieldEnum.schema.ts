import * as z from 'zod';

export const RoleInClubScalarFieldEnumSchema = z.enum(['id', 'name', 'clubId'])

export type RoleInClubScalarFieldEnum = z.infer<typeof RoleInClubScalarFieldEnumSchema>;