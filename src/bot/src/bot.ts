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

        let head = ''
        switch (params.poolType) {
            case 'all':
                head = '__All Liquidity Pools__'
                break;
            case 'concentrated':
                head = '__Concentrated Liquidity Pools__'
                break;
            case 'standard':
                head = '__Standard Liquidity Pools__'
                break;
        }
        const resp = `
${head}
\`\`\`
${buildTable(data, headers)}
\`\`\`

        `

        console.log(resp)


        return ctx.replyWithMarkdownV2(
            resp
        )
    }

    public static getInstance() {
        if (!instance) {
            instance = new BotHandler(RaydiumService.getInstance());
        }
        return instance;
    }
}