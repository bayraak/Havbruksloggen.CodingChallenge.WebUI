import { AxiosResponse } from 'axios';
import { LoginRequest } from './interfaces/LoginRequest';
import { LoginResponse } from './interfaces/LoginResponse';
import axiosInstance from '../config/axios';

export class LoginService {

    static async login(body: LoginRequest): Promise<LoginResponse | null> {
        const result: AxiosResponse<LoginResponse> = await axiosInstance.post('users/authenticate', body);

        if (result && result.status === 200) {
            return result.data as LoginResponse;
        }

        return null;
    }

}