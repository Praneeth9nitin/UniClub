import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { statusSchema } from '../enums/status.schema';
import { EnumstatusFieldUpdateOperationsInputObjectSchema as EnumstatusFieldUpdateOperationsInputObjectSchema } from './EnumstatusFieldUpdateOperationsInput.schema';
import { RoleInClubUpdateOneRequiredWithoutMembersNestedInputObjectSchema as RoleInClubUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './RoleInClubUpdateOneRequiredWithoutMembersNestedInput.schema';
import { StudentUpdateOneRequiredWithoutClubsNestedInputObjectSchema as StudentUpdateOneRequiredWithoutClubsNestedInputObjectSchema } from './StudentUpdateOneRequiredWithoutClubsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([statusSchema, z.lazy(() => EnumstatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.lazy(() => RoleInClubUpdateOneRequiredWithoutMembersNestedInputObjectSchema).optional(),
  student: z.lazy(() => StudentUpdateOneRequiredWithoutClubsNestedInputObjectSchema).optional()
}).strict();
export const StudentInClubUpdateWithoutClubInputObjectSchema: z.ZodType<Prisma.StudentInClubUpdateWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUpdateWithoutClubInput>;
export const StudentInClubUpdateWithoutClubInputObjectZodSchema = makeSchema();
