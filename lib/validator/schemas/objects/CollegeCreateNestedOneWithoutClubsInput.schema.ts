import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateWithoutClubsInputObjectSchema as CollegeCreateWithoutClubsInputObjectSchema } from './CollegeCreateWithoutClubsInput.schema';
import { CollegeUncheckedCreateWithoutClubsInputObjectSchema as CollegeUncheckedCreateWithoutClubsInputObjectSchema } from './CollegeUncheckedCreateWithoutClubsInput.schema';
import { CollegeCreateOrConnectWithoutClubsInputObjectSchema as CollegeCreateOrConnectWithoutClubsInputObjectSchema } from './CollegeCreateOrConnectWithoutClubsInput.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './CollegeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollegeCreateWithoutClubsInputObjectSchema), z.lazy(() => CollegeUncheckedCreateWithoutClubsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CollegeCreateOrConnectWithoutClubsInputObjectSchema).optional(),
  connect: z.lazy(() => CollegeWhereUniqueInputObjectSchema).optional()
}).strict();
export const CollegeCreateNestedOneWithoutClubsInputObjectSchema: z.ZodType<Prisma.CollegeCreateNestedOneWithoutClubsInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeCreateNestedOneWithoutClubsInput>;
export const CollegeCreateNestedOneWithoutClubsInputObjectZodSchema = makeSchema();
