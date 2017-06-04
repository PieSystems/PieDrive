import React, { Component } from 'react';

import {Navbar, View, Pages, Page, List, ListItem, Panel} from 'framework7-react';

import { push } from 'react-router-redux';
import { store } from '../App';

export default class LeftPanel extends Component {
  //onClick(event) {
  //  console.log("providers:");
  //  console.log(event.target.parentElement.parentElement.parentElement);
  //  store.dispatch(push(event.target.parentElement.parentElement.parentElement.pathname));
    //store.dispatch(push(event.target.parentElement.parentElement.parentElement.hash));
    //this.setState({route: target.target.pathname});
    //store.dispatch(navigateTo(target.target.parentNode.parentNode.pathname));
    //store.dispatch(navigateTo('/folders/uni'));
    //store.dispatch(navigateTo('/#/folders/uni'));
  //}

  onFiles(event) {
    console.log("files");
    store.dispatch(push("/"));
  }

  onProviders(event) {
    console.log("providers");
    store.dispatch(push("/providers"));
  }

  render() {
    return(
    	<Panel left reveal layout="dark">
    		<View id="left-panel-view" navbarThrough dynamicNavbar="true">
    			<Pages>
    				<Page>
              <Navbar title="Left Panel"></Navbar>
              <List accordion>
                <ListItem onClick={this.onFiles} link="/" title="Files"></ListItem>
                <ListItem onClick={this.onProviders} link="/providers" title="Providers"></ListItem>
    					</List>
    				</Page>
    			</Pages>
    		</View>
    	</Panel>
    );
  }
}

// <ListItem link="/about/" title="All Files" linkView="#main-view" linkClosePanel></ListItem>
// <ListItem link="/form/" title="Providers" linkView="#main-view" linkClosePanel></ListItem>
//
// <ContentBlock inner>
// 	<p>Left panel content goes here</p>
// </ContentBlock>
// <ContentBlockTitle>Load page in panel</ContentBlockTitle>
// <List>
// 	<ListItem link="/about/" title="About"></ListItem>
// 	<ListItem link="/form/" title="Form"></ListItem>
// </List>
// <ContentBlockTitle>Load page in main view</ContentBlockTitle>
