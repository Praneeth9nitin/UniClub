import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ClubUpdateOneRequiredWithoutRoleNestedInputObjectSchema as ClubUpdateOneRequiredWithoutRoleNestedInputObjectSchema } from './ClubUpdateOneRequiredWithoutRoleNestedInput.schema';
import { StudentInClubUpdateManyWithoutRoleNestedInputObjectSchema as StudentInClubUpdateManyWithoutRoleNestedInputObjectSchema } from './StudentInClubUpdateManyWithoutRoleNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  club: z.lazy(() => ClubUpdateOneRequiredWithoutRoleNestedInputObjectSchema).optional(),
  members: z.lazy(() => StudentInClubUpdateManyWithoutRoleNestedInputObjectSchema).optional()
}).strict();
export const RoleInClubUpdateInputObjectSchema: z.ZodType<Prisma.RoleInClubUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUpdateInput>;
export const RoleInClubUpdateInputObjectZodSchema = makeSchema();
