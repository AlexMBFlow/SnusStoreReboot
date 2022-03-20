/* import { initLocalStorage } from "./InitLocalStorage"

initLocalStorage() */

export const initLocalStorage = () => {
    localStorage.setItem('item', "item")
}

export const setLocalStorage = (snus) => {
    localStorage.setItem(snus.id, snus)
}

export const getLocalStorage = () => {
    const result = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        console.log(key)
        result.push(key)
    }
    console.log(result)
    return result
}