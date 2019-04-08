import React, { Component } from 'react';
import '../../styles/home.scss';
import StartBtn from '../../components/StartBtn';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            started: false
        };

        this.handler = this.handler.bind(this)
    };

    handler() {
        this.setState({
          started: true
        });
    };

    render() {
        return (
            <div className='home'>
                <i className="fas fa-cog red-grad-color"></i>
                { this.state.started ? <p>Timer</p> : <StartBtn handler={this.handler}/> }
                
            </div>
        )
    };
};

export default Home;
