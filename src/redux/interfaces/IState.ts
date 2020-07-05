import { IAuthState } from "./IAuthState";

export interface IAppState {
    readonly auth: IAuthState;
}
