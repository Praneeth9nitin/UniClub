import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubCreateWithoutRoleInputObjectSchema as ClubCreateWithoutRoleInputObjectSchema } from './ClubCreateWithoutRoleInput.schema';
import { ClubUncheckedCreateWithoutRoleInputObjectSchema as ClubUncheckedCreateWithoutRoleInputObjectSchema } from './ClubUncheckedCreateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClubCreateWithoutRoleInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutRoleInputObjectSchema)])
}).strict();
export const ClubCreateOrConnectWithoutRoleInputObjectSchema: z.ZodType<Prisma.ClubCreateOrConnectWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateOrConnectWithoutRoleInput>;
export const ClubCreateOrConnectWithoutRoleInputObjectZodSchema = makeSchema();
