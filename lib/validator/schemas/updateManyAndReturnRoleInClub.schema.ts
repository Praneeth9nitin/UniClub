import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RoleInClubSelectObjectSchema as RoleInClubSelectObjectSchema } from './objects/RoleInClubSelect.schema';
import { RoleInClubUpdateManyMutationInputObjectSchema as RoleInClubUpdateManyMutationInputObjectSchema } from './objects/RoleInClubUpdateManyMutationInput.schema';
import { RoleInClubWhereInputObjectSchema as RoleInClubWhereInputObjectSchema } from './objects/RoleInClubWhereInput.schema';

export const RoleInClubUpdateManyAndReturnSchema: z.ZodType<Prisma.RoleInClubUpdateManyAndReturnArgs> = z.object({ select: RoleInClubSelectObjectSchema.optional(), data: RoleInClubUpdateManyMutationInputObjectSchema, where: RoleInClubWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoleInClubUpdateManyAndReturnArgs>;

export const RoleInClubUpdateManyAndReturnZodSchema = z.object({ select: RoleInClubSelectObjectSchema.optional(), data: RoleInClubUpdateManyMutationInputObjectSchema, where: RoleInClubWhereInputObjectSchema.optional() }).strict();