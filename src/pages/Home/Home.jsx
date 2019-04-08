import React, { Component } from 'react';
import '../../styles/home.scss';


class Home extends Component {
    render() {
        return (
            <div className='home'>
            <i className="fas fa-cog red-grad-color"></i>
            <div className='center main-content'>
                <button className='btn_primary red-grad-bg'>START</button>
            </div>
            </div>
        )
    }
}

export default Home;
