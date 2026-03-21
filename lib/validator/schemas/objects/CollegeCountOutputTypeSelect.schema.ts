import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCountOutputTypeCountClubsArgsObjectSchema as CollegeCountOutputTypeCountClubsArgsObjectSchema } from './CollegeCountOutputTypeCountClubsArgs.schema';
import { CollegeCountOutputTypeCountFacultyArgsObjectSchema as CollegeCountOutputTypeCountFacultyArgsObjectSchema } from './CollegeCountOutputTypeCountFacultyArgs.schema';
import { CollegeCountOutputTypeCountStudentsArgsObjectSchema as CollegeCountOutputTypeCountStudentsArgsObjectSchema } from './CollegeCountOutputTypeCountStudentsArgs.schema';
import { CollegeCountOutputTypeCountFollowersArgsObjectSchema as CollegeCountOutputTypeCountFollowersArgsObjectSchema } from './CollegeCountOutputTypeCountFollowersArgs.schema'

const makeSchema = () => z.object({
  clubs: z.union([z.boolean(), z.lazy(() => CollegeCountOutputTypeCountClubsArgsObjectSchema)]).optional(),
  faculty: z.union([z.boolean(), z.lazy(() => CollegeCountOutputTypeCountFacultyArgsObjectSchema)]).optional(),
  students: z.union([z.boolean(), z.lazy(() => CollegeCountOutputTypeCountStudentsArgsObjectSchema)]).optional(),
  followers: z.union([z.boolean(), z.lazy(() => CollegeCountOutputTypeCountFollowersArgsObjectSchema)]).optional()
}).strict();
export const CollegeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CollegeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CollegeCountOutputTypeSelect>;
export const CollegeCountOutputTypeSelectObjectZodSchema = makeSchema();
