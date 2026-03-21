import * as z from 'zod';

export const CollegeScalarFieldEnumSchema = z.enum(['id', 'name', 'city', 'state', 'collegeType', 'logoUrl', 'websiteUrl', 'createdAt', 'updatedAt', 'country', 'accrediation', 'address', 'affiliatedUniversity', 'deletedAt', 'establisedYear', 'latitude', 'longitude', 'officialEmail', 'phone', 'pincode', 'regitrationNumber', 'verificationNote', 'verififedTime', 'verified'])

export type CollegeScalarFieldEnum = z.infer<typeof CollegeScalarFieldEnumSchema>;