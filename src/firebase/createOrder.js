import firebase from 'firebase'
import 'firebase/firestore'
import { getFirestore } from '../firebase/config'



export const createOrder = (datos, carrito, total) => {

    return new Promise(async (resolve, reject) => {

        const order = {
            buyer: datos,
            items: carrito.map( (elem) => ({id: elem.id, name: elem.name, price: elem.price, quantity: elem.quantity})),
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
    
    
        //Batch
        const db = getFirestore()
        const orders = db.collection('orders')
        const itemsToUpdate = db.collection('Productos')
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(el => el.id))
    
        const query = await itemsToUpdate.get()
        const batch = db.batch()
    
        const outOfStock = []
    
        query.docs.forEach( (doc) => {
            const itemInCart = carrito.find( prod => prod.id === doc.id)
    
            if(doc.data().stock >= itemInCart.quantity) {
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.quantity})
            } else {
                outOfStock.push({...doc.data(), id: doc.id})
            }
        })
    
        if (outOfStock.length === 0) {
    
            orders.add(order)
                .then( (response) => {
                    batch.commit()

                    resolve(response.id)
                })
        } else {
            reject(outOfStock)
        }
    

    })



      
}
