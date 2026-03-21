import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { statusSchema } from '../enums/status.schema';
import { EnumstatusFieldUpdateOperationsInputObjectSchema as EnumstatusFieldUpdateOperationsInputObjectSchema } from './EnumstatusFieldUpdateOperationsInput.schema';
import { ClubUpdateOneRequiredWithoutStudentsNestedInputObjectSchema as ClubUpdateOneRequiredWithoutStudentsNestedInputObjectSchema } from './ClubUpdateOneRequiredWithoutStudentsNestedInput.schema';
import { StudentUpdateOneRequiredWithoutClubsNestedInputObjectSchema as StudentUpdateOneRequiredWithoutClubsNestedInputObjectSchema } from './StudentUpdateOneRequiredWithoutClubsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([statusSchema, z.lazy(() => EnumstatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  club: z.lazy(() => ClubUpdateOneRequiredWithoutStudentsNestedInputObjectSchema).optional(),
  student: z.lazy(() => StudentUpdateOneRequiredWithoutClubsNestedInputObjectSchema).optional()
}).strict();
export const StudentInClubUpdateWithoutRoleInputObjectSchema: z.ZodType<Prisma.StudentInClubUpdateWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUpdateWithoutRoleInput>;
export const StudentInClubUpdateWithoutRoleInputObjectZodSchema = makeSchema();
