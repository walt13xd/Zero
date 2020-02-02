import React, { Component } from 'react';

class Live extends Component {
    state = {
        visibility: 'visible'
    };
    
    toggleVisibility = () => {
        
        if(this.state.visibility === 'invisible') {
            this.setState({visibility: 'visible'});
        } else {
            this.setState({visibility: 'invisible'});
        }
        
    };

    render(){

        return (
            <div>
                <div>
                    <button onClick={this.toggleVisibility}>OK</button>
                </div>
                <div className={this.state.visibility} >
                    content
                </div>
            </div>
        );
    }
}

export default Live;