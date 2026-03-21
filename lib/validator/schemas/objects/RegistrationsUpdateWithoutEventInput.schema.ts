import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { StudentUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema as StudentUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema } from './StudentUpdateOneRequiredWithoutRegistrationsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  student: z.lazy(() => StudentUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema).optional()
}).strict();
export const RegistrationsUpdateWithoutEventInputObjectSchema: z.ZodType<Prisma.RegistrationsUpdateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsUpdateWithoutEventInput>;
export const RegistrationsUpdateWithoutEventInputObjectZodSchema = makeSchema();
