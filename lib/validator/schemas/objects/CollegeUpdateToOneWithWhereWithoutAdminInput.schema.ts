import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema';
import { CollegeUpdateWithoutAdminInputObjectSchema as CollegeUpdateWithoutAdminInputObjectSchema } from './CollegeUpdateWithoutAdminInput.schema';
import { CollegeUncheckedUpdateWithoutAdminInputObjectSchema as CollegeUncheckedUpdateWithoutAdminInputObjectSchema } from './CollegeUncheckedUpdateWithoutAdminInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CollegeUpdateWithoutAdminInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutAdminInputObjectSchema)])
}).strict();
export const CollegeUpdateToOneWithWhereWithoutAdminInputObjectSchema: z.ZodType<Prisma.CollegeUpdateToOneWithWhereWithoutAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpdateToOneWithWhereWithoutAdminInput>;
export const CollegeUpdateToOneWithWhereWithoutAdminInputObjectZodSchema = makeSchema();
