import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { clubAdminWhereInputObjectSchema as clubAdminWhereInputObjectSchema } from './clubAdminWhereInput.schema';
import { clubAdminUpdateWithoutClubInputObjectSchema as clubAdminUpdateWithoutClubInputObjectSchema } from './clubAdminUpdateWithoutClubInput.schema';
import { clubAdminUncheckedUpdateWithoutClubInputObjectSchema as clubAdminUncheckedUpdateWithoutClubInputObjectSchema } from './clubAdminUncheckedUpdateWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => clubAdminWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => clubAdminUpdateWithoutClubInputObjectSchema), z.lazy(() => clubAdminUncheckedUpdateWithoutClubInputObjectSchema)])
}).strict();
export const clubAdminUpdateToOneWithWhereWithoutClubInputObjectSchema: z.ZodType<Prisma.clubAdminUpdateToOneWithWhereWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminUpdateToOneWithWhereWithoutClubInput>;
export const clubAdminUpdateToOneWithWhereWithoutClubInputObjectZodSchema = makeSchema();
