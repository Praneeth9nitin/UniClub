import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ClubWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ClubWhereInputObjectSchema).optional()
}).strict();
export const ClubScalarRelationFilterObjectSchema: z.ZodType<Prisma.ClubScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ClubScalarRelationFilter>;
export const ClubScalarRelationFilterObjectZodSchema = makeSchema();
