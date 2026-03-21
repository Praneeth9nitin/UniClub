import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema';
import { StudentInClubCreateWithoutStudentInputObjectSchema as StudentInClubCreateWithoutStudentInputObjectSchema } from './StudentInClubCreateWithoutStudentInput.schema';
import { StudentInClubUncheckedCreateWithoutStudentInputObjectSchema as StudentInClubUncheckedCreateWithoutStudentInputObjectSchema } from './StudentInClubUncheckedCreateWithoutStudentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentInClubWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudentInClubCreateWithoutStudentInputObjectSchema), z.lazy(() => StudentInClubUncheckedCreateWithoutStudentInputObjectSchema)])
}).strict();
export const StudentInClubCreateOrConnectWithoutStudentInputObjectSchema: z.ZodType<Prisma.StudentInClubCreateOrConnectWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateOrConnectWithoutStudentInput>;
export const StudentInClubCreateOrConnectWithoutStudentInputObjectZodSchema = makeSchema();
