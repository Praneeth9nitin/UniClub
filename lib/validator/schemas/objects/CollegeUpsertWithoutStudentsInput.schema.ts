import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeUpdateWithoutStudentsInputObjectSchema as CollegeUpdateWithoutStudentsInputObjectSchema } from './CollegeUpdateWithoutStudentsInput.schema';
import { CollegeUncheckedUpdateWithoutStudentsInputObjectSchema as CollegeUncheckedUpdateWithoutStudentsInputObjectSchema } from './CollegeUncheckedUpdateWithoutStudentsInput.schema';
import { CollegeCreateWithoutStudentsInputObjectSchema as CollegeCreateWithoutStudentsInputObjectSchema } from './CollegeCreateWithoutStudentsInput.schema';
import { CollegeUncheckedCreateWithoutStudentsInputObjectSchema as CollegeUncheckedCreateWithoutStudentsInputObjectSchema } from './CollegeUncheckedCreateWithoutStudentsInput.schema';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CollegeUpdateWithoutStudentsInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutStudentsInputObjectSchema)]),
  create: z.union([z.lazy(() => CollegeCreateWithoutStudentsInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutStudentsInputObjectSchema)]),
  where: z.lazy(() => CollegeWhereInputObjectSchema).optional()
}).strict();
export const CollegeUpsertWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CollegeUpsertWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpsertWithoutStudentsInput>;
export const CollegeUpsertWithoutStudentsInputObjectZodSchema = makeSchema();
