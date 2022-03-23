
export const getLocalStorage: Function = () => {
    const result = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        result.push(key)
    }
    return result
}
