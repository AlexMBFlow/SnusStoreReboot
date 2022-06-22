import axios from "axios";

type TBasketItem = {
    name: string,
    taste: string,
    packs: number,
    nicotine: number,
    saturation: string,
    price: number,
    avatar: string,
    rate: number,
}

type TInfo = {
    area: string
    city: string
    country: string
    email: string
    firstName: string
    secondName: string
    someInfo: string
    phone: number
}

type TSendOrder = {
    basket: TBasketItem[]
    info: TInfo
}

interface AxiosResponse<T = any>  {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}

axios.defaults.baseURL = "http://localhost:5000"
export const sendOrder = async (obj: TSendOrder): Promise<AxiosResponse<string>> => {
    return await axios.post<TSendOrder, AxiosResponse<string>>("api/order", JSON.stringify(
        {
            method: "POST",
            data: JSON.stringify(obj),
        }),
        {
            headers: {
                "Content-type": "application/json"
            }
        }
    )
        .then(res => {
            return res
        })
        .catch(err => {
            return Promise.reject(new Error(err))
        })
}