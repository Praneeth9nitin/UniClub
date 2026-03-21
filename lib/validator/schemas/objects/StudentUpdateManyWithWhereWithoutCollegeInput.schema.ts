import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentScalarWhereInputObjectSchema as StudentScalarWhereInputObjectSchema } from './StudentScalarWhereInput.schema';
import { StudentUpdateManyMutationInputObjectSchema as StudentUpdateManyMutationInputObjectSchema } from './StudentUpdateManyMutationInput.schema';
import { StudentUncheckedUpdateManyWithoutCollegeInputObjectSchema as StudentUncheckedUpdateManyWithoutCollegeInputObjectSchema } from './StudentUncheckedUpdateManyWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudentUpdateManyMutationInputObjectSchema), z.lazy(() => StudentUncheckedUpdateManyWithoutCollegeInputObjectSchema)])
}).strict();
export const StudentUpdateManyWithWhereWithoutCollegeInputObjectSchema: z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutCollegeInput>;
export const StudentUpdateManyWithWhereWithoutCollegeInputObjectZodSchema = makeSchema();
