import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateWithoutAdminInputObjectSchema as CollegeCreateWithoutAdminInputObjectSchema } from './CollegeCreateWithoutAdminInput.schema';
import { CollegeUncheckedCreateWithoutAdminInputObjectSchema as CollegeUncheckedCreateWithoutAdminInputObjectSchema } from './CollegeUncheckedCreateWithoutAdminInput.schema';
import { CollegeCreateOrConnectWithoutAdminInputObjectSchema as CollegeCreateOrConnectWithoutAdminInputObjectSchema } from './CollegeCreateOrConnectWithoutAdminInput.schema';
import { CollegeUpsertWithoutAdminInputObjectSchema as CollegeUpsertWithoutAdminInputObjectSchema } from './CollegeUpsertWithoutAdminInput.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema';
import { CollegeUpdateToOneWithWhereWithoutAdminInputObjectSchema as CollegeUpdateToOneWithWhereWithoutAdminInputObjectSchema } from './CollegeUpdateToOneWithWhereWithoutAdminInput.schema';
import { CollegeUpdateWithoutAdminInputObjectSchema as CollegeUpdateWithoutAdminInputObjectSchema } from './CollegeUpdateWithoutAdminInput.schema';
import { CollegeUncheckedUpdateWithoutAdminInputObjectSchema as CollegeUncheckedUpdateWithoutAdminInputObjectSchema } from './CollegeUncheckedUpdateWithoutAdminInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollegeCreateWithoutAdminInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutAdminInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CollegeCreateOrConnectWithoutAdminInputObjectSchema).optional(),
  upsert: z.lazy(() => CollegeUpsertWithoutAdminInputObjectSchema).optional(),
  connect: z.lazy(() => CollegeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CollegeUpdateToOneWithWhereWithoutAdminInputObjectSchema), z.lazy(() => CollegeUpdateWithoutAdminInputObjectSchema), z.lazy(() => CollegeUncheckedUpdateWithoutAdminInputObjectSchema)]).optional()
}).strict();
export const CollegeUpdateOneRequiredWithoutAdminNestedInputObjectSchema: z.ZodType<Prisma.CollegeUpdateOneRequiredWithoutAdminNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUpdateOneRequiredWithoutAdminNestedInput>;
export const CollegeUpdateOneRequiredWithoutAdminNestedInputObjectZodSchema = makeSchema();
