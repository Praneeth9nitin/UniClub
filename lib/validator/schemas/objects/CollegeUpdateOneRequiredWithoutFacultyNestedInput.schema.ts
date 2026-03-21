import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateWithoutFacultyInputObjectSchema as CollegeCreateWithoutFacultyInputObjectSchema } from './CollegeCreateWithoutFacultyInput.schema';
import { CollegeUncheckedCreateWithoutFacultyInputObjectSchema as CollegeUncheckedCreateWithoutFacultyInputObjectSchema } from './CollegeUncheckedCreateWithoutFacultyInput.schema';
import { CollegeCreateOrConnectWithoutFacultyInputObjectSchema as CollegeCreateOrConnectWithoutFacultyInputObjectSchema } from './CollegeCreateOrConnectWithoutFacultyInput.schema';
import { CollegeUpsertWithoutFacultyInputObjectSchema as CollegeUpsertWithoutFacultyInputObjectSchema } from './CollegeUpsertWithoutFacultyInput.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema';
import { CollegeUpdateToOneWithWhereWithoutFacultyInputObjectSchema as CollegeUpdateToOneWithWhereWithoutFacultyInputObjectSchema } from './CollegeUpdateToOneWithWhereWithoutFacultyInput.schema';
import { CollegeUpdateWithoutFacultyInputObjectSchema as CollegeUpdateWithoutFacultyInputObjectSchema } from './CollegeUpdateWithoutFacultyInput.schema';
import { CollegeUncheckedUpdateWithoutFacultyInputObjectSchema as CollegeUncheckedUpdateWithoutFacultyInputObjectSchema } from './CollegeUncheckedUpdateWithoutFacultyInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollegeCreateWithoutFacultyInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutFacultyInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CollegeCreateOrConnectWithoutFacultyInputObjectSchema).optional(),
  upsert: z.lazy(() => CollegeUpsertWithoutFacultyInputObjectSchema).optional(),
  connect: z.lazy(() => CollegeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CollegeUpdateToOneWithWhereWithoutFacultyInputObjectSchema), z.lazy(() => CollegeUpdateWithoutFacultyInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutFacultyInputObjectSchema)]).optional()
}).strict();
export const CollegeUpdateOneRequiredWithoutFacultyNestedInputObjectSchema: z.ZodType<Prisma.CollegeUpdateOneRequiredWithoutFacultyNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpdateOneRequiredWithoutFacultyNestedInput>;
export const CollegeUpdateOneRequiredWithoutFacultyNestedInputObjectZodSchema = makeSchema();
