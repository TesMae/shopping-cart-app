import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/catalogueAction'

class Cart extends React.Component {
    handleClick = (item)=>{
        this.props.removeFromCart(item)
    }


    render() {
        let itemList = this.props.addedItems.map(item => {            
            return(
                <div className="collection-item avatar" key={item.id}>
                    <div className="item-img"> 
                    <img src={item.img} alt={item.img} className=""/>
                </div>

                    <div className="item-desc">
                        <span className="title"> {item.title} </span>
                    </div>
                    <div className="item-desc">
                        <p> {item.desc} </p>
                        <p><b>Price: $ {item.price} </b></p>
                    </div>
                    <button 
                    className="waves-effect waves-light btn pink remove" 
                    onClick={()=>{ this.handleClick(item) }}
                    >
                        Remove
                    </button>
                </div>
            )
        })

        return( 
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {itemList}
                    </ul>
                </div>
                <div> <h2><b>Total price : ${this.props.totalPrice}</b></h2> </div>         
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        addedItems: state.addedItems,
        totalPrice: state.totalPrice
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (item)=>{dispatch(removeFromCart(item))}
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)