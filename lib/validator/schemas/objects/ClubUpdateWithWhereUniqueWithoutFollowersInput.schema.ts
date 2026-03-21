import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubUpdateWithoutFollowersInputObjectSchema as ClubUpdateWithoutFollowersInputObjectSchema } from './ClubUpdateWithoutFollowersInput.schema';
import { ClubUncheckedUpdateWithoutFollowersInputObjectSchema as ClubUncheckedUpdateWithoutFollowersInputObjectSchema } from './ClubUncheckedUpdateWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ClubUpdateWithoutFollowersInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutFollowersInputObjectSchema)])
}).strict();
export const ClubUpdateWithWhereUniqueWithoutFollowersInputObjectSchema: z.ZodType<Prisma.ClubUpdateWithWhereUniqueWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateWithWhereUniqueWithoutFollowersInput>;
export const ClubUpdateWithWhereUniqueWithoutFollowersInputObjectZodSchema = makeSchema();
