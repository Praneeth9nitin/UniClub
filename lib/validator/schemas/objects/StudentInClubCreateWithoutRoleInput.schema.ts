import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { statusSchema } from '../enums/status.schema';
import { ClubCreateNestedOneWithoutStudentsInputObjectSchema as ClubCreateNestedOneWithoutStudentsInputObjectSchema } from './ClubCreateNestedOneWithoutStudentsInput.schema';
import { StudentCreateNestedOneWithoutClubsInputObjectSchema as StudentCreateNestedOneWithoutClubsInputObjectSchema } from './StudentCreateNestedOneWithoutClubsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: statusSchema.optional(),
  club: z.lazy(() => ClubCreateNestedOneWithoutStudentsInputObjectSchema),
  student: z.lazy(() => StudentCreateNestedOneWithoutClubsInputObjectSchema)
}).strict();
export const StudentInClubCreateWithoutRoleInputObjectSchema: z.ZodType<Prisma.StudentInClubCreateWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateWithoutRoleInput>;
export const StudentInClubCreateWithoutRoleInputObjectZodSchema = makeSchema();
