import React from 'react'
import { connect } from 'react-redux'

class Cart extends React.Component {
    render() {
        let itemList = this.props.addedItems.map(item => {            
            return(
                <div className="collection-item avatar" key={item.id}>
                    <div className="item-desc">
                        <span className="title"> {item.title} </span>
                    </div>
                    <div className="item-desc">
                        <p> {item.desc} </p>
                        <p>$<b> {item.price} </b></p>
                    </div>
                </div>
            )
        })

        return( 
        <div>
            { itemList } 
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        addedItems: state.addedItems
    })
}

export default connect(mapStateToProps, null)(Cart)