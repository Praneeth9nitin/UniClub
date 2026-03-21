import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubCreateNestedManyWithoutRoleInputObjectSchema as StudentInClubCreateNestedManyWithoutRoleInputObjectSchema } from './StudentInClubCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  members: z.lazy(() => StudentInClubCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
export const RoleInClubCreateWithoutClubInputObjectSchema: z.ZodType<Prisma.RoleInClubCreateWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubCreateWithoutClubInput>;
export const RoleInClubCreateWithoutClubInputObjectZodSchema = makeSchema();
