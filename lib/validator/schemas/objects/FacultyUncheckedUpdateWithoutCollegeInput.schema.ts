import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ClubUncheckedUpdateManyWithoutCoordinatorNestedInputObjectSchema as ClubUncheckedUpdateManyWithoutCoordinatorNestedInputObjectSchema } from './ClubUncheckedUpdateManyWithoutCoordinatorNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  club: z.lazy(() => ClubUncheckedUpdateManyWithoutCoordinatorNestedInputObjectSchema).optional()
}).strict();
export const FacultyUncheckedUpdateWithoutCollegeInputObjectSchema: z.ZodType<Prisma.FacultyUncheckedUpdateWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyUncheckedUpdateWithoutCollegeInput>;
export const FacultyUncheckedUpdateWithoutCollegeInputObjectZodSchema = makeSchema();
