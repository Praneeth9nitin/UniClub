import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyCountOutputTypeCountClubArgsObjectSchema as FacultyCountOutputTypeCountClubArgsObjectSchema } from './FacultyCountOutputTypeCountClubArgs.schema'

const makeSchema = () => z.object({
  club: z.union([z.boolean(), z.lazy(() => FacultyCountOutputTypeCountClubArgsObjectSchema)]).optional()
}).strict();
export const FacultyCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.FacultyCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.FacultyCountOutputTypeSelect>;
export const FacultyCountOutputTypeSelectObjectZodSchema = makeSchema();
