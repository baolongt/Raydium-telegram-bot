import { RaydiumService } from "services";
import { QueryParams } from "services/src/types";
import { buildTable } from "./utils/build-table";
import { headers } from "./constant";
import { Context } from "telegraf";
import numeral from "numeral"
let instance: BotHandler | undefined;

export class BotHandler {
    private raydiumService: RaydiumService
    constructor(raydiumService: RaydiumService) {
        this.raydiumService = raydiumService;
    }

    async getPoolList(ctx: Context, params: Pick<QueryParams, 'poolType' | 'pageSize' | 'page'>) {
        const result = await this.raydiumService.getPoolList({
            ...params,
            poolSortField: "default",
            sortType: "desc",
        });

        const data = result.data.data.map((pool) => {
            return [
                `${pool.mintA.symbol}\-${pool.mintB.symbol}`,
                numeral(pool.tvl).format('0a'),
                numeral(pool.day.volume).format('0a'),
                numeral(pool.day.volumeFee).format('0a'),
                numeral(pool.day.apr).format('0a'),
            ]
        });

        const resHTML = `
<b>All Liquidity Pools </b>

<pre>
${buildTable(data, headers)}
</pre>
        `

        console.log(resHTML)


        return ctx.reply(
            resHTML,
            { parse_mode: 'HTML' }
        )
    }

    public static getInstance() {
        if (!instance) {
            instance = new BotHandler(RaydiumService.getInstance());
        }
        return instance;
    }
}