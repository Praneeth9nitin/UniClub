import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema';
import { CollegeCreateWithoutClubsInputObjectSchema as CollegeCreateWithoutClubsInputObjectSchema } from './CollegeCreateWithoutClubsInput.schema';
import { CollegeUncheckedCreateWithoutClubsInputObjectSchema as CollegeUncheckedCreateWithoutClubsInputObjectSchema } from './CollegeUncheckedCreateWithoutClubsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CollegeCreateWithoutClubsInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutClubsInputObjectSchema)])
}).strict();
export const CollegeCreateOrConnectWithoutClubsInputObjectSchema: z.ZodType<Prisma.CollegeCreateOrConnectWithoutClubsInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeCreateOrConnectWithoutClubsInput>;
export const CollegeCreateOrConnectWithoutClubsInputObjectZodSchema = makeSchema();
