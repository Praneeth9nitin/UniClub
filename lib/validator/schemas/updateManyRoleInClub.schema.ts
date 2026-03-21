import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RoleInClubUpdateManyMutationInputObjectSchema as RoleInClubUpdateManyMutationInputObjectSchema } from './objects/RoleInClubUpdateManyMutationInput.schema';
import { RoleInClubWhereInputObjectSchema as RoleInClubWhereInputObjectSchema } from './objects/RoleInClubWhereInput.schema';

export const RoleInClubUpdateManySchema: z.ZodType<Prisma.RoleInClubUpdateManyArgs> = z.object({ data: RoleInClubUpdateManyMutationInputObjectSchema, where: RoleInClubWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoleInClubUpdateManyArgs>;

export const RoleInClubUpdateManyZodSchema = z.object({ data: RoleInClubUpdateManyMutationInputObjectSchema, where: RoleInClubWhereInputObjectSchema.optional() }).strict();