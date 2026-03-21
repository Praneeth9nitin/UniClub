import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { RoleInClubUncheckedUpdateManyWithoutClubNestedInputObjectSchema as RoleInClubUncheckedUpdateManyWithoutClubNestedInputObjectSchema } from './RoleInClubUncheckedUpdateManyWithoutClubNestedInput.schema';
import { StudentInClubUncheckedUpdateManyWithoutClubNestedInputObjectSchema as StudentInClubUncheckedUpdateManyWithoutClubNestedInputObjectSchema } from './StudentInClubUncheckedUpdateManyWithoutClubNestedInput.schema';
import { clubAdminUncheckedUpdateOneWithoutClubNestedInputObjectSchema as clubAdminUncheckedUpdateOneWithoutClubNestedInputObjectSchema } from './clubAdminUncheckedUpdateOneWithoutClubNestedInput.schema';
import { StudentUncheckedUpdateManyWithoutFollowsClubNestedInputObjectSchema as StudentUncheckedUpdateManyWithoutFollowsClubNestedInputObjectSchema } from './StudentUncheckedUpdateManyWithoutFollowsClubNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  collegeId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cordinatorId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
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
  role: z.lazy(() => RoleInClubUncheckedUpdateManyWithoutClubNestedInputObjectSchema).optional(),
  students: z.lazy(() => StudentInClubUncheckedUpdateManyWithoutClubNestedInputObjectSchema).optional(),
  clubAdmin: z.lazy(() => clubAdminUncheckedUpdateOneWithoutClubNestedInputObjectSchema).optional(),
  followers: z.lazy(() => StudentUncheckedUpdateManyWithoutFollowsClubNestedInputObjectSchema).optional()
}).strict();
export const ClubUncheckedUpdateWithoutEventsInputObjectSchema: z.ZodType<Prisma.ClubUncheckedUpdateWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUncheckedUpdateWithoutEventsInput>;
export const ClubUncheckedUpdateWithoutEventsInputObjectZodSchema = makeSchema();
