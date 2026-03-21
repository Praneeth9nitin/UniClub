import * as z from 'zod';
// prettier-ignore
export const clubAdminInputSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    clubId: z.string(),
    club: z.unknown()
}).strict();

export type clubAdminInputType = z.infer<typeof clubAdminInputSchema>;
