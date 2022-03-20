export const getLocalStorage = () => {
    const result = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        console.log()
        result.push(key)
    }
    return result
}