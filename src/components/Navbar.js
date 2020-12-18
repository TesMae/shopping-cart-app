import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends React.Component {
    render() {
        return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo center">Shopping</Link>

                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        {this.props.itemsCounter !== null && this.props.itemsCounter > 1
                        ? <li><Link to="/cart"> {this.props.itemsCounter} Items</Link></li> 
                        : <li><Link to="/cart"> {this.props.itemsCounter} Item</Link></li>}
                    </ul>
                </div>
            </nav> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemsCounter: state.itemsCounter
    }
}

export default connect(mapStateToProps)(Navbar)