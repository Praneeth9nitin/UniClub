import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  name: z.string(),
  clubId: z.string()
}).strict();
export const RoleInClubNameClubIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.RoleInClubNameClubIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubNameClubIdCompoundUniqueInput>;
export const RoleInClubNameClubIdCompoundUniqueInputObjectZodSchema = makeSchema();
