import * as z from 'zod';

export const ClubScalarFieldEnumSchema = z.enum(['id', 'name', 'collegeId', 'description', 'cordinatorId', 'createdAt', 'updatedAt', 'deletedAt', 'onHold', 'category', 'logoUrl', 'instagramUrl', 'twitterUrl', 'linkedinUrl', 'youtubeUrl', 'websiteUrl'])

export type ClubScalarFieldEnum = z.infer<typeof ClubScalarFieldEnumSchema>;