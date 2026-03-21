import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CollegeOrderByWithRelationInputObjectSchema as CollegeOrderByWithRelationInputObjectSchema } from './CollegeOrderByWithRelationInput.schema';
import { FacultyOrderByWithRelationInputObjectSchema as FacultyOrderByWithRelationInputObjectSchema } from './FacultyOrderByWithRelationInput.schema';
import { EventOrderByRelationAggregateInputObjectSchema as EventOrderByRelationAggregateInputObjectSchema } from './EventOrderByRelationAggregateInput.schema';
import { RoleInClubOrderByRelationAggregateInputObjectSchema as RoleInClubOrderByRelationAggregateInputObjectSchema } from './RoleInClubOrderByRelationAggregateInput.schema';
import { StudentInClubOrderByRelationAggregateInputObjectSchema as StudentInClubOrderByRelationAggregateInputObjectSchema } from './StudentInClubOrderByRelationAggregateInput.schema';
import { clubAdminOrderByWithRelationInputObjectSchema as clubAdminOrderByWithRelationInputObjectSchema } from './clubAdminOrderByWithRelationInput.schema';
import { StudentOrderByRelationAggregateInputObjectSchema as StudentOrderByRelationAggregateInputObjectSchema } from './StudentOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  collegeId: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cordinatorId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  onHold: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  logoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  instagramUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  twitterUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  linkedinUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  youtubeUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  websiteUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  college: z.lazy(() => CollegeOrderByWithRelationInputObjectSchema).optional(),
  coordinator: z.lazy(() => FacultyOrderByWithRelationInputObjectSchema).optional(),
  events: z.lazy(() => EventOrderByRelationAggregateInputObjectSchema).optional(),
  role: z.lazy(() => RoleInClubOrderByRelationAggregateInputObjectSchema).optional(),
  students: z.lazy(() => StudentInClubOrderByRelationAggregateInputObjectSchema).optional(),
  clubAdmin: z.lazy(() => clubAdminOrderByWithRelationInputObjectSchema).optional(),
  followers: z.lazy(() => StudentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ClubOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ClubOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubOrderByWithRelationInput>;
export const ClubOrderByWithRelationInputObjectZodSchema = makeSchema();
