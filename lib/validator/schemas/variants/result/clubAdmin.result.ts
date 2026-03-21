import * as z from 'zod';
// prettier-ignore
export const clubAdminResultSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    clubId: z.string(),
    club: z.unknown()
}).strict();

export type clubAdminResultType = z.infer<typeof clubAdminResultSchema>;
