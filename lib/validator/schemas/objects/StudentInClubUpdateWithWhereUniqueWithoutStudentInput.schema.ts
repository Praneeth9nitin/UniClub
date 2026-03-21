import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema';
import { StudentInClubUpdateWithoutStudentInputObjectSchema as StudentInClubUpdateWithoutStudentInputObjectSchema } from './StudentInClubUpdateWithoutStudentInput.schema';
import { StudentInClubUncheckedUpdateWithoutStudentInputObjectSchema as StudentInClubUncheckedUpdateWithoutStudentInputObjectSchema } from './StudentInClubUncheckedUpdateWithoutStudentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentInClubWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudentInClubUpdateWithoutStudentInputObjectSchema), z.lazy(() => StudentInClubUncheckedUpdateWithoutStudentInputObjectSchema)])
}).strict();
export const StudentInClubUpdateWithWhereUniqueWithoutStudentInputObjectSchema: z.ZodType<Prisma.StudentInClubUpdateWithWhereUniqueWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUpdateWithWhereUniqueWithoutStudentInput>;
export const StudentInClubUpdateWithWhereUniqueWithoutStudentInputObjectZodSchema = makeSchema();
