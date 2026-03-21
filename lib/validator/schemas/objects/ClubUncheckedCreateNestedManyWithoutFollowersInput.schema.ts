import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutFollowersInputObjectSchema as ClubCreateWithoutFollowersInputObjectSchema } from './ClubCreateWithoutFollowersInput.schema';
import { ClubUncheckedCreateWithoutFollowersInputObjectSchema as ClubUncheckedCreateWithoutFollowersInputObjectSchema } from './ClubUncheckedCreateWithoutFollowersInput.schema';
import { ClubCreateOrConnectWithoutFollowersInputObjectSchema as ClubCreateOrConnectWithoutFollowersInputObjectSchema } from './ClubCreateOrConnectWithoutFollowersInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutFollowersInputObjectSchema), z.lazy(() => ClubCreateWithoutFollowersInputObjectSchema).array(), z.lazy(() => ClubUncheckedCreateWithoutFollowersInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutFollowersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClubCreateOrConnectWithoutFollowersInputObjectSchema), z.lazy(() => ClubCreateOrConnectWithoutFollowersInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ClubWhereUniqueInputObjectSchema), z.lazy(() => ClubWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ClubUncheckedCreateNestedManyWithoutFollowersInputObjectSchema: z.ZodType<Prisma.ClubUncheckedCreateNestedManyWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUncheckedCreateNestedManyWithoutFollowersInput>;
export const ClubUncheckedCreateNestedManyWithoutFollowersInputObjectZodSchema = makeSchema();
