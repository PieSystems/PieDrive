import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    View, Pages, NavRight, Navbar, Link, NavCenter, Page, ContentBlockTitle, Popup
} from 'framework7-react';

import {LoginPage} from "./Login";
import * as actionTypes from './Login/actionTypes';


class home extends Component {

    autoclose = () => {
        if(this.props.type == actionTypes.SIGN_IN_SUCCESSS) {
            return false;
        }
    };

    render() {
        return(
            <Page>
                <Navbar>
                    <NavCenter sliding>PieDrive</NavCenter>
                    <NavRight>
                        <Link openPopup>Sign in</Link>
                    </NavRight>
                </Navbar>


                <Popup id="Login" opened={this.autoclose()}>
                    <View navbarFixed>
                        <Navbar title="Login">
                            <NavRight>
                                <Link closePopup>Close</Link>
                            </NavRight>
                        </Navbar>

                        <Pages>
                            <LoginPage/>
                        </Pages>
                    </View>
                </Popup>

                <ContentBlockTitle> Welcome to PieDrive!</ContentBlockTitle>
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
    type: state.login.type
});

const Home = connect(
    mapStateToProps
)(home);

export default Home;
