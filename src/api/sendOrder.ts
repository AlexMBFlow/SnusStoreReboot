import axios from "axios";

export const sendOrder = (json) => {
    axios.post("http://localhost:5000/api/order", JSON.stringify(
        {
            method: "POST",
            data: JSON.stringify(json),
        }),
        {
            headers: {
                "Content-type": "application/json"
            }
        }
    )
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
