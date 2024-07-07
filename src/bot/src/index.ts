import { Telegraf } from 'telegraf'
import { RaydiumService } from 'services'
import { BotHandler } from './bot'
import dotenv from 'dotenv'
dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN as string)
const handler = BotHandler.getInstance()
bot.start((ctx) => ctx.reply(`Raydium Bot`))

bot.hears('/all', async (ctx) => {
    await handler.getPoolList(ctx, {
        poolType: "all",
        pageSize: 10,
        page: 1,
    })
})

bot.hears("/concentrated", async (ctx) => {
    await handler.getPoolList(ctx, {
        poolType: "concentrated",
        pageSize: 10,
        page: 1,
    })
})

bot.hears("/standard", async (ctx) => {
    await handler.getPoolList(ctx, {
        poolType: "standard",
        pageSize: 10,
        page: 1,
    })
})

bot.launch()
