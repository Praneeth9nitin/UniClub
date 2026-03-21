import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { statusSchema } from '../enums/status.schema';
import { EnumstatusFieldUpdateOperationsInputObjectSchema as EnumstatusFieldUpdateOperationsInputObjectSchema } from './EnumstatusFieldUpdateOperationsInput.schema';
import { ClubUpdateOneRequiredWithoutStudentsNestedInputObjectSchema as ClubUpdateOneRequiredWithoutStudentsNestedInputObjectSchema } from './ClubUpdateOneRequiredWithoutStudentsNestedInput.schema';
import { RoleInClubUpdateOneRequiredWithoutMembersNestedInputObjectSchema as RoleInClubUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './RoleInClubUpdateOneRequiredWithoutMembersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([statusSchema, z.lazy(() => EnumstatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  club: z.lazy(() => ClubUpdateOneRequiredWithoutStudentsNestedInputObjectSchema).optional(),
  role: z.lazy(() => RoleInClubUpdateOneRequiredWithoutMembersNestedInputObjectSchema).optional()
}).strict();
export const StudentInClubUpdateWithoutStudentInputObjectSchema: z.ZodType<Prisma.StudentInClubUpdateWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUpdateWithoutStudentInput>;
export const StudentInClubUpdateWithoutStudentInputObjectZodSchema = makeSchema();
