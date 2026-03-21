import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema';
import { CollegeCreateWithoutAdminInputObjectSchema as CollegeCreateWithoutAdminInputObjectSchema } from './CollegeCreateWithoutAdminInput.schema';
import { CollegeUncheckedCreateWithoutAdminInputObjectSchema as CollegeUncheckedCreateWithoutAdminInputObjectSchema } from './CollegeUncheckedCreateWithoutAdminInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CollegeCreateWithoutAdminInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutAdminInputObjectSchema)])
}).strict();
export const CollegeCreateOrConnectWithoutAdminInputObjectSchema: z.ZodType<Prisma.CollegeCreateOrConnectWithoutAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeCreateOrConnectWithoutAdminInput>;
export const CollegeCreateOrConnectWithoutAdminInputObjectZodSchema = makeSchema();
