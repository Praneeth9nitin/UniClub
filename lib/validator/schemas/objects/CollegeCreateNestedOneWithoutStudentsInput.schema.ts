import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateWithoutStudentsInputObjectSchema as CollegeCreateWithoutStudentsInputObjectSchema } from './CollegeCreateWithoutStudentsInput.schema';
import { CollegeUncheckedCreateWithoutStudentsInputObjectSchema as CollegeUncheckedCreateWithoutStudentsInputObjectSchema } from './CollegeUncheckedCreateWithoutStudentsInput.schema';
import { CollegeCreateOrConnectWithoutStudentsInputObjectSchema as CollegeCreateOrConnectWithoutStudentsInputObjectSchema } from './CollegeCreateOrConnectWithoutStudentsInput.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollegeCreateWithoutStudentsInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutStudentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CollegeCreateOrConnectWithoutStudentsInputObjectSchema).optional(),
  connect: z.lazy(() => CollegeWhereUniqueInputObjectSchema).optional()
}).strict();
export const CollegeCreateNestedOneWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CollegeCreateNestedOneWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeCreateNestedOneWithoutStudentsInput>;
export const CollegeCreateNestedOneWithoutStudentsInputObjectZodSchema = makeSchema();
