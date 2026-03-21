import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeUpdateWithoutFacultyInputObjectSchema as CollegeUpdateWithoutFacultyInputObjectSchema } from './CollegeUpdateWithoutFacultyInput.schema';
import { CollegeUncheckedUpdateWithoutFacultyInputObjectSchema as CollegeUncheckedUpdateWithoutFacultyInputObjectSchema } from './CollegeUncheckedUpdateWithoutFacultyInput.schema';
import { CollegeCreateWithoutFacultyInputObjectSchema as CollegeCreateWithoutFacultyInputObjectSchema } from './CollegeCreateWithoutFacultyInput.schema';
import { CollegeUncheckedCreateWithoutFacultyInputObjectSchema as CollegeUncheckedCreateWithoutFacultyInputObjectSchema } from './CollegeUncheckedCreateWithoutFacultyInput.schema';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CollegeUpdateWithoutFacultyInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutFacultyInputObjectSchema)]),
  create: z.union([z.lazy(() => CollegeCreateWithoutFacultyInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutFacultyInputObjectSchema)]),
  where: z.lazy(() => CollegeWhereInputObjectSchema).optional()
}).strict();
export const CollegeUpsertWithoutFacultyInputObjectSchema: z.ZodType<Prisma.CollegeUpsertWithoutFacultyInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpsertWithoutFacultyInput>;
export const CollegeUpsertWithoutFacultyInputObjectZodSchema = makeSchema();
