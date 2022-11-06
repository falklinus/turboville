import { router, publicProcedure } from '../trpc'
import { z } from 'zod'

export const postRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany()
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.example.findFirst({ where: { id: input } })
  }),
  create: publicProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.example.create({ data: input })
    }),
})
