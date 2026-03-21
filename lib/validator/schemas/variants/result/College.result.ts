import * as z from 'zod';
import { CollegeTypeSchema } from '../../enums/CollegeType.schema';
import { VerificationStatusSchema } from '../../enums/VerificationStatus.schema';
// prettier-ignore
export const CollegeResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    city: z.string(),
    state: z.string(),
    collegeType: CollegeTypeSchema.nullable(),
    logoUrl: z.string().nullable(),
    websiteUrl: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    country: z.string(),
    accrediation: z.string().nullable(),
    address: z.string().nullable(),
    affiliatedUniversity: z.string().nullable(),
    deletedAt: z.date().nullable(),
    establisedYear: z.number().int().nullable(),
    latitude: z.string().nullable(),
    longitude: z.string().nullable(),
    officialEmail: z.string().nullable(),
    phone: z.string().nullable(),
    pincode: z.string().nullable(),
    regitrationNumber: z.string().nullable(),
    verificationNote: z.string().nullable(),
    verififedTime: z.date().nullable(),
    verified: VerificationStatusSchema,
    clubs: z.array(z.unknown()),
    admin: z.unknown().nullable(),
    faculty: z.array(z.unknown()),
    students: z.array(z.unknown()),
    followers: z.array(z.unknown())
}).strict();

export type CollegeResultType = z.infer<typeof CollegeResultSchema>;
