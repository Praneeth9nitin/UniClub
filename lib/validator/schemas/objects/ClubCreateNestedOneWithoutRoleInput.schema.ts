import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutRoleInputObjectSchema as ClubCreateWithoutRoleInputObjectSchema } from './ClubCreateWithoutRoleInput.schema';
import { ClubUncheckedCreateWithoutRoleInputObjectSchema as ClubUncheckedCreateWithoutRoleInputObjectSchema } from './ClubUncheckedCreateWithoutRoleInput.schema';
import { ClubCreateOrConnectWithoutRoleInputObjectSchema as ClubCreateOrConnectWithoutRoleInputObjectSchema } from './ClubCreateOrConnectWithoutRoleInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutRoleInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutRoleInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClubCreateOrConnectWithoutRoleInputObjectSchema).optional(),
  connect: z.lazy(() => ClubWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClubCreateNestedOneWithoutRoleInputObjectSchema: z.ZodType<Prisma.ClubCreateNestedOneWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateNestedOneWithoutRoleInput>;
export const ClubCreateNestedOneWithoutRoleInputObjectZodSchema = makeSchema();
