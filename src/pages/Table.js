import React, {Component} from 'react';
import axios from 'axios'


class Table extends Component{

    state={};
    change(option)
{
    localStorage.setItem('lang',option.target.value);
    window.location.reload();
}


componentDidMount(){
  axios.get('http://localhost:3004/poststr')
  .then(response=>{
    const posts = response.data;
    this.setState({posts});
  })
}

render(){
    
    

    
    const posts =this.state.posts;
    

    if(posts) return(
       
        
        posts.map(post=>{
            return(
                
                <div className="row mb-6">
                     <div>
            <nav className="container mb-4 mt-4"> 
                    <div className="row"> 
                    <div className="col-10"></div>
                    <div className="col-2">
               
                    <select className="custom-select pull-right" onChange={this.change}value="tr">
                    <option value="#">Seçiniz</option>
                    <option value="tr">Türkçe</option>
                    </select>
                    
                    
                </div>
                
            </div>    
        </nav>
        </div>
                    <div className="col-1">

                    </div>
                    <div className="col-7">
                        
                        <p>{post.id}</p>
                        <h2>{post.name}</h2>
                        <p>{post.description}</p>
                        
                    </div>
                    

                </div>

                
            )
        })
    )


  return 'no post';
}




}

export default Table;