import React, { Component } from 'react'
import UserConsumer from "../context";
import axios from "axios";



class VeriGuncelle extends Component {

  state = {
      
      name : "",
      brand :"",
      price : "",
      wholesaleprice : "",
      quantity : "",
      error : false
   
  } 
   
  changeInput = (e) => {
      this.setState({
          
          [e.target.name] : e.target.value
      })
  }
  componentDidMount = async () => {
    const {id} = this.props.match.params;
    
    const response = await axios.get(`http://localhost:3004/urunler/${id}`);

    const {name,brand,price,wholesaleprice,quantity} = response.data;

    this.setState({
        name,
        brand,
        price,
        wholesaleprice,
        quantity    });

  }
  validateForm = () => {
    const {name,brand,price,wholesaleprice,quantity} = this.state;
    if (name === "" || brand === "" || price === "" || wholesaleprice === "" || quantity === "") {
        return false;
    }
    return true;
    
}
  updateUser = async (dispatch,e) => {
      e.preventDefault();

      // Update User
      const {name,brand,price,wholesaleprice,quantity} = this.state;
      const {id} = this.props.match.params;
      const updatedUser = {
        name,
        brand,
        price,
      wholesaleprice,
    quantity      };
      if (!this.validateForm()) {
        this.setState({
            error :true
        })
        return;
        }
      const response = await axios.put(`http://localhost:3004/urunler/${id}`,updatedUser);

      dispatch({type: "UPDATE_USER",payload : response.data});

      // Redirect
      this.props.history.push("/");
  } 
  render() {
    const {name,brand,price,wholesaleprice,quantity,error} = this.state;
    return <UserConsumer>
        {
            value => {
                const {dispatch} = value;
                return (
     
                    <div className = "col-md-8 mb-4">
              
                      
            
                      <div className="card">
                          <div className="card-header">
                          <h4>Tablo Güncelle</h4>
                          </div>
                          <div className="card-body">
                          {
                            error ? 
                            <div className = "alert alert-danger">
                               Lütfen bilgilerinizi kontrol edin.
                            </div>
                            :null
                         }
                              <form onSubmit = {this.updateUser.bind(this,dispatch)}>
                                  <div className="form-group">
                                      <label htmlFor="name">Name</label>
                                      <input 
                                      type="text"
                                      name = "name"
                                      id = "id"
                                      placeholder = "Enter Name"
                                      className ="form-control"
                                      value = {name}
                                      onChange = {this.changeInput}
              
                                      />
                                  
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="brand">Brand</label>
                                      <input 
                                      type="text"
                                      name = "brand"
                                      id = "brand"
                                      placeholder = "Enter Brand"
                                      className ="form-control"
                                      value = {brand}
                                      onChange = {this.changeInput}
                                      />
                                  
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="price">Price</label>
                                      <input 
                                      type="text"
                                      name = "price"
                                      id = "price"
                                      placeholder = "Enter Price"
                                      className ="form-control"
                                      value = {price}
                                      onChange = {this.changeInput}
                                      />
                                  
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="wholesaleprice">Wholesale Price</label>
                                      <input 
                                      type="text"
                                      name = "wholesaleprice"
                                      id = "wholesaleprice"
                                      placeholder = "Enter Wholesale Price"
                                      className ="form-control"
                                      value = {wholesaleprice}
                                      onChange = {this.changeInput}
                                      />
                                  
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="price">Quantity</label>
                                      <input 
                                      type="text"
                                      name = "quantity"
                                      id = "quantity"
                                      placeholder = "Enter Quantity"
                                      className ="form-control"
                                      value = {quantity}
                                      onChange = {this.changeInput}
                                      />
                                  
                                  </div>
                                 
                                  <button className = "btn btn-danger btn-block" type = "submit">Güncelle</button>
                              
                              
                              </form>
                          </div>
                      
                      </div>
                      
                    </div>
                  )
            }
        }
    
    </UserConsumer>
    
    
    
    
    
  }
}
export default VeriGuncelle;
