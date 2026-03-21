import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateWithoutStudentsInputObjectSchema as CollegeCreateWithoutStudentsInputObjectSchema } from './CollegeCreateWithoutStudentsInput.schema';
import { CollegeUncheckedCreateWithoutStudentsInputObjectSchema as CollegeUncheckedCreateWithoutStudentsInputObjectSchema } from './CollegeUncheckedCreateWithoutStudentsInput.schema';
import { CollegeCreateOrConnectWithoutStudentsInputObjectSchema as CollegeCreateOrConnectWithoutStudentsInputObjectSchema } from './CollegeCreateOrConnectWithoutStudentsInput.schema';
import { CollegeUpsertWithoutStudentsInputObjectSchema as CollegeUpsertWithoutStudentsInputObjectSchema } from './CollegeUpsertWithoutStudentsInput.schema';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema';
import { CollegeUpdateToOneWithWhereWithoutStudentsInputObjectSchema as CollegeUpdateToOneWithWhereWithoutStudentsInputObjectSchema } from './CollegeUpdateToOneWithWhereWithoutStudentsInput.schema';
import { CollegeUpdateWithoutStudentsInputObjectSchema as CollegeUpdateWithoutStudentsInputObjectSchema } from './CollegeUpdateWithoutStudentsInput.schema';
import { CollegeUncheckedUpdateWithoutStudentsInputObjectSchema as CollegeUncheckedUpdateWithoutStudentsInputObjectSchema } from './CollegeUncheckedUpdateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollegeCreateWithoutStudentsInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutStudentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CollegeCreateOrConnectWithoutStudentsInputObjectSchema).optional(),
  upsert: z.lazy(() => CollegeUpsertWithoutStudentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CollegeWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CollegeWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CollegeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CollegeUpdateToOneWithWhereWithoutStudentsInputObjectSchema), z.lazy(() => CollegeUpdateWithoutStudentsInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutStudentsInputObjectSchema)]).optional()
}).strict();
export const CollegeUpdateOneWithoutStudentsNestedInputObjectSchema: z.ZodType<Prisma.CollegeUpdateOneWithoutStudentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpdateOneWithoutStudentsNestedInput>;
export const CollegeUpdateOneWithoutStudentsNestedInputObjectZodSchema = makeSchema();
