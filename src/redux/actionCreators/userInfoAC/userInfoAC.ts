import type { firstName, secondName, phone, country, city,
    area, email, someInfo} from "./userInfoTypes";


export const userFirstNameAC = (firsName: string): firstName => {
    return {
        type: "USER_ORDER_FIRST_NAME",
        firstName: firsName
    }
}

export const userSecondNameAC = (secondName: string): secondName => {
    return {
        type: "USER_ORDER_SECOND_NAME",
        secondName: secondName
    }
}

export const userPhoneAC = (phone: number): phone => {
    return {
        type: "USER_ORDER_PHONE",
        phone: phone
    }
}

export const userCountryAC = (country: string): country => {
    return {
        type: "USER_ORDER_COUNTRY",
        country: country
    }
}

export const userCityAC = (city: string): city => {
    return {
        type: "USER_ORDER_CITY",
        city: city
    }
}

export const userAreaAC = (area: string): area => {
    return {
        type: "USER_ORDER_AREA",
        area: area
    }
}

export const userEmailAC = (email: string): email => {
    return {
        type: "USER_ORDER_EMAIL",
        email: email
    }
}

export const userSomeInfoAC = (someInfo: string): someInfo => {
    return {
        type: "USER_ORDER_SOME_INFO",
        someInfo: someInfo
    }
}