import { AxiosResponse } from 'axios';
import { RegisterRequest } from './interfaces/RegisterRequest';
import { RegisterResponse } from './interfaces/RegisterResponse';
import axiosInstance from '../config/axios';

export class RegisterService {

    static async register(body: RegisterRequest): Promise<RegisterResponse | null> {
        const result: AxiosResponse<RegisterResponse> = await axiosInstance.post('users/register', body);

        if (result && result.status === 200) {
            return result.data as RegisterResponse;
        }

        return null;
    }

}