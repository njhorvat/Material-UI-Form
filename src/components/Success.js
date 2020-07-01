import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // Process form //
        this.props.nextStep();
    };
    home = e => {
        e.preventDefault();
        this.props.returnHome();
    };

    render() {

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thank you for your submission</h1>
                    <p>Please check email for confirmation</p>
                    
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.home}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Success;
