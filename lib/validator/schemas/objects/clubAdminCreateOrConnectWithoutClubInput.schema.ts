import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { clubAdminWhereUniqueInputObjectSchema as clubAdminWhereUniqueInputObjectSchema } from './clubAdminWhereUniqueInput.schema';
import { clubAdminCreateWithoutClubInputObjectSchema as clubAdminCreateWithoutClubInputObjectSchema } from './clubAdminCreateWithoutClubInput.schema';
import { clubAdminUncheckedCreateWithoutClubInputObjectSchema as clubAdminUncheckedCreateWithoutClubInputObjectSchema } from './clubAdminUncheckedCreateWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => clubAdminWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => clubAdminCreateWithoutClubInputObjectSchema), z.lazy(() => clubAdminUncheckedCreateWithoutClubInputObjectSchema)])
}).strict();
export const clubAdminCreateOrConnectWithoutClubInputObjectSchema: z.ZodType<Prisma.clubAdminCreateOrConnectWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminCreateOrConnectWithoutClubInput>;
export const clubAdminCreateOrConnectWithoutClubInputObjectZodSchema = makeSchema();
