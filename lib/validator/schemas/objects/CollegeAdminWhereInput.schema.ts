import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { CollegeScalarRelationFilterObjectSchema as CollegeScalarRelationFilterObjectSchema } from './CollegeScalarRelationFilter.schema';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema'

const collegeadminwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CollegeAdminWhereInputObjectSchema), z.lazy(() => CollegeAdminWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CollegeAdminWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CollegeAdminWhereInputObjectSchema), z.lazy(() => CollegeAdminWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  collegeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  college: z.union([z.lazy(() => CollegeScalarRelationFilterObjectSchema), z.lazy(() => CollegeWhereInputObjectSchema)]).optional()
}).strict();
export const CollegeAdminWhereInputObjectSchema: z.ZodType<Prisma.CollegeAdminWhereInput> = collegeadminwhereinputSchema as unknown as z.ZodType<Prisma.CollegeAdminWhereInput>;
export const CollegeAdminWhereInputObjectZodSchema = collegeadminwhereinputSchema;
