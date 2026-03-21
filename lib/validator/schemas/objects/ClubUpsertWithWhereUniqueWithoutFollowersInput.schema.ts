import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubUpdateWithoutFollowersInputObjectSchema as ClubUpdateWithoutFollowersInputObjectSchema } from './ClubUpdateWithoutFollowersInput.schema';
import { ClubUncheckedUpdateWithoutFollowersInputObjectSchema as ClubUncheckedUpdateWithoutFollowersInputObjectSchema } from './ClubUncheckedUpdateWithoutFollowersInput.schema';
import { ClubCreateWithoutFollowersInputObjectSchema as ClubCreateWithoutFollowersInputObjectSchema } from './ClubCreateWithoutFollowersInput.schema';
import { ClubUncheckedCreateWithoutFollowersInputObjectSchema as ClubUncheckedCreateWithoutFollowersInputObjectSchema } from './ClubUncheckedCreateWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ClubUpdateWithoutFollowersInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutFollowersInputObjectSchema)]),
  create: z.union([z.lazy(() => ClubCreateWithoutFollowersInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutFollowersInputObjectSchema)])
}).strict();
export const ClubUpsertWithWhereUniqueWithoutFollowersInputObjectSchema: z.ZodType<Prisma.ClubUpsertWithWhereUniqueWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpsertWithWhereUniqueWithoutFollowersInput>;
export const ClubUpsertWithWhereUniqueWithoutFollowersInputObjectZodSchema = makeSchema();
