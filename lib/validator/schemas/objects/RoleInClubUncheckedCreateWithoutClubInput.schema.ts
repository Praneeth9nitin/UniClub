import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubUncheckedCreateNestedManyWithoutRoleInputObjectSchema as StudentInClubUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './StudentInClubUncheckedCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  members: z.lazy(() => StudentInClubUncheckedCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
export const RoleInClubUncheckedCreateWithoutClubInputObjectSchema: z.ZodType<Prisma.RoleInClubUncheckedCreateWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUncheckedCreateWithoutClubInput>;
export const RoleInClubUncheckedCreateWithoutClubInputObjectZodSchema = makeSchema();
