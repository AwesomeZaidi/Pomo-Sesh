import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            minutes: this.props.minutes,
            seconds: this.props.seconds,
            ms: 0,
            running: false
          };
          
    };

    componentDidMount() {
        this.lastMS = Date.now() // returns current time in ms
        this.intervalId = setInterval(() => {
            const now = Date.now()
            const dt = now - this.lastMS
            // t += dt
            console.log('dt:', dt, this.state.ms)
            this.lastMS = now
            // count down by 1
            this.setState({
                ms: this.state.ms + dt
            });
            // if count is 0 clearInterval(this.intervalId)
        }, 1000)
    };

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    paddWithZero(n) {
        return n < 10 ? `0${n}` : `${n}`
    }

    formatTime(ms) {
        const secs = Math.floor(ms / 1000)
        const mins = Math.floor(secs / 60) 
        const hrs = Math.floor(mins / 60) 
        // const days = Math.floor(hrs / 24)
        return `${this.paddWithZero(mins % 60)}:${this.paddWithZero(secs % 60)}` // moddin the minutes
    }

    render() {
        return (
        <div className='center main-content timer-display'>
            {/* {this.countdown} */}
            <h1>{this.formatTime(this.state.ms)}</h1>
            <button className='btn_primary red-grad-bg'>Pause</button>
        </div>
        )
    }
}

export default Timer;
