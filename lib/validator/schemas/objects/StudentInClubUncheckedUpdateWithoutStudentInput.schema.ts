import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { statusSchema } from '../enums/status.schema';
import { EnumstatusFieldUpdateOperationsInputObjectSchema as EnumstatusFieldUpdateOperationsInputObjectSchema } from './EnumstatusFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  clubId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  roleId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([statusSchema, z.lazy(() => EnumstatusFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const StudentInClubUncheckedUpdateWithoutStudentInputObjectSchema: z.ZodType<Prisma.StudentInClubUncheckedUpdateWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUncheckedUpdateWithoutStudentInput>;
export const StudentInClubUncheckedUpdateWithoutStudentInputObjectZodSchema = makeSchema();
