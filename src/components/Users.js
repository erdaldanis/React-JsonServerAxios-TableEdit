import React, { Component } from 'react'
import User from "./User";
import UserConsumer from "../context";

class Users extends Component {
  render() {

    return (
      <UserConsumer>
        {
          value => {
            const { users } = value;
            return (
              <div>
                <div className="card" style={users ? { backgroundColor: "#778899", color: "white" } : null}>

                  <div className="card-header d-flex justify-content-between">
                    <h4 className="d-inline" onClick={this.onClickEvent}>

                      <table>
                        <tr>
                          <th>------------------</th>
                          <th>----------------------</th>
                          <th>------------------</th>
                          <th>---------------</th>
                          <th>----------------------------</th>
                          <th>--------------------</th>
                        </tr>
                        <tr>
                          <td>ID</td>
                          <td>Name</td>
                          <td>Brand</td>
                          <td>Price</td>
                          <td>Whole Sale Price</td>
                          <td>Quantity</td>
                        </tr>
                      </table>

                    </h4>

                  </div>

                </div>

                {
                  users.map(user => {
                    return (
                      <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        brand={user.brand}
                        price={user.price}
                        wholesaleprice={user.wholesaleprice}
                        quantity={user.quantity}



                      />

                    )

                  })

                }

              </div>
            )



          }
        }

      </UserConsumer>
    )






  }
}

export default Users;

