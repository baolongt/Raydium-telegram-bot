export type QueryParams = {
    poolType: "all" | "concentrated" | "standard";
    poolSortField: string;
    sortType: string;
    pageSize: number;
    page: number;
};

type Mint = {
    chainId: number;
    address: string;
    programId: string;
    logoURI: string;
    symbol: string;
    name: string;
    decimals: number;
    tags: string[];
    extensions: Record<string, unknown>;
};

type RewardDefaultInfo = {
    mint: Mint;
    perSecond: string;
    startTime: string;
    endTime: string;
};

type DayWeekMonth = {
    volume: number;
    volumeQuote: number;
    volumeFee: number;
    apr: number;
    feeApr: number;
    priceMin: number;
    priceMax: number;
    rewardApr: number[];
};

type Config = {
    id: string;
    index: number;
    protocolFeeRate: number;
    tradeFeeRate: number;
    tickSpacing: number;
    fundFeeRate: number;
    description: string;
    defaultRange: number;
    defaultRangePoint: number[];
};

type PoolData = {
    type: string;
    programId: string;
    id: string;
    mintA: Mint;
    mintB: Mint;
    rewardDefaultPoolInfos: string;
    rewardDefaultInfos: RewardDefaultInfo[];
    price: number;
    mintAmountA: number;
    mintAmountB: number;
    feeRate: number;
    openTime: string;
    tvl: number;
    day: DayWeekMonth;
    week: DayWeekMonth;
    month: DayWeekMonth;
    pooltype: string[];
    farmUpcomingCount: number;
    farmOngoingCount: number;
    farmFinishedCount: number;
    config: Config;
};

type ResponseData = {
    count: number;
    data: PoolData[];
    hasNextPage: boolean;
};

export type ApiResponse = {
    id: string;
    success: boolean;
    data: ResponseData;
};