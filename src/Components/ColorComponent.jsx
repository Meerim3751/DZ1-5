import React from 'react';
import '../app.css';

class ColorComponent extends React.Component {
    render() {
        console.log(this.props.changeColor);
        console.log(this.props.color.color);
        return (
            <div className={`item ${this.props.color.color}`}>
                <div  className={`button ${this.props.color.color}`}><button onClick={() => this.props.changeColor(this.props.color.color)}>Change background</button></div>
                
            </div>
        );
    }
}

export default ColorComponent;