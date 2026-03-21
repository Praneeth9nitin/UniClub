import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { StudentInClubUncheckedUpdateManyWithoutRoleNestedInputObjectSchema as StudentInClubUncheckedUpdateManyWithoutRoleNestedInputObjectSchema } from './StudentInClubUncheckedUpdateManyWithoutRoleNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  clubId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  members: z.lazy(() => StudentInClubUncheckedUpdateManyWithoutRoleNestedInputObjectSchema).optional()
}).strict();
export const RoleInClubUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.RoleInClubUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUncheckedUpdateInput>;
export const RoleInClubUncheckedUpdateInputObjectZodSchema = makeSchema();
