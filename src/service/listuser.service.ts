import { IApiService } from "../core/service.interface";
import axios from "axios";

export class ListuserService implements IApiService {
    async listAll(): Promise<any> {
        const list = await axios.get('http://141.94.247.187:3000/api/v1/list')
        console.log(list)
        return list.data
    }
    async login(name: string, code: string): Promise<any> {
        const list = await axios.get('http://141.94.247.187:3000/api/v1/list')
        const match = list.data.filter((user: any) => user.name == name && user.code == code)
        if (match.length == 0) throw new Error
        return match[0]
    }
}