import axios from "axios"

export const sendOrder = () => {
    axios.post("http://localhost:5000/api/order", {
        method: "POST",
        body: JSON.stringify({
            order: "snus"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
