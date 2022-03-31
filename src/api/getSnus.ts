export const getSnus = async () => {
    return dispatch => {
        fetch("http://localhost:5000/api/snus").then(res => res.json()).then(json => {

            //console.log(json)
            const parse = JSON.parse(json)
            console.log("parse", parse)
            return dispatch({
                type: "ADD",
                data: parse
            })
        })
    }
}