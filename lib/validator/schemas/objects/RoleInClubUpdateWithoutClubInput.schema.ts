import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { StudentInClubUpdateManyWithoutRoleNestedInputObjectSchema as StudentInClubUpdateManyWithoutRoleNestedInputObjectSchema } from './StudentInClubUpdateManyWithoutRoleNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  members: z.lazy(() => StudentInClubUpdateManyWithoutRoleNestedInputObjectSchema).optional()
}).strict();
export const RoleInClubUpdateWithoutClubInputObjectSchema: z.ZodType<Prisma.RoleInClubUpdateWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUpdateWithoutClubInput>;
export const RoleInClubUpdateWithoutClubInputObjectZodSchema = makeSchema();
