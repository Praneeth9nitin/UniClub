import * as z from 'zod';
export const ClubFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  collegeId: z.string(),
  description: z.string().optional(),
  cordinatorId: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  onHold: z.boolean(),
  category: z.string(),
  college: z.unknown(),
  coordinator: z.unknown().optional(),
  events: z.array(z.unknown()),
  role: z.array(z.unknown()),
  students: z.array(z.unknown()),
  clubAdmin: z.unknown().optional(),
  logoUrl: z.string().optional(),
  instagramUrl: z.string().optional(),
  twitterUrl: z.string().optional(),
  linkedinUrl: z.string().optional(),
  youtubeUrl: z.string().optional(),
  websiteUrl: z.string().optional(),
  followers: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});