import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { clubAdminWhereInputObjectSchema as clubAdminWhereInputObjectSchema } from './clubAdminWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => clubAdminWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => clubAdminWhereInputObjectSchema).optional().nullable()
}).strict();
export const ClubAdminNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ClubAdminNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ClubAdminNullableScalarRelationFilter>;
export const ClubAdminNullableScalarRelationFilterObjectZodSchema = makeSchema();
