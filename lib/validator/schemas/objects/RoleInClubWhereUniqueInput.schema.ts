import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubNameClubIdCompoundUniqueInputObjectSchema as RoleInClubNameClubIdCompoundUniqueInputObjectSchema } from './RoleInClubNameClubIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name_clubId: z.lazy(() => RoleInClubNameClubIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const RoleInClubWhereUniqueInputObjectSchema: z.ZodType<Prisma.RoleInClubWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubWhereUniqueInput>;
export const RoleInClubWhereUniqueInputObjectZodSchema = makeSchema();
