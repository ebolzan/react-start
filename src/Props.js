import React, { Component } from 'react';
import Panel from './Panel';

class Props extends Component {

     value='';

    constructor(props){
        super(props);
        const {attr, attr2, attr3} = this.props;
        console.log(attr, attr2, attr3);
        this.value = attr3
    }
    render(){
        return (
            <div>
            <h1>Hello world {this.value}</h1>
            <Panel headertext="this a header" headercolor="red" data="this a data panel" />
            </div>
        );
    }
}

export default Props;