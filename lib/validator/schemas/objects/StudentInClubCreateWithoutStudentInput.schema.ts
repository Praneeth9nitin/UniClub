import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { statusSchema } from '../enums/status.schema';
import { ClubCreateNestedOneWithoutStudentsInputObjectSchema as ClubCreateNestedOneWithoutStudentsInputObjectSchema } from './ClubCreateNestedOneWithoutStudentsInput.schema';
import { RoleInClubCreateNestedOneWithoutMembersInputObjectSchema as RoleInClubCreateNestedOneWithoutMembersInputObjectSchema } from './RoleInClubCreateNestedOneWithoutMembersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: statusSchema.optional(),
  club: z.lazy(() => ClubCreateNestedOneWithoutStudentsInputObjectSchema),
  role: z.lazy(() => RoleInClubCreateNestedOneWithoutMembersInputObjectSchema)
}).strict();
export const StudentInClubCreateWithoutStudentInputObjectSchema: z.ZodType<Prisma.StudentInClubCreateWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateWithoutStudentInput>;
export const StudentInClubCreateWithoutStudentInputObjectZodSchema = makeSchema();
