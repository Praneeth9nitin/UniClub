import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema';
import { CollegeUpdateWithoutStudentsInputObjectSchema as CollegeUpdateWithoutStudentsInputObjectSchema } from './CollegeUpdateWithoutStudentsInput.schema';
import { CollegeUncheckedUpdateWithoutStudentsInputObjectSchema as CollegeUncheckedUpdateWithoutStudentsInputObjectSchema } from './CollegeUncheckedUpdateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CollegeUpdateWithoutStudentsInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutStudentsInputObjectSchema)])
}).strict();
export const CollegeUpdateToOneWithWhereWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CollegeUpdateToOneWithWhereWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpdateToOneWithWhereWithoutStudentsInput>;
export const CollegeUpdateToOneWithWhereWithoutStudentsInputObjectZodSchema = makeSchema();
