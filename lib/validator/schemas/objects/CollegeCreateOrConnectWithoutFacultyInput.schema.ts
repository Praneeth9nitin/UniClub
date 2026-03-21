import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema';
import { CollegeCreateWithoutFacultyInputObjectSchema as CollegeCreateWithoutFacultyInputObjectSchema } from './CollegeCreateWithoutFacultyInput.schema';
import { CollegeUncheckedCreateWithoutFacultyInputObjectSchema as CollegeUncheckedCreateWithoutFacultyInputObjectSchema } from './CollegeUncheckedCreateWithoutFacultyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CollegeCreateWithoutFacultyInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutFacultyInputObjectSchema)])
}).strict();
export const CollegeCreateOrConnectWithoutFacultyInputObjectSchema: z.ZodType<Prisma.CollegeCreateOrConnectWithoutFacultyInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeCreateOrConnectWithoutFacultyInput>;
export const CollegeCreateOrConnectWithoutFacultyInputObjectZodSchema = makeSchema();
