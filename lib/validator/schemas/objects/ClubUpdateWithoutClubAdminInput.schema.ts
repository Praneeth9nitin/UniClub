import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { CollegeUpdateOneRequiredWithoutClubsNestedInputObjectSchema as CollegeUpdateOneRequiredWithoutClubsNestedInputObjectSchema } from './CollegeUpdateOneRequiredWithoutClubsNestedInput.schema';
import { FacultyUpdateOneWithoutClubNestedInputObjectSchema as FacultyUpdateOneWithoutClubNestedInputObjectSchema } from './FacultyUpdateOneWithoutClubNestedInput.schema';
import { EventUpdateManyWithoutClubNestedInputObjectSchema as EventUpdateManyWithoutClubNestedInputObjectSchema } from './EventUpdateManyWithoutClubNestedInput.schema';
import { RoleInClubUpdateManyWithoutClubNestedInputObjectSchema as RoleInClubUpdateManyWithoutClubNestedInputObjectSchema } from './RoleInClubUpdateManyWithoutClubNestedInput.schema';
import { StudentInClubUpdateManyWithoutClubNestedInputObjectSchema as StudentInClubUpdateManyWithoutClubNestedInputObjectSchema } from './StudentInClubUpdateManyWithoutClubNestedInput.schema';
import { StudentUpdateManyWithoutFollowsClubNestedInputObjectSchema as StudentUpdateManyWithoutFollowsClubNestedInputObjectSchema } from './StudentUpdateManyWithoutFollowsClubNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  onHold: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  category: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  logoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  instagramUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  twitterUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  linkedinUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  youtubeUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  websiteUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  college: z.lazy(() => CollegeUpdateOneRequiredWithoutClubsNestedInputObjectSchema).optional(),
  coordinator: z.lazy(() => FacultyUpdateOneWithoutClubNestedInputObjectSchema).optional(),
  events: z.lazy(() => EventUpdateManyWithoutClubNestedInputObjectSchema).optional(),
  role: z.lazy(() => RoleInClubUpdateManyWithoutClubNestedInputObjectSchema).optional(),
  students: z.lazy(() => StudentInClubUpdateManyWithoutClubNestedInputObjectSchema).optional(),
  followers: z.lazy(() => StudentUpdateManyWithoutFollowsClubNestedInputObjectSchema).optional()
}).strict();
export const ClubUpdateWithoutClubAdminInputObjectSchema: z.ZodType<Prisma.ClubUpdateWithoutClubAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateWithoutClubAdminInput>;
export const ClubUpdateWithoutClubAdminInputObjectZodSchema = makeSchema();
