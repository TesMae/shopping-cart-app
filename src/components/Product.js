import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/catalogueAction'


class ProductCart extends React.Component {
    handleClick = (item)=>{
        this.props.addToCart(item); 
    }
    

    render() {
        return (
            <div className="card" key={this.props.product.id}>
                <div className="card-image">
                    <img 
                    src={this.props.product.img} 
                    alt={this.props.product.title}
                    />
                    <span className="card-title"> {this.props.product.title} </span>
                    <span 
                    to="/"
                    className="btn-floating halfway-fab-wavres-effect waves-light red"
                    onClick={()=>{this.handleClick(this.props.product)}}
                    > 
                    <i className="material-icons">add</i> 
                    </span>                
                </div>
                <div className="card-content">
                    <p> {this.props.product.desc} </p>
                    <p>$<b> {this.props.product.price} </b></p>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps= (dispatch)=>{    
    return{
        addToCart: (item)=>{dispatch(addToCart(item))}
    }
}

export default connect(null, mapDispatchToProps)(ProductCart)