import React, { Component } from 'react';
export default class MouseMover extends Component {
    state = {
        x: 0,
        y: 0,
        currentEvent: '',
        value: ''
    };

    handleMouseMove = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY,
            currentEvent: 'onMouseMove'
        });
    };

    handleMouseUp = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY,
            currentEvent: 'onMouseUp'
        });
    };

    handleClick = e => {
        this.setState({
            currentEvent: 'onClick'
        });
    };

    handleDoubleClick = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY,
            currentEvent: 'onDoubleClick'
        });
    };

    handleMouseLeave = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY,
            currentEvent: 'onMouseLeave'
        });
    };

    handleTouchStart = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY,
            currentEvent: 'onTouchStart'
        });
    };

    
    handleChange = e => {
        this.setState({
            value: e.target.value
        });
    };

    handleSubmit = e => {
        alert('submit');
    }

    // componentDidMount() {
    //     const ele = document.getElementById('mousemove');
    //     ele.innerHTML = 'Move your mouse over this text';
    //     ele.addEventListener('mousemove', function (evt) {
    //         const { screenX, screenY } = evt;
    //         ele.innerHTML = '<div>Mouse is at: X: ' +
    //             screenX + ', Y: ' + screenY +
    //             '</div>';
    //     })
    // }

    render() {
        return (
            <div>
                    /** User interaction */
                <div onMouseMove={this.handleMouseMove} id={'mousemove'}
                    onMouseUp={this.handleMouseUp}
                    onClick={this.handleClick}
                    onDoubleClick={this.handleDoubleClick}
                    onMouseLeave={this.handleMouseLeave}
                    style={{ background: 'yellow' }}
                    onTouchStart={this.handleTouchStart}
                >
                    {this.state.currentEvent}
                    {this.state.x || this.state.y
                        ? "The mouse is at x: " + this.state.x + ", y: " + this.state.y
                        : "Simpe User interaction"}
                </div>
                    /** Input events */
                <form onSubmit={this.handleSubmit}>
                    <span>Value at input is: { this.state.value}</span>
                    <input onChange={ this.handleChange} />
                    <input type='submit' value={'submit'}/>
                </form>
            </div>
        );
    }
}