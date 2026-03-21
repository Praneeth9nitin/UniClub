import * as z from 'zod';
export const StudentDeleteManyResultSchema = z.object({
  count: z.number()
});