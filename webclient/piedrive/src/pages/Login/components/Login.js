import React, {Component, PropTypes} from 'react';

import { NavRight, Button, Badge, FormInput, ListLabel, Navbar, Link, List, ListItem, Page } from 'framework7-react';

import * as actionTypes from '../actionTypes';

export default class LoginComponent extends Component {

    propTypes = {
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            email: {
                value: this.props.email,
                valid: false
            },
            password: {
                value: this.props.password,
                valid: false
            }
        };
    }

    componentWillReceiveProps(newProps){
        //todo: check password validity
        this.setState({
            password: {
                value: newProps.password,
                valid: true
            }
        });
    }

    onEmailChange = (event) => {
        //todo: perform validation
        this.setState({
            email: {
                value: event.target.value,
                valid: true
            }
        });
    };

    onPasswordChange = (event) => {
        //todo: perform validation
        this.setState({
            password: {
                value: event.target.value,
                valid: true
            }
        });
    };

    checkSigninButton = () => {
        if (this.state.email.valid && this.state.password.valid) {
            return "";
        }

        return "disabled";
    };

    onSignin = (event) => {
        this.props.onSignInClick(this.state.email.value, this.state.password.value);
    };

    checkLoginFailed = () => {
        if(this.props.type == actionTypes.SIGN_IN_FAILURE) {
            return (<ListItem>
                <span className="border-red color-red">Login Failed!</span>
            </ListItem>);
        }
    }

    //todo: display loading screen while waiting for response on sign in request

    render() {
        return (
            <Page name="Login">
                <List form inset>
                    {this.checkLoginFailed()}
                    <ListItem>
                        <FormInput value={this.state.email.value} onChange={this.onEmailChange} type="email" placeholder="Email"/>
                    </ListItem>
                    <ListItem>
                        <FormInput value={this.state.password.value} onChange={this.onPasswordChange} type="password" placeholder="Password"/>
                    </ListItem>
                    <ListItem >
                        {
                            //todo make button active
                        }
                        <Button className={this.checkSigninButton()} onClick={this.onSignin}>Sign in</Button>
                    </ListItem>
                    <ListLabel>
                        No account? <Link>Register now for free!</Link>
                    </ListLabel>
                </List>
            </Page>
        );
    }
}