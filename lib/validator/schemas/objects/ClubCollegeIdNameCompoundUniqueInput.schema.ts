import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  collegeId: z.string(),
  name: z.string()
}).strict();
export const ClubCollegeIdNameCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ClubCollegeIdNameCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCollegeIdNameCompoundUniqueInput>;
export const ClubCollegeIdNameCompoundUniqueInputObjectZodSchema = makeSchema();
