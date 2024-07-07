import { AxiosInstance } from "axios";
import { ApiResponse, QueryParams } from "./types";
import axiosInstance from "./axiosInstance"

let instance: RaydiumService | undefined;

export class RaydiumService {
    private axios: AxiosInstance;
    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }
    async getPoolList(params: QueryParams): Promise<ApiResponse> {
        console.log("get pool list")
        const response = await this.axios.get("/pools/info/list", {
            params: params,
        });
        return response.data;
    }

    public static getInstance() {
        if (!instance) {
            instance = new RaydiumService(axiosInstance);
        }
        return instance;
    }
}