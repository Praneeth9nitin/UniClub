import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubCreateWithoutFollowersInputObjectSchema as ClubCreateWithoutFollowersInputObjectSchema } from './ClubCreateWithoutFollowersInput.schema';
import { ClubUncheckedCreateWithoutFollowersInputObjectSchema as ClubUncheckedCreateWithoutFollowersInputObjectSchema } from './ClubUncheckedCreateWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClubCreateWithoutFollowersInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutFollowersInputObjectSchema)])
}).strict();
export const ClubCreateOrConnectWithoutFollowersInputObjectSchema: z.ZodType<Prisma.ClubCreateOrConnectWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateOrConnectWithoutFollowersInput>;
export const ClubCreateOrConnectWithoutFollowersInputObjectZodSchema = makeSchema();
