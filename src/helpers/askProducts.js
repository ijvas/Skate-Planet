import { stock } from "../Stock/Stock"

export const askProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            resolve(stock)
        }, 2000)
    })
}