import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCollegeIdNameCompoundUniqueInputObjectSchema as ClubCollegeIdNameCompoundUniqueInputObjectSchema } from './ClubCollegeIdNameCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  collegeId_name: z.lazy(() => ClubCollegeIdNameCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ClubWhereUniqueInputObjectSchema: z.ZodType<Prisma.ClubWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubWhereUniqueInput>;
export const ClubWhereUniqueInputObjectZodSchema = makeSchema();
