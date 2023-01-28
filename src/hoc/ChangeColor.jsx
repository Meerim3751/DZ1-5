import React from 'react';
import './../app.css';

const ChangeColor = (WrappedComponent) => {
    return class extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                color: "dark",
            }
        }

        handleChangeColor (backColor){
            this.setState({color: backColor === "dark" ? "light" : "dark"});
        }

        render() {
            return (
                <WrappedComponent {...this.props} color={this.state} changeColor={(backColor) => this.handleChangeColor(backColor)}/>
            );
        }

    }
};

export default ChangeColor;