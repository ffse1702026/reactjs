import React, {Component} from 'react';

export default class PromiseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h3 align="center">Testing Promise</h3>
                <h2> </h2>
            </div>
        );
    }

    componentDidMount() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log('A');
              reject('')
            }, 0); 
          }).then((data) => {
            console.log(data);
          }).catch(() => {
            console.log('catch');
          })
      
          setTimeout(() => {
            console.log('C');
          }, 0); 
    }
}