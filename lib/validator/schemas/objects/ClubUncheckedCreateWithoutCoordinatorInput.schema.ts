import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventUncheckedCreateNestedManyWithoutClubInputObjectSchema as EventUncheckedCreateNestedManyWithoutClubInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutClubInput.schema';
import { RoleInClubUncheckedCreateNestedManyWithoutClubInputObjectSchema as RoleInClubUncheckedCreateNestedManyWithoutClubInputObjectSchema } from './RoleInClubUncheckedCreateNestedManyWithoutClubInput.schema';
import { StudentInClubUncheckedCreateNestedManyWithoutClubInputObjectSchema as StudentInClubUncheckedCreateNestedManyWithoutClubInputObjectSchema } from './StudentInClubUncheckedCreateNestedManyWithoutClubInput.schema';
import { clubAdminUncheckedCreateNestedOneWithoutClubInputObjectSchema as clubAdminUncheckedCreateNestedOneWithoutClubInputObjectSchema } from './clubAdminUncheckedCreateNestedOneWithoutClubInput.schema';
import { StudentUncheckedCreateNestedManyWithoutFollowsClubInputObjectSchema as StudentUncheckedCreateNestedManyWithoutFollowsClubInputObjectSchema } from './StudentUncheckedCreateNestedManyWithoutFollowsClubInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  collegeId: z.string(),
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
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutClubInputObjectSchema).optional(),
  role: z.lazy(() => RoleInClubUncheckedCreateNestedManyWithoutClubInputObjectSchema).optional(),
  students: z.lazy(() => StudentInClubUncheckedCreateNestedManyWithoutClubInputObjectSchema).optional(),
  clubAdmin: z.lazy(() => clubAdminUncheckedCreateNestedOneWithoutClubInputObjectSchema).optional(),
  followers: z.lazy(() => StudentUncheckedCreateNestedManyWithoutFollowsClubInputObjectSchema).optional()
}).strict();
export const ClubUncheckedCreateWithoutCoordinatorInputObjectSchema: z.ZodType<Prisma.ClubUncheckedCreateWithoutCoordinatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUncheckedCreateWithoutCoordinatorInput>;
export const ClubUncheckedCreateWithoutCoordinatorInputObjectZodSchema = makeSchema();
