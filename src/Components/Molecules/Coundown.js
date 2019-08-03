import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Countdown extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          days: 0,
          hours: 0,
          min: 0,
          sec: 0,
        }
      }
    
      componentDidMount() {
        // update every second
        this.interval = setInterval(() => {
          const date = this.calculateCountdown(this.props.date);
          date ? this.setState(date) : this.stop();
        }, 1000);
      }
    
      componentWillUnmount() {
        this.stop();
      }
    
      calculateCountdown(endDate) {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
    
        // clear countdown when date is reached
        if (diff <= 0) return false;
    
        const timeLeft = {
          years: 0,
          days: 0,
          hours: 0,
          min: 0,
          sec: 0,
          millisec: 0,
        };
    
        // calculate time difference between now and expected date
        if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
          timeLeft.years = Math.floor(diff / (365.25 * 86400));
          diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) { // 24 * 60 * 60
          timeLeft.days = Math.floor(diff / 86400);
          diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
          timeLeft.hours = Math.floor(diff / 3600);
          diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
          timeLeft.min = Math.floor(diff / 60);
          diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;
    
        return timeLeft;
      }
    
      stop() {
        clearInterval(this.interval);
      }
    
      addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
          value = '0' + value;
        }
        return value;
      }


    render() {
        const countDown = this.state;
        const {template} = this.props;

        return (
            <div class={template==='17' ? "countdown-type1" : "countdown-type2"}>
                <span id="days" class="s6 m3">{this.addLeadingZeros(countDown.days)}<small>days</small></span>
                <span id="hours" class=" s6 m3">{this.addLeadingZeros(countDown.hours)} <small>hours</small> </span>
                <span id="minutes" class=" s6 m3">{this.addLeadingZeros(countDown.min)} <small>minutes</small> </span>
                <span id="seconds" class="s6 m3">{this.addLeadingZeros(countDown.sec)} <small>seconds</small> </span>
            </div>
        );
    }
}



Countdown.propTypes = {

};


export default Countdown;