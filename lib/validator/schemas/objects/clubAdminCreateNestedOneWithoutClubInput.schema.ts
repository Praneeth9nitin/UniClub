import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { clubAdminCreateWithoutClubInputObjectSchema as clubAdminCreateWithoutClubInputObjectSchema } from './clubAdminCreateWithoutClubInput.schema';
import { clubAdminUncheckedCreateWithoutClubInputObjectSchema as clubAdminUncheckedCreateWithoutClubInputObjectSchema } from './clubAdminUncheckedCreateWithoutClubInput.schema';
import { clubAdminCreateOrConnectWithoutClubInputObjectSchema as clubAdminCreateOrConnectWithoutClubInputObjectSchema } from './clubAdminCreateOrConnectWithoutClubInput.schema';
import { clubAdminWhereUniqueInputObjectSchema as clubAdminWhereUniqueInputObjectSchema } from './clubAdminWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => clubAdminCreateWithoutClubInputObjectSchema), z.lazy(() => clubAdminUncheckedCreateWithoutClubInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => clubAdminCreateOrConnectWithoutClubInputObjectSchema).optional(),
  connect: z.lazy(() => clubAdminWhereUniqueInputObjectSchema).optional()
}).strict();
export const clubAdminCreateNestedOneWithoutClubInputObjectSchema: z.ZodType<Prisma.clubAdminCreateNestedOneWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminCreateNestedOneWithoutClubInput>;
export const clubAdminCreateNestedOneWithoutClubInputObjectZodSchema = makeSchema();
