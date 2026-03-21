import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { statusSchema } from '../enums/status.schema';
import { RoleInClubCreateNestedOneWithoutMembersInputObjectSchema as RoleInClubCreateNestedOneWithoutMembersInputObjectSchema } from './RoleInClubCreateNestedOneWithoutMembersInput.schema';
import { StudentCreateNestedOneWithoutClubsInputObjectSchema as StudentCreateNestedOneWithoutClubsInputObjectSchema } from './StudentCreateNestedOneWithoutClubsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: statusSchema.optional(),
  role: z.lazy(() => RoleInClubCreateNestedOneWithoutMembersInputObjectSchema),
  student: z.lazy(() => StudentCreateNestedOneWithoutClubsInputObjectSchema)
}).strict();
export const StudentInClubCreateWithoutClubInputObjectSchema: z.ZodType<Prisma.StudentInClubCreateWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateWithoutClubInput>;
export const StudentInClubCreateWithoutClubInputObjectZodSchema = makeSchema();
