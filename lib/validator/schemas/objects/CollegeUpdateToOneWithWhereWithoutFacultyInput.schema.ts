import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema';
import { CollegeUpdateWithoutFacultyInputObjectSchema as CollegeUpdateWithoutFacultyInputObjectSchema } from './CollegeUpdateWithoutFacultyInput.schema';
import { CollegeUncheckedUpdateWithoutFacultyInputObjectSchema as CollegeUncheckedUpdateWithoutFacultyInputObjectSchema } from './CollegeUncheckedUpdateWithoutFacultyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CollegeUpdateWithoutFacultyInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutFacultyInputObjectSchema)])
}).strict();
export const CollegeUpdateToOneWithWhereWithoutFacultyInputObjectSchema: z.ZodType<Prisma.CollegeUpdateToOneWithWhereWithoutFacultyInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpdateToOneWithWhereWithoutFacultyInput>;
export const CollegeUpdateToOneWithWhereWithoutFacultyInputObjectZodSchema = makeSchema();
