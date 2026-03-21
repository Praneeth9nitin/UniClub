import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeAdminWhereInputObjectSchema as CollegeAdminWhereInputObjectSchema } from './CollegeAdminWhereInput.schema';
import { CollegeAdminUpdateWithoutCollegeInputObjectSchema as CollegeAdminUpdateWithoutCollegeInputObjectSchema } from './CollegeAdminUpdateWithoutCollegeInput.schema';
import { CollegeAdminUncheckedUpdateWithoutCollegeInputObjectSchema as CollegeAdminUncheckedUpdateWithoutCollegeInputObjectSchema } from './CollegeAdminUncheckedUpdateWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeAdminWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CollegeAdminUpdateWithoutCollegeInputObjectSchema), z.lazy(() => CollegeAdminUncheckedUpdateWithoutCollegeInputObjectSchema)])
}).strict();
export const CollegeAdminUpdateToOneWithWhereWithoutCollegeInputObjectSchema: z.ZodType<Prisma.CollegeAdminUpdateToOneWithWhereWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminUpdateToOneWithWhereWithoutCollegeInput>;
export const CollegeAdminUpdateToOneWithWhereWithoutCollegeInputObjectZodSchema = makeSchema();
