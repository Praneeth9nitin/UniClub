import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RoleInClubWhereInputObjectSchema as RoleInClubWhereInputObjectSchema } from './objects/RoleInClubWhereInput.schema';

export const RoleInClubDeleteManySchema: z.ZodType<Prisma.RoleInClubDeleteManyArgs> = z.object({ where: RoleInClubWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoleInClubDeleteManyArgs>;

export const RoleInClubDeleteManyZodSchema = z.object({ where: RoleInClubWhereInputObjectSchema.optional() }).strict();