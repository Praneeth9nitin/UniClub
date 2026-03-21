import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema';
import { StudentInClubUpdateWithoutStudentInputObjectSchema as StudentInClubUpdateWithoutStudentInputObjectSchema } from './StudentInClubUpdateWithoutStudentInput.schema';
import { StudentInClubUncheckedUpdateWithoutStudentInputObjectSchema as StudentInClubUncheckedUpdateWithoutStudentInputObjectSchema } from './StudentInClubUncheckedUpdateWithoutStudentInput.schema';
import { StudentInClubCreateWithoutStudentInputObjectSchema as StudentInClubCreateWithoutStudentInputObjectSchema } from './StudentInClubCreateWithoutStudentInput.schema';
import { StudentInClubUncheckedCreateWithoutStudentInputObjectSchema as StudentInClubUncheckedCreateWithoutStudentInputObjectSchema } from './StudentInClubUncheckedCreateWithoutStudentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentInClubWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudentInClubUpdateWithoutStudentInputObjectSchema), z.lazy(() => StudentInClubUncheckedUpdateWithoutStudentInputObjectSchema)]),
  create: z.union([z.lazy(() => StudentInClubCreateWithoutStudentInputObjectSchema), z.lazy(() => StudentInClubUncheckedCreateWithoutStudentInputObjectSchema)])
}).strict();
export const StudentInClubUpsertWithWhereUniqueWithoutStudentInputObjectSchema: z.ZodType<Prisma.StudentInClubUpsertWithWhereUniqueWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUpsertWithWhereUniqueWithoutStudentInput>;
export const StudentInClubUpsertWithWhereUniqueWithoutStudentInputObjectZodSchema = makeSchema();
