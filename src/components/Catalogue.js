import React from "react"
import Product from "./Product"
import Items from "../productItems"


class Catalogue extends React.Component {    
    render() {        
        let itemList = Items.map(item => {
            
            const product = {
                id : item.id,
                img : item.img,
                title : item.title,            
                desc : item.desc,
                price : item.price
            }

            return(
                <Product 
                key={product.id}
                product={product}
                />
            )
        })
    

        return (
            <div>
              { itemList }            
            </div>
        )
    }
}


export default Catalogue