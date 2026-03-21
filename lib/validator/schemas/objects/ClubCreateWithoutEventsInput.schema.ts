import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateNestedOneWithoutClubsInputObjectSchema as CollegeCreateNestedOneWithoutClubsInputObjectSchema } from './CollegeCreateNestedOneWithoutClubsInput.schema';
import { FacultyCreateNestedOneWithoutClubInputObjectSchema as FacultyCreateNestedOneWithoutClubInputObjectSchema } from './FacultyCreateNestedOneWithoutClubInput.schema';
import { RoleInClubCreateNestedManyWithoutClubInputObjectSchema as RoleInClubCreateNestedManyWithoutClubInputObjectSchema } from './RoleInClubCreateNestedManyWithoutClubInput.schema';
import { StudentInClubCreateNestedManyWithoutClubInputObjectSchema as StudentInClubCreateNestedManyWithoutClubInputObjectSchema } from './StudentInClubCreateNestedManyWithoutClubInput.schema';
import { clubAdminCreateNestedOneWithoutClubInputObjectSchema as clubAdminCreateNestedOneWithoutClubInputObjectSchema } from './clubAdminCreateNestedOneWithoutClubInput.schema';
import { StudentCreateNestedManyWithoutFollowsClubInputObjectSchema as StudentCreateNestedManyWithoutFollowsClubInputObjectSchema } from './StudentCreateNestedManyWithoutFollowsClubInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  onHold: z.boolean().optional(),
  category: z.string(),
  logoUrl: z.string().optional().nullable(),
  instagramUrl: z.string().optional().nullable(),
  twitterUrl: z.string().optional().nullable(),
  linkedinUrl: z.string().optional().nullable(),
  youtubeUrl: z.string().optional().nullable(),
  websiteUrl: z.string().optional().nullable(),
  college: z.lazy(() => CollegeCreateNestedOneWithoutClubsInputObjectSchema),
  coordinator: z.lazy(() => FacultyCreateNestedOneWithoutClubInputObjectSchema).optional(),
  role: z.lazy(() => RoleInClubCreateNestedManyWithoutClubInputObjectSchema).optional(),
  students: z.lazy(() => StudentInClubCreateNestedManyWithoutClubInputObjectSchema).optional(),
  clubAdmin: z.lazy(() => clubAdminCreateNestedOneWithoutClubInputObjectSchema).optional(),
  followers: z.lazy(() => StudentCreateNestedManyWithoutFollowsClubInputObjectSchema).optional()
}).strict();
export const ClubCreateWithoutEventsInputObjectSchema: z.ZodType<Prisma.ClubCreateWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateWithoutEventsInput>;
export const ClubCreateWithoutEventsInputObjectZodSchema = makeSchema();
