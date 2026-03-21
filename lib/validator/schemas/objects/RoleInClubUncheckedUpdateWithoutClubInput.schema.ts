import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { StudentInClubUncheckedUpdateManyWithoutRoleNestedInputObjectSchema as StudentInClubUncheckedUpdateManyWithoutRoleNestedInputObjectSchema } from './StudentInClubUncheckedUpdateManyWithoutRoleNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  members: z.lazy(() => StudentInClubUncheckedUpdateManyWithoutRoleNestedInputObjectSchema).optional()
}).strict();
export const RoleInClubUncheckedUpdateWithoutClubInputObjectSchema: z.ZodType<Prisma.RoleInClubUncheckedUpdateWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUncheckedUpdateWithoutClubInput>;
export const RoleInClubUncheckedUpdateWithoutClubInputObjectZodSchema = makeSchema();
