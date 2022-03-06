import React, { Component } from "react";

class App extends Component {
  state = {
    afazer: "",
    lista: []
  };

  add = () => {
    const{afazer,lista}=this.state
    if(afazer!=""){
      this.setState({
        afazer:'',
lista: this.state.lista.concat({
afazer:afazer,
id: Date.now()

      })
    })
    }
  };

  handleChange = (event) => {
    this.setState({
      afazer: event.target.value
    });
  };

  remove=(id)=>{
    let{lista}=this.state
    this.setState({
    lista:lista.filter((item)=>{
    return item.id!=id
    })
    })
    }    

  render() {
    return (
        <form onSubmit={this.add}>
          <div>
        <input onChange={this.handleChange} type="text" value={this.state.tarefa} />
        <button onClick={this.add}>add</button>
        <ul>
          {this.state.lista.map((item) => (
            <li>{item.afazer} 
            <button onClick={()=>{this.remove(item.id)}}>X</button>
            </li> 
          ))}
        </ul>
      </div>
      </form>
    );
  }
}

export default App;
