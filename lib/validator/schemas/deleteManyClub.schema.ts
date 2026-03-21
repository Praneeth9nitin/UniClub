import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './objects/ClubWhereInput.schema';

export const ClubDeleteManySchema: z.ZodType<Prisma.ClubDeleteManyArgs> = z.object({ where: ClubWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClubDeleteManyArgs>;

export const ClubDeleteManyZodSchema = z.object({ where: ClubWhereInputObjectSchema.optional() }).strict();