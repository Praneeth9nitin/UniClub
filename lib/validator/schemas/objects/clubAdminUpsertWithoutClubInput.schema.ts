import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { clubAdminUpdateWithoutClubInputObjectSchema as clubAdminUpdateWithoutClubInputObjectSchema } from './clubAdminUpdateWithoutClubInput.schema';
import { clubAdminUncheckedUpdateWithoutClubInputObjectSchema as clubAdminUncheckedUpdateWithoutClubInputObjectSchema } from './clubAdminUncheckedUpdateWithoutClubInput.schema';
import { clubAdminCreateWithoutClubInputObjectSchema as clubAdminCreateWithoutClubInputObjectSchema } from './clubAdminCreateWithoutClubInput.schema';
import { clubAdminUncheckedCreateWithoutClubInputObjectSchema as clubAdminUncheckedCreateWithoutClubInputObjectSchema } from './clubAdminUncheckedCreateWithoutClubInput.schema';
import { clubAdminWhereInputObjectSchema as clubAdminWhereInputObjectSchema } from './clubAdminWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => clubAdminUpdateWithoutClubInputObjectSchema), z.lazy(() => clubAdminUncheckedUpdateWithoutClubInputObjectSchema)]),
  create: z.union([z.lazy(() => clubAdminCreateWithoutClubInputObjectSchema), z.lazy(() => clubAdminUncheckedCreateWithoutClubInputObjectSchema)]),
  where: z.lazy(() => clubAdminWhereInputObjectSchema).optional()
}).strict();
export const clubAdminUpsertWithoutClubInputObjectSchema: z.ZodType<Prisma.clubAdminUpsertWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminUpsertWithoutClubInput>;
export const clubAdminUpsertWithoutClubInputObjectZodSchema = makeSchema();
