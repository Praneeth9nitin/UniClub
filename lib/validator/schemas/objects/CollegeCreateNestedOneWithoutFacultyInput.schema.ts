import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateWithoutFacultyInputObjectSchema as CollegeCreateWithoutFacultyInputObjectSchema } from './CollegeCreateWithoutFacultyInput.schema';
import { CollegeUncheckedCreateWithoutFacultyInputObjectSchema as CollegeUncheckedCreateWithoutFacultyInputObjectSchema } from './CollegeUncheckedCreateWithoutFacultyInput.schema';
import { CollegeCreateOrConnectWithoutFacultyInputObjectSchema as CollegeCreateOrConnectWithoutFacultyInputObjectSchema } from './CollegeCreateOrConnectWithoutFacultyInput.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollegeCreateWithoutFacultyInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutFacultyInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CollegeCreateOrConnectWithoutFacultyInputObjectSchema).optional(),
  connect: z.lazy(() => CollegeWhereUniqueInputObjectSchema).optional()
}).strict();
export const CollegeCreateNestedOneWithoutFacultyInputObjectSchema: z.ZodType<Prisma.CollegeCreateNestedOneWithoutFacultyInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeCreateNestedOneWithoutFacultyInput>;
export const CollegeCreateNestedOneWithoutFacultyInputObjectZodSchema = makeSchema();
