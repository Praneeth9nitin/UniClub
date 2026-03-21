import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubCreateWithoutClubInputObjectSchema as RoleInClubCreateWithoutClubInputObjectSchema } from './RoleInClubCreateWithoutClubInput.schema';
import { RoleInClubUncheckedCreateWithoutClubInputObjectSchema as RoleInClubUncheckedCreateWithoutClubInputObjectSchema } from './RoleInClubUncheckedCreateWithoutClubInput.schema';
import { RoleInClubCreateOrConnectWithoutClubInputObjectSchema as RoleInClubCreateOrConnectWithoutClubInputObjectSchema } from './RoleInClubCreateOrConnectWithoutClubInput.schema';
import { RoleInClubCreateManyClubInputEnvelopeObjectSchema as RoleInClubCreateManyClubInputEnvelopeObjectSchema } from './RoleInClubCreateManyClubInputEnvelope.schema';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './RoleInClubWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoleInClubCreateWithoutClubInputObjectSchema), z.lazy(() => RoleInClubCreateWithoutClubInputObjectSchema).array(), z.lazy(() => RoleInClubUncheckedCreateWithoutClubInputObjectSchema), z.lazy(() => RoleInClubUncheckedCreateWithoutClubInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoleInClubCreateOrConnectWithoutClubInputObjectSchema), z.lazy(() => RoleInClubCreateOrConnectWithoutClubInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoleInClubCreateManyClubInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RoleInClubWhereUniqueInputObjectSchema), z.lazy(() => RoleInClubWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RoleInClubCreateNestedManyWithoutClubInputObjectSchema: z.ZodType<Prisma.RoleInClubCreateNestedManyWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubCreateNestedManyWithoutClubInput>;
export const RoleInClubCreateNestedManyWithoutClubInputObjectZodSchema = makeSchema();
