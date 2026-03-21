import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './FacultyWhereUniqueInput.schema';
import { FacultyUpdateWithoutCollegeInputObjectSchema as FacultyUpdateWithoutCollegeInputObjectSchema } from './FacultyUpdateWithoutCollegeInput.schema';
import { FacultyUncheckedUpdateWithoutCollegeInputObjectSchema as FacultyUncheckedUpdateWithoutCollegeInputObjectSchema } from './FacultyUncheckedUpdateWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FacultyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FacultyUpdateWithoutCollegeInputObjectSchema), z.lazy(() => FacultyUncheckedUpdateWithoutCollegeInputObjectSchema)])
}).strict();
export const FacultyUpdateWithWhereUniqueWithoutCollegeInputObjectSchema: z.ZodType<Prisma.FacultyUpdateWithWhereUniqueWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyUpdateWithWhereUniqueWithoutCollegeInput>;
export const FacultyUpdateWithWhereUniqueWithoutCollegeInputObjectZodSchema = makeSchema();
