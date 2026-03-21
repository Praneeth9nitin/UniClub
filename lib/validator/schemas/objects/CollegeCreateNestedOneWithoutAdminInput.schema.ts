import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateWithoutAdminInputObjectSchema as CollegeCreateWithoutAdminInputObjectSchema } from './CollegeCreateWithoutAdminInput.schema';
import { CollegeUncheckedCreateWithoutAdminInputObjectSchema as CollegeUncheckedCreateWithoutAdminInputObjectSchema } from './CollegeUncheckedCreateWithoutAdminInput.schema';
import { CollegeCreateOrConnectWithoutAdminInputObjectSchema as CollegeCreateOrConnectWithoutAdminInputObjectSchema } from './CollegeCreateOrConnectWithoutAdminInput.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollegeCreateWithoutAdminInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutAdminInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CollegeCreateOrConnectWithoutAdminInputObjectSchema).optional(),
  connect: z.lazy(() => CollegeWhereUniqueInputObjectSchema).optional()
}).strict();
export const CollegeCreateNestedOneWithoutAdminInputObjectSchema: z.ZodType<Prisma.CollegeCreateNestedOneWithoutAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeCreateNestedOneWithoutAdminInput>;
export const CollegeCreateNestedOneWithoutAdminInputObjectZodSchema = makeSchema();
