import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RoleInClubSelectObjectSchema as RoleInClubSelectObjectSchema } from './objects/RoleInClubSelect.schema';
import { RoleInClubIncludeObjectSchema as RoleInClubIncludeObjectSchema } from './objects/RoleInClubInclude.schema';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './objects/RoleInClubWhereUniqueInput.schema';

export const RoleInClubFindUniqueOrThrowSchema: z.ZodType<Prisma.RoleInClubFindUniqueOrThrowArgs> = z.object({ select: RoleInClubSelectObjectSchema.optional(), include: RoleInClubIncludeObjectSchema.optional(), where: RoleInClubWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoleInClubFindUniqueOrThrowArgs>;

export const RoleInClubFindUniqueOrThrowZodSchema = z.object({ select: RoleInClubSelectObjectSchema.optional(), include: RoleInClubIncludeObjectSchema.optional(), where: RoleInClubWhereUniqueInputObjectSchema }).strict();