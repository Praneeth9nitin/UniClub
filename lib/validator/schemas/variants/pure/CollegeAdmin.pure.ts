import * as z from 'zod';
// prettier-ignore
export const CollegeAdminModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string().nullable(),
    collegeId: z.string(),
    college: z.unknown()
}).strict();

export type CollegeAdminPureType = z.infer<typeof CollegeAdminModelSchema>;
