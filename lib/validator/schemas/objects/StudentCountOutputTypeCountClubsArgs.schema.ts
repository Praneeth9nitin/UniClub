import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubWhereInputObjectSchema as StudentInClubWhereInputObjectSchema } from './StudentInClubWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentInClubWhereInputObjectSchema).optional()
}).strict();
export const StudentCountOutputTypeCountClubsArgsObjectSchema = makeSchema();
export const StudentCountOutputTypeCountClubsArgsObjectZodSchema = makeSchema();
