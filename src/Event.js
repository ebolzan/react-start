import React, { Component } from 'react';

class Event extends Component {
constructor(props){
    super(props);

    this.state = {
        name : "",
        age  : "",
        data : []
    }
}

handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value,
    });

    console.log(this.state);
}
showData = () =>
{
    alert("name:"+ this.state.name+ " -- idade: "+this.state.age);

    const arr = this.state.data;
    arr.push(this.state.name);

    this.setState(
        {
            name : '',
            age : '',
            data: arr,
        }
    )
}
    render()
    {
        const { data } = this.state;
        return (
            <div> 
               <input type="text" onChange={this.handleChange} name="name" id="" placeholder="enter your name"></input>
               <input type="text" onChange={this.handleChange} name="age" id="" placeholder="enter your name"></input>
                <button onClick={this.showData} type="button">Ok</button>
                <ul>
                    {
                        data.map(item => (
                            <li key={item}>{item}</li>))
                    }
                </ul>
            </div>
        );
        }
}

export default Event;