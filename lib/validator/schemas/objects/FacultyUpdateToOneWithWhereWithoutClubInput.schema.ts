import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './FacultyWhereInput.schema';
import { FacultyUpdateWithoutClubInputObjectSchema as FacultyUpdateWithoutClubInputObjectSchema } from './FacultyUpdateWithoutClubInput.schema';
import { FacultyUncheckedUpdateWithoutClubInputObjectSchema as FacultyUncheckedUpdateWithoutClubInputObjectSchema } from './FacultyUncheckedUpdateWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FacultyWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => FacultyUpdateWithoutClubInputObjectSchema), z.lazy(() => FacultyUncheckedUpdateWithoutClubInputObjectSchema)])
}).strict();
export const FacultyUpdateToOneWithWhereWithoutClubInputObjectSchema: z.ZodType<Prisma.FacultyUpdateToOneWithWhereWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyUpdateToOneWithWhereWithoutClubInput>;
export const FacultyUpdateToOneWithWhereWithoutClubInputObjectZodSchema = makeSchema();
