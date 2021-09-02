import React, { Component } from 'react';

class Panel extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { headertext, headercolor, data} = this.props;
        return (
            <div className="panel" style= {{width:'400px'}}>
            <div className="panel-head" style={{background:headercolor}}>
                { headertext } 
            </div>
            <div className="panel-body" style={{background:'yellow'}}>
            { data }
        </div>
        </div>
        );
    }
}
export default Panel;