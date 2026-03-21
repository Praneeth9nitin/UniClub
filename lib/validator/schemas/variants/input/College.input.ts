import * as z from 'zod';
import { CollegeTypeSchema } from '../../enums/CollegeType.schema';
import { VerificationStatusSchema } from '../../enums/VerificationStatus.schema';
// prettier-ignore
export const CollegeInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    city: z.string(),
    state: z.string(),
    collegeType: CollegeTypeSchema.optional().nullable(),
    logoUrl: z.string().optional().nullable(),
    websiteUrl: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    country: z.string(),
    accrediation: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    affiliatedUniversity: z.string().optional().nullable(),
    deletedAt: z.date().optional().nullable(),
    establisedYear: z.number().int().optional().nullable(),
    latitude: z.string().optional().nullable(),
    longitude: z.string().optional().nullable(),
    officialEmail: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    pincode: z.string().optional().nullable(),
    regitrationNumber: z.string().optional().nullable(),
    verificationNote: z.string().optional().nullable(),
    verififedTime: z.date().optional().nullable(),
    verified: VerificationStatusSchema,
    clubs: z.array(z.unknown()),
    admin: z.unknown().optional().nullable(),
    faculty: z.array(z.unknown()),
    students: z.array(z.unknown()),
    followers: z.array(z.unknown())
}).strict();

export type CollegeInputType = z.infer<typeof CollegeInputSchema>;
