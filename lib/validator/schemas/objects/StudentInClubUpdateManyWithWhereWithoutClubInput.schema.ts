import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubScalarWhereInputObjectSchema as StudentInClubScalarWhereInputObjectSchema } from './StudentInClubScalarWhereInput.schema';
import { StudentInClubUpdateManyMutationInputObjectSchema as StudentInClubUpdateManyMutationInputObjectSchema } from './StudentInClubUpdateManyMutationInput.schema';
import { StudentInClubUncheckedUpdateManyWithoutClubInputObjectSchema as StudentInClubUncheckedUpdateManyWithoutClubInputObjectSchema } from './StudentInClubUncheckedUpdateManyWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentInClubScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudentInClubUpdateManyMutationInputObjectSchema), z.lazy(() => StudentInClubUncheckedUpdateManyWithoutClubInputObjectSchema)])
}).strict();
export const StudentInClubUpdateManyWithWhereWithoutClubInputObjectSchema: z.ZodType<Prisma.StudentInClubUpdateManyWithWhereWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUpdateManyWithWhereWithoutClubInput>;
export const StudentInClubUpdateManyWithWhereWithoutClubInputObjectZodSchema = makeSchema();
