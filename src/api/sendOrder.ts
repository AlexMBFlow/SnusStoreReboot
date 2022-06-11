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

export const sendOrder = async (obj: TSendOrder): Promise<any> => {
    return await axios.post<any, AxiosResponse<string>>("http://localhost:5000/api/order", JSON.stringify(
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
            return Promise.reject(err)
        })
}