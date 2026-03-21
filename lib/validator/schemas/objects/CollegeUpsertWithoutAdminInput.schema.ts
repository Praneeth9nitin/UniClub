import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeUpdateWithoutAdminInputObjectSchema as CollegeUpdateWithoutAdminInputObjectSchema } from './CollegeUpdateWithoutAdminInput.schema';
import { CollegeUncheckedUpdateWithoutAdminInputObjectSchema as CollegeUncheckedUpdateWithoutAdminInputObjectSchema } from './CollegeUncheckedUpdateWithoutAdminInput.schema';
import { CollegeCreateWithoutAdminInputObjectSchema as CollegeCreateWithoutAdminInputObjectSchema } from './CollegeCreateWithoutAdminInput.schema';
import { CollegeUncheckedCreateWithoutAdminInputObjectSchema as CollegeUncheckedCreateWithoutAdminInputObjectSchema } from './CollegeUncheckedCreateWithoutAdminInput.schema';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CollegeUpdateWithoutAdminInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutAdminInputObjectSchema)]),
  create: z.union([z.lazy(() => CollegeCreateWithoutAdminInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutAdminInputObjectSchema)]),
  where: z.lazy(() => CollegeWhereInputObjectSchema).optional()
}).strict();
export const CollegeUpsertWithoutAdminInputObjectSchema: z.ZodType<Prisma.CollegeUpsertWithoutAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpsertWithoutAdminInput>;
export const CollegeUpsertWithoutAdminInputObjectZodSchema = makeSchema();
