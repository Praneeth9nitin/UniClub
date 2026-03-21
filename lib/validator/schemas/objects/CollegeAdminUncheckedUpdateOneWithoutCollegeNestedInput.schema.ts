import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeAdminCreateWithoutCollegeInputObjectSchema as CollegeAdminCreateWithoutCollegeInputObjectSchema } from './CollegeAdminCreateWithoutCollegeInput.schema';
import { CollegeAdminUncheckedCreateWithoutCollegeInputObjectSchema as CollegeAdminUncheckedCreateWithoutCollegeInputObjectSchema } from './CollegeAdminUncheckedCreateWithoutCollegeInput.schema';
import { CollegeAdminCreateOrConnectWithoutCollegeInputObjectSchema as CollegeAdminCreateOrConnectWithoutCollegeInputObjectSchema } from './CollegeAdminCreateOrConnectWithoutCollegeInput.schema';
import { CollegeAdminUpsertWithoutCollegeInputObjectSchema as CollegeAdminUpsertWithoutCollegeInputObjectSchema } from './CollegeAdminUpsertWithoutCollegeInput.schema';
import { CollegeAdminWhereInputObjectSchema as CollegeAdminWhereInputObjectSchema } from './CollegeAdminWhereInput.schema';
import { CollegeAdminWhereUniqueInputObjectSchema as CollegeAdminWhereUniqueInputObjectSchema } from './CollegeAdminWhereUniqueInput.schema';
import { CollegeAdminUpdateToOneWithWhereWithoutCollegeInputObjectSchema as CollegeAdminUpdateToOneWithWhereWithoutCollegeInputObjectSchema } from './CollegeAdminUpdateToOneWithWhereWithoutCollegeInput.schema';
import { CollegeAdminUpdateWithoutCollegeInputObjectSchema as CollegeAdminUpdateWithoutCollegeInputObjectSchema } from './CollegeAdminUpdateWithoutCollegeInput.schema';
import { CollegeAdminUncheckedUpdateWithoutCollegeInputObjectSchema as CollegeAdminUncheckedUpdateWithoutCollegeInputObjectSchema } from './CollegeAdminUncheckedUpdateWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollegeAdminCreateWithoutCollegeInputObjectSchema), z.lazy(() => CollegeAdminUncheckedCreateWithoutCollegeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CollegeAdminCreateOrConnectWithoutCollegeInputObjectSchema).optional(),
  upsert: z.lazy(() => CollegeAdminUpsertWithoutCollegeInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CollegeAdminWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CollegeAdminWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CollegeAdminWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CollegeAdminUpdateToOneWithWhereWithoutCollegeInputObjectSchema), z.lazy(() => CollegeAdminUpdateWithoutCollegeInputObjectSchema), z.lazy(() => CollegeAdminUncheckedUpdateWithoutCollegeInputObjectSchema)]).optional()
}).strict();
export const CollegeAdminUncheckedUpdateOneWithoutCollegeNestedInputObjectSchema: z.ZodType<Prisma.CollegeAdminUncheckedUpdateOneWithoutCollegeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminUncheckedUpdateOneWithoutCollegeNestedInput>;
export const CollegeAdminUncheckedUpdateOneWithoutCollegeNestedInputObjectZodSchema = makeSchema();
