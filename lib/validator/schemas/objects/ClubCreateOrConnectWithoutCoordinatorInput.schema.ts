import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubCreateWithoutCoordinatorInputObjectSchema as ClubCreateWithoutCoordinatorInputObjectSchema } from './ClubCreateWithoutCoordinatorInput.schema';
import { ClubUncheckedCreateWithoutCoordinatorInputObjectSchema as ClubUncheckedCreateWithoutCoordinatorInputObjectSchema } from './ClubUncheckedCreateWithoutCoordinatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClubCreateWithoutCoordinatorInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutCoordinatorInputObjectSchema)])
}).strict();
export const ClubCreateOrConnectWithoutCoordinatorInputObjectSchema: z.ZodType<Prisma.ClubCreateOrConnectWithoutCoordinatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateOrConnectWithoutCoordinatorInput>;
export const ClubCreateOrConnectWithoutCoordinatorInputObjectZodSchema = makeSchema();
