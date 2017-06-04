import React, { Component } from 'react';
import { connect } from 'react-redux';

import {View, Pages, NavRight, Button, FormInput, ContentBlock, Navbar, NavLeft, Link, NavCenter, Page, ContentBlockTitle, Fab, Icon, Popup } from 'framework7-react';

import PieTable from '../components/PieTable';
import ProviderList from '../components/ProviderList';

import PieFile from './../model/PieFile';

import {store} from '../App';


class providersPage extends Component {
  render() {
    return(
      <Page name="providersPage">
        <Navbar>
          <NavLeft>
            <Link icon="icon-bars" openPanel></Link>
          </NavLeft>
          <NavCenter sliding>PieDrive</NavCenter>
        </Navbar>

        <Fab >
          <Link openPopup>
          <Icon icon="icon-plus"></Icon>
          </Link>
        </Fab>


        <Popup id="popup">
            <View navbarFixed>
        			<Pages>
        				<Page>
        					<Navbar title="Popup">
        						<NavRight>
        							<Link closePopup>Close</Link>
        						</NavRight>
        					</Navbar>
                  <ProviderList/>
                </Page>
        			</Pages>
        		</View>
        </Popup>
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        files: state["initApp"].providers
    }
}

const ProvidersPage = connect(
    mapStateToProps
)(providersPage);

export default ProvidersPage;
