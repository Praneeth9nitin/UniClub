import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithoutCollegeInputObjectSchema as StudentUpdateWithoutCollegeInputObjectSchema } from './StudentUpdateWithoutCollegeInput.schema';
import { StudentUncheckedUpdateWithoutCollegeInputObjectSchema as StudentUncheckedUpdateWithoutCollegeInputObjectSchema } from './StudentUncheckedUpdateWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudentUpdateWithoutCollegeInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutCollegeInputObjectSchema)])
}).strict();
export const StudentUpdateWithWhereUniqueWithoutCollegeInputObjectSchema: z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutCollegeInput>;
export const StudentUpdateWithWhereUniqueWithoutCollegeInputObjectZodSchema = makeSchema();
