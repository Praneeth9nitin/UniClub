import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { statusSchema } from '../enums/status.schema';
import { EnumstatusFieldUpdateOperationsInputObjectSchema as EnumstatusFieldUpdateOperationsInputObjectSchema } from './EnumstatusFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  clubId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  studentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([statusSchema, z.lazy(() => EnumstatusFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const StudentInClubUncheckedUpdateManyWithoutRoleInputObjectSchema: z.ZodType<Prisma.StudentInClubUncheckedUpdateManyWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUncheckedUpdateManyWithoutRoleInput>;
export const StudentInClubUncheckedUpdateManyWithoutRoleInputObjectZodSchema = makeSchema();
