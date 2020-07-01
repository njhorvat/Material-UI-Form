import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import App from '../App';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // Process form //
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm" />
                    <List>
                        <ListItem
                            primaryText={firstName}
                            secondaryText="First Name"
                        />
                        <ListItem
                            primaryText={lastName}
                            secondaryText="Last Name"
                        />
                        <ListItem
                            primaryText={email}
                            secondaryText="Email"
                        />
                        <ListItem
                            primaryText={occupation}
                            secondaryText="Occupation"
                        />
                        <ListItem
                            primaryText={city}
                            secondaryText="City"
                        />
                        <ListItem
                            primaryText={bio}
                            secondaryText="Bio"
                        />
                    </List>
                    <br />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton 
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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

export default Confirm
