import * as z from 'zod';
// prettier-ignore
export const ClubInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    collegeId: z.string(),
    description: z.string().optional().nullable(),
    cordinatorId: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    onHold: z.boolean(),
    category: z.string(),
    college: z.unknown(),
    coordinator: z.unknown().optional().nullable(),
    events: z.array(z.unknown()),
    role: z.array(z.unknown()),
    students: z.array(z.unknown()),
    clubAdmin: z.unknown().optional().nullable(),
    logoUrl: z.string().optional().nullable(),
    instagramUrl: z.string().optional().nullable(),
    twitterUrl: z.string().optional().nullable(),
    linkedinUrl: z.string().optional().nullable(),
    youtubeUrl: z.string().optional().nullable(),
    websiteUrl: z.string().optional().nullable(),
    followers: z.array(z.unknown())
}).strict();

export type ClubInputType = z.infer<typeof ClubInputSchema>;
