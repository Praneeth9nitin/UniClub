import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { statusSchema } from '../enums/status.schema';
import { ClubCreateNestedOneWithoutStudentsInputObjectSchema as ClubCreateNestedOneWithoutStudentsInputObjectSchema } from './ClubCreateNestedOneWithoutStudentsInput.schema';
import { RoleInClubCreateNestedOneWithoutMembersInputObjectSchema as RoleInClubCreateNestedOneWithoutMembersInputObjectSchema } from './RoleInClubCreateNestedOneWithoutMembersInput.schema';
import { StudentCreateNestedOneWithoutClubsInputObjectSchema as StudentCreateNestedOneWithoutClubsInputObjectSchema } from './StudentCreateNestedOneWithoutClubsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: statusSchema.optional(),
  club: z.lazy(() => ClubCreateNestedOneWithoutStudentsInputObjectSchema),
  role: z.lazy(() => RoleInClubCreateNestedOneWithoutMembersInputObjectSchema),
  student: z.lazy(() => StudentCreateNestedOneWithoutClubsInputObjectSchema)
}).strict();
export const StudentInClubCreateInputObjectSchema: z.ZodType<Prisma.StudentInClubCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateInput>;
export const StudentInClubCreateInputObjectZodSchema = makeSchema();
