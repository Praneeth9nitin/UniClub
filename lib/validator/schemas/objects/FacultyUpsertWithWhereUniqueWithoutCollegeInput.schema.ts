import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './FacultyWhereUniqueInput.schema';
import { FacultyUpdateWithoutCollegeInputObjectSchema as FacultyUpdateWithoutCollegeInputObjectSchema } from './FacultyUpdateWithoutCollegeInput.schema';
import { FacultyUncheckedUpdateWithoutCollegeInputObjectSchema as FacultyUncheckedUpdateWithoutCollegeInputObjectSchema } from './FacultyUncheckedUpdateWithoutCollegeInput.schema';
import { FacultyCreateWithoutCollegeInputObjectSchema as FacultyCreateWithoutCollegeInputObjectSchema } from './FacultyCreateWithoutCollegeInput.schema';
import { FacultyUncheckedCreateWithoutCollegeInputObjectSchema as FacultyUncheckedCreateWithoutCollegeInputObjectSchema } from './FacultyUncheckedCreateWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FacultyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FacultyUpdateWithoutCollegeInputObjectSchema), z.lazy(() => FacultyUncheckedUpdateWithoutCollegeInputObjectSchema)]),
  create: z.union([z.lazy(() => FacultyCreateWithoutCollegeInputObjectSchema), z.lazy(() => FacultyUncheckedCreateWithoutCollegeInputObjectSchema)])
}).strict();
export const FacultyUpsertWithWhereUniqueWithoutCollegeInputObjectSchema: z.ZodType<Prisma.FacultyUpsertWithWhereUniqueWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyUpsertWithWhereUniqueWithoutCollegeInput>;
export const FacultyUpsertWithWhereUniqueWithoutCollegeInputObjectZodSchema = makeSchema();
