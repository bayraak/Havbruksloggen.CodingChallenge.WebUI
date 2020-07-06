import { AxiosResponse } from 'axios';
import { BoatRequest } from './interfaces/BoatRequest';
import { BoatResponse } from './interfaces/BoatResponse';
import axiosInstance from '../config/axios';

export class BoatService {

    static async getBoats(): Promise<BoatResponse | null> {
        const result: AxiosResponse<BoatResponse> = await axiosInstance.get('boats');

        if (result && result.status === 200) {
            return result.data as BoatResponse;
        }

        return null;
    }

    static async createBoat(body: BoatRequest): Promise<BoatResponse | null> {
        const result: AxiosResponse<BoatResponse> = await axiosInstance.get('boats', body);

        if (result && result.status === 200) {
            return result.data as BoatResponse;
        }

        return null;
    }

}