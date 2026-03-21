import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateNestedOneWithoutClubAdminInputObjectSchema as ClubCreateNestedOneWithoutClubAdminInputObjectSchema } from './ClubCreateNestedOneWithoutClubAdminInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  club: z.lazy(() => ClubCreateNestedOneWithoutClubAdminInputObjectSchema)
}).strict();
export const clubAdminCreateInputObjectSchema: z.ZodType<Prisma.clubAdminCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminCreateInput>;
export const clubAdminCreateInputObjectZodSchema = makeSchema();
