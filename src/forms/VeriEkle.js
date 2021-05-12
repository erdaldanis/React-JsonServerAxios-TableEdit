import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from "../context";
import axios from "axios";

const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: "none"
        }
    }
});

class VeriEkle extends Component {


    state = {
        visible: false,
        name: "",
        brand: "",
        price: "",
        wholesaleprice: "",
        quantity: "",
        error: false
    }
    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }
    validateForm = () => {
        const { name, brand, price, wholesaleprice, quantity } = this.state;
        if (name === "" || brand === "" || price === "" || wholesaleprice === "" || quantity === "") {
            return false;
        }
        return true;

    }
    changeInput = (e) => {
        this.setState({

            [e.target.name]: e.target.value
        })
    }

    addUser = async (dispatch, e) => {
        e.preventDefault();

        const { name, brand, price, wholesaleprice, quantity } = this.state;

        const newUser = {

            name,
            brand,
            price,
            wholesaleprice,
            quantity
        }

        if (!this.validateForm()) {
            this.setState({
                error: true
            })
            return;
        }


        const response = await axios.post("http://localhost:3004/urunler", newUser);


        dispatch({ type: "ADD_USER", payload: response.data });

        // Redirect
        this.props.history.push("/");

    }
    render() {
        const { visible, name, brand, price, wholesaleprice, quantity, error } = this.state;
        return <UserConsumer>
            {
                value => {
                    const { dispatch } = value;
                    return (

                        <div className="col-md-8 mb-4">

                            <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                            <Animation pose={"visible"}>
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Tablo Veri Ekleme</h4>
                                    </div>

                                    <div className="card-body">
                                        {
                                            error ?
                                                <div className="alert alert-danger">
                                                    Lütfen bilgilerinizi kontrol edin.
                                 </div>
                                                : null
                                        }


                                        <form onSubmit={this.addUser.bind(this, dispatch)}>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="id"
                                                    placeholder="Enter Name"
                                                    className="form-control"
                                                    value={name}
                                                    onChange={this.changeInput}

                                                />

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="brand">Brand</label>
                                                <input
                                                    type="text"
                                                    name="brand"
                                                    id="brand"
                                                    placeholder="Enter Brand"
                                                    className="form-control"
                                                    value={brand}
                                                    onChange={this.changeInput}
                                                />

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="price">Price</label>
                                                <input
                                                    type="text"
                                                    name="price"
                                                    id="price"
                                                    placeholder="Enter Price"
                                                    className="form-control"
                                                    value={price}
                                                    onChange={this.changeInput}
                                                />

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="wholesaleprice">Wholesale Price</label>
                                                <input
                                                    type="text"
                                                    name="wholesaleprice"
                                                    id="wholesaleprice"
                                                    placeholder="Enter Wholesale Price"
                                                    className="form-control"
                                                    value={wholesaleprice}
                                                    onChange={this.changeInput}
                                                />

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="quantity">Quantity</label>
                                                <input
                                                    type="text"
                                                    name="quantity"
                                                    id="quantity"
                                                    placeholder="Enter Quantity"
                                                    className="form-control"
                                                    value={quantity}
                                                    onChange={this.changeInput}
                                                />

                                            </div>
                                            <button className="btn btn-danger btn-block" type="submit">Veri Ekle</button>


                                        </form>
                                    </div>

                                </div>
                            </Animation>
                        </div>
                    )
                }
            }

        </UserConsumer>





    }
}
export default VeriEkle;
