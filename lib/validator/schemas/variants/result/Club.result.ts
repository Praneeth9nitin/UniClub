import * as z from 'zod';
// prettier-ignore
export const ClubResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    collegeId: z.string(),
    description: z.string().nullable(),
    cordinatorId: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    onHold: z.boolean(),
    category: z.string(),
    college: z.unknown(),
    coordinator: z.unknown().nullable(),
    events: z.array(z.unknown()),
    role: z.array(z.unknown()),
    students: z.array(z.unknown()),
    clubAdmin: z.unknown().nullable(),
    logoUrl: z.string().nullable(),
    instagramUrl: z.string().nullable(),
    twitterUrl: z.string().nullable(),
    linkedinUrl: z.string().nullable(),
    youtubeUrl: z.string().nullable(),
    websiteUrl: z.string().nullable(),
    followers: z.array(z.unknown())
}).strict();

export type ClubResultType = z.infer<typeof ClubResultSchema>;
