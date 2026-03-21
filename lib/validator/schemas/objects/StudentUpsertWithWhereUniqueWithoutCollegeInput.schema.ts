import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithoutCollegeInputObjectSchema as StudentUpdateWithoutCollegeInputObjectSchema } from './StudentUpdateWithoutCollegeInput.schema';
import { StudentUncheckedUpdateWithoutCollegeInputObjectSchema as StudentUncheckedUpdateWithoutCollegeInputObjectSchema } from './StudentUncheckedUpdateWithoutCollegeInput.schema';
import { StudentCreateWithoutCollegeInputObjectSchema as StudentCreateWithoutCollegeInputObjectSchema } from './StudentCreateWithoutCollegeInput.schema';
import { StudentUncheckedCreateWithoutCollegeInputObjectSchema as StudentUncheckedCreateWithoutCollegeInputObjectSchema } from './StudentUncheckedCreateWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudentUpdateWithoutCollegeInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutCollegeInputObjectSchema)]),
  create: z.union([z.lazy(() => StudentCreateWithoutCollegeInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutCollegeInputObjectSchema)])
}).strict();
export const StudentUpsertWithWhereUniqueWithoutCollegeInputObjectSchema: z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutCollegeInput>;
export const StudentUpsertWithWhereUniqueWithoutCollegeInputObjectZodSchema = makeSchema();
