import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema';
import { CollegeCreateWithoutStudentsInputObjectSchema as CollegeCreateWithoutStudentsInputObjectSchema } from './CollegeCreateWithoutStudentsInput.schema';
import { CollegeUncheckedCreateWithoutStudentsInputObjectSchema as CollegeUncheckedCreateWithoutStudentsInputObjectSchema } from './CollegeUncheckedCreateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CollegeCreateWithoutStudentsInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutStudentsInputObjectSchema)])
}).strict();
export const CollegeCreateOrConnectWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CollegeCreateOrConnectWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeCreateOrConnectWithoutStudentsInput>;
export const CollegeCreateOrConnectWithoutStudentsInputObjectZodSchema = makeSchema();
