import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeAdminUpdateWithoutCollegeInputObjectSchema as CollegeAdminUpdateWithoutCollegeInputObjectSchema } from './CollegeAdminUpdateWithoutCollegeInput.schema';
import { CollegeAdminUncheckedUpdateWithoutCollegeInputObjectSchema as CollegeAdminUncheckedUpdateWithoutCollegeInputObjectSchema } from './CollegeAdminUncheckedUpdateWithoutCollegeInput.schema';
import { CollegeAdminCreateWithoutCollegeInputObjectSchema as CollegeAdminCreateWithoutCollegeInputObjectSchema } from './CollegeAdminCreateWithoutCollegeInput.schema';
import { CollegeAdminUncheckedCreateWithoutCollegeInputObjectSchema as CollegeAdminUncheckedCreateWithoutCollegeInputObjectSchema } from './CollegeAdminUncheckedCreateWithoutCollegeInput.schema';
import { CollegeAdminWhereInputObjectSchema as CollegeAdminWhereInputObjectSchema } from './CollegeAdminWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CollegeAdminUpdateWithoutCollegeInputObjectSchema), z.lazy(() => CollegeAdminUncheckedUpdateWithoutCollegeInputObjectSchema)]),
  create: z.union([z.lazy(() => CollegeAdminCreateWithoutCollegeInputObjectSchema), z.lazy(() => CollegeAdminUncheckedCreateWithoutCollegeInputObjectSchema)]),
  where: z.lazy(() => CollegeAdminWhereInputObjectSchema).optional()
}).strict();
export const CollegeAdminUpsertWithoutCollegeInputObjectSchema: z.ZodType<Prisma.CollegeAdminUpsertWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminUpsertWithoutCollegeInput>;
export const CollegeAdminUpsertWithoutCollegeInputObjectZodSchema = makeSchema();
