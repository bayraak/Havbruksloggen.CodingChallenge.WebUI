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
        const data = new FormData();
        data.append('jsonString', JSON.stringify(body));


        const result: AxiosResponse<BoatResponse> = await axiosInstance.post('boats', data);

        if (result && result.status === 200) {
            return result.data as BoatResponse;
        }

        return null;
    }

}