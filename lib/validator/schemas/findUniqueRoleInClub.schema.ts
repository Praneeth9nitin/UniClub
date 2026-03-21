import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RoleInClubSelectObjectSchema as RoleInClubSelectObjectSchema } from './objects/RoleInClubSelect.schema';
import { RoleInClubIncludeObjectSchema as RoleInClubIncludeObjectSchema } from './objects/RoleInClubInclude.schema';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './objects/RoleInClubWhereUniqueInput.schema';

export const RoleInClubFindUniqueSchema: z.ZodType<Prisma.RoleInClubFindUniqueArgs> = z.object({ select: RoleInClubSelectObjectSchema.optional(), include: RoleInClubIncludeObjectSchema.optional(), where: RoleInClubWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoleInClubFindUniqueArgs>;

export const RoleInClubFindUniqueZodSchema = z.object({ select: RoleInClubSelectObjectSchema.optional(), include: RoleInClubIncludeObjectSchema.optional(), where: RoleInClubWhereUniqueInputObjectSchema }).strict();