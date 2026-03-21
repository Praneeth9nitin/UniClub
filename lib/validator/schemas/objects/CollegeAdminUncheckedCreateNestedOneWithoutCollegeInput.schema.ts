import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeAdminCreateWithoutCollegeInputObjectSchema as CollegeAdminCreateWithoutCollegeInputObjectSchema } from './CollegeAdminCreateWithoutCollegeInput.schema';
import { CollegeAdminUncheckedCreateWithoutCollegeInputObjectSchema as CollegeAdminUncheckedCreateWithoutCollegeInputObjectSchema } from './CollegeAdminUncheckedCreateWithoutCollegeInput.schema';
import { CollegeAdminCreateOrConnectWithoutCollegeInputObjectSchema as CollegeAdminCreateOrConnectWithoutCollegeInputObjectSchema } from './CollegeAdminCreateOrConnectWithoutCollegeInput.schema';
import { CollegeAdminWhereUniqueInputObjectSchema as CollegeAdminWhereUniqueInputObjectSchema } from './CollegeAdminWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollegeAdminCreateWithoutCollegeInputObjectSchema), z.lazy(() => CollegeAdminUncheckedCreateWithoutCollegeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CollegeAdminCreateOrConnectWithoutCollegeInputObjectSchema).optional(),
  connect: z.lazy(() => CollegeAdminWhereUniqueInputObjectSchema).optional()
}).strict();
export const CollegeAdminUncheckedCreateNestedOneWithoutCollegeInputObjectSchema: z.ZodType<Prisma.CollegeAdminUncheckedCreateNestedOneWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminUncheckedCreateNestedOneWithoutCollegeInput>;
export const CollegeAdminUncheckedCreateNestedOneWithoutCollegeInputObjectZodSchema = makeSchema();
