import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeAdminWhereUniqueInputObjectSchema as CollegeAdminWhereUniqueInputObjectSchema } from './CollegeAdminWhereUniqueInput.schema';
import { CollegeAdminCreateWithoutCollegeInputObjectSchema as CollegeAdminCreateWithoutCollegeInputObjectSchema } from './CollegeAdminCreateWithoutCollegeInput.schema';
import { CollegeAdminUncheckedCreateWithoutCollegeInputObjectSchema as CollegeAdminUncheckedCreateWithoutCollegeInputObjectSchema } from './CollegeAdminUncheckedCreateWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeAdminWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CollegeAdminCreateWithoutCollegeInputObjectSchema), z.lazy(() => CollegeAdminUncheckedCreateWithoutCollegeInputObjectSchema)])
}).strict();
export const CollegeAdminCreateOrConnectWithoutCollegeInputObjectSchema: z.ZodType<Prisma.CollegeAdminCreateOrConnectWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminCreateOrConnectWithoutCollegeInput>;
export const CollegeAdminCreateOrConnectWithoutCollegeInputObjectZodSchema = makeSchema();
