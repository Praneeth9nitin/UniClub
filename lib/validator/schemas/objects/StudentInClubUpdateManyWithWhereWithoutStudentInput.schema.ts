import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubScalarWhereInputObjectSchema as StudentInClubScalarWhereInputObjectSchema } from './StudentInClubScalarWhereInput.schema';
import { StudentInClubUpdateManyMutationInputObjectSchema as StudentInClubUpdateManyMutationInputObjectSchema } from './StudentInClubUpdateManyMutationInput.schema';
import { StudentInClubUncheckedUpdateManyWithoutStudentInputObjectSchema as StudentInClubUncheckedUpdateManyWithoutStudentInputObjectSchema } from './StudentInClubUncheckedUpdateManyWithoutStudentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentInClubScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudentInClubUpdateManyMutationInputObjectSchema), z.lazy(() => StudentInClubUncheckedUpdateManyWithoutStudentInputObjectSchema)])
}).strict();
export const StudentInClubUpdateManyWithWhereWithoutStudentInputObjectSchema: z.ZodType<Prisma.StudentInClubUpdateManyWithWhereWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUpdateManyWithWhereWithoutStudentInput>;
export const StudentInClubUpdateManyWithWhereWithoutStudentInputObjectZodSchema = makeSchema();
