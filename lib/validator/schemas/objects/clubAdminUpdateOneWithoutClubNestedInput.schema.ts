import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { clubAdminCreateWithoutClubInputObjectSchema as clubAdminCreateWithoutClubInputObjectSchema } from './clubAdminCreateWithoutClubInput.schema';
import { clubAdminUncheckedCreateWithoutClubInputObjectSchema as clubAdminUncheckedCreateWithoutClubInputObjectSchema } from './clubAdminUncheckedCreateWithoutClubInput.schema';
import { clubAdminCreateOrConnectWithoutClubInputObjectSchema as clubAdminCreateOrConnectWithoutClubInputObjectSchema } from './clubAdminCreateOrConnectWithoutClubInput.schema';
import { clubAdminUpsertWithoutClubInputObjectSchema as clubAdminUpsertWithoutClubInputObjectSchema } from './clubAdminUpsertWithoutClubInput.schema';
import { clubAdminWhereInputObjectSchema as clubAdminWhereInputObjectSchema } from './clubAdminWhereInput.schema';
import { clubAdminWhereUniqueInputObjectSchema as clubAdminWhereUniqueInputObjectSchema } from './clubAdminWhereUniqueInput.schema';
import { clubAdminUpdateToOneWithWhereWithoutClubInputObjectSchema as clubAdminUpdateToOneWithWhereWithoutClubInputObjectSchema } from './clubAdminUpdateToOneWithWhereWithoutClubInput.schema';
import { clubAdminUpdateWithoutClubInputObjectSchema as clubAdminUpdateWithoutClubInputObjectSchema } from './clubAdminUpdateWithoutClubInput.schema';
import { clubAdminUncheckedUpdateWithoutClubInputObjectSchema as clubAdminUncheckedUpdateWithoutClubInputObjectSchema } from './clubAdminUncheckedUpdateWithoutClubInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => clubAdminCreateWithoutClubInputObjectSchema), z.lazy(() => clubAdminUncheckedCreateWithoutClubInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => clubAdminCreateOrConnectWithoutClubInputObjectSchema).optional(),
  upsert: z.lazy(() => clubAdminUpsertWithoutClubInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => clubAdminWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => clubAdminWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => clubAdminWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => clubAdminUpdateToOneWithWhereWithoutClubInputObjectSchema), z.lazy(() => clubAdminUpdateWithoutClubInputObjectSchema), z.lazy(() => clubAdminUncheckedUpdateWithoutClubInputObjectSchema)]).optional()
}).strict();
export const clubAdminUpdateOneWithoutClubNestedInputObjectSchema: z.ZodType<Prisma.clubAdminUpdateOneWithoutClubNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminUpdateOneWithoutClubNestedInput>;
export const clubAdminUpdateOneWithoutClubNestedInputObjectZodSchema = makeSchema();
