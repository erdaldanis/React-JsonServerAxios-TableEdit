import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context";
import axios from "axios";
import { Link } from "react-router-dom";



class User extends Component {
  state = {
    isVisible: false
  }
  static defaultProps = {
    name: "Bilgi Yok",
    brand: "Bilgi Yok",
    price: "Bilgi Yok",
    wholesaleprice: "Bilgi Yok",
    quantity: "Bilgi Yok"
  }

  onClickEvent = (e) => {

    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  onDeleteUser = async (dispatch, e) => {
    const { id } = this.props;
    // Delete Request
    await axios.delete(`http://localhost:3004/urunler/${id}`);

    // Consumer Dispatch
    dispatch({ type: "DELETE_USER", payload: id });
  }
  render() {

    // Destructing
    const { id, name, brand, price, wholesaleprice, quantity } = this.props;
    const { isVisible } = this.state;

    return (
      <UserConsumer>
        {
          value => {
            const { dispatch } = value;


            return (

              <div className="col-md-14 mb-2" >
                <div className="card" style={isVisible ? { backgroundColor: "#dcdcdc", color: "black" } : null}>

                  <div className="card-header d-flex justify-content-between">
                    <h4 className="d-inline" onClick={this.onClickEvent}>

                      <table className="width=%100">
                        <tr>
                          <th>--------------------</th>
                          <th>--------------------</th>
                          <th>--------------------</th>
                          <th>--------------------</th>
                          <th>--------------------</th>
                          <th>--------------------</th>
                        </tr>
                        <tr>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>{brand}</td>
                          <td>{price}</td>
                          <td>{wholesaleprice}</td>
                          <td>{quantity}</td>
                        </tr>
                        <tr>
                          <th>--------------------</th>
                          <th>--------------------</th>
                          <th>--------------------</th>
                          <th>--------------------</th>
                          <th>--------------------</th>
                          <th>--------------------</th>
                        </tr>
                      </table>


                    </h4>

                    <i onClick={this.onDeleteUser.bind(this, dispatch)} className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>

                  </div>
                  {isVisible ?
                    <div className="card-body">

                      <p className="card-text">Name : {name}</p>
                      <p className="card-text">Brand : {brand}</p>
                      <p className="card-text">Price : {price}</p>
                      <p className="card-text">Wholesale Price : {wholesaleprice}</p>
                      <p className="card-text">Quantity : {quantity}</p>
                      <Link to={`edit/${id}`} className="btn btn-dark btn-block"> Güncelle</Link>
                    </div> : null
                  }

                </div>

              </div>
            )


          }
        }


      </UserConsumer>)


  }
}


User.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  wholesaleprice: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
export default User;
