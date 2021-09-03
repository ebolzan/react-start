import React, { Component } from 'react';
import Panel from './Panel';

class Props extends Component {

     value= { name: "Evandro"};

     outra = (valor) => { return  "*".repeat(valor.length)+valor};


    constructor(props){
        super(props);
        const {attr, attr2, attr3} = this.props;
        console.log(attr, attr2, attr3);
       
    }
    render(){
        return (
            <div>
            <h1>Hello world {this.value.name}</h1>
            <Panel headertext="this a header" headercolor="red" data={this.outra("ebolzan")} />
            </div>
        );
    }
}

export default Props;