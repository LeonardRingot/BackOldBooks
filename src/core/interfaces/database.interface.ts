
export interface IConnect {

    dbUri: string,

    authenticate(): Promise<void>,

}