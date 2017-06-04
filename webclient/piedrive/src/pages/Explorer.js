import React, { Component } from 'react';
import { connect } from 'react-redux';

import {View, Pages, NavRight, Button, FormInput, ContentBlock, Navbar, NavLeft, Link, NavCenter, Page, ContentBlockTitle, Fab, Icon, Popup } from 'framework7-react';

import PieTable from '../components/PieTable';

import PieFile from './../model/PieFile';

import {store} from '../App';


class explorer extends Component {
  // static files = {
  //   root: [new PieFile("uni", true, ["dropbox", "google"]), new PieFile("bla", true, ["dropbox", "google"]), new PieFile("TestFile", false, ["google"]), new PieFile("TestFile", false, ["dropbox"])],
  //   uni: [new PieFile("ase", true, ["dropbox"]), new PieFile("FMI", true, ["dropbox"])],
  //   ase: [new PieFile("lecture", false, ["dropbox"]), new PieFile("exam", false, ["dropbox"])]
  // }

  onActionClick() {

  }

  render() {
    //var folders = this.props.location.hash.split("/");
    var folders = this.props.location.pathname.split("/");
    var fs = this.props.files.root;
    console.log("HELLO");
    console.log(store.getState());
    console.log(this.props);
    console.log(folders)
    if(folders[2] && this.props.files.hasOwnProperty(folders[2])) {
      fs = this.props.files[folders[2]];
    }



    return(
      <Page name="explorer">
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
                  <FormInput type="file" placeholder="Name"/>
                  <Button className="file-button"><input type="file"/>Test</Button>
        					<ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
                </Page>
        			</Pages>
        		</View>
        </Popup>

        <PieTable files={fs}/>


      </Page>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        files: state["initApp"].files
    }
}

const Explorer = connect(
    mapStateToProps
)(explorer);

export default Explorer;
