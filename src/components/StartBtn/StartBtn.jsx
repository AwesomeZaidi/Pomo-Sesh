import React, { Component } from 'react';

class StartBtn extends Component {

    render() {
        return (
        <div className='center main-content'>
            <button className='btn_primary red-grad-bg' onClick={this.props.handler}>START</button>
            {/* onclick change the parent state to startClickedTrue */}
            {/* in render: if startClick: show Timer */}
        </div>
        )
    }
}

export default StartBtn;
