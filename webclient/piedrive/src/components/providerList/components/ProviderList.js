import React, {Component} from 'react';

import {
    Framework7App,
    Statusbar,
    Navbar,
    NavLeft,
    Link,
    Panel,
    View,
    NavRight,
    NavCenter,
    Views,
    Pages,
    Page,
    ContentBlock,
    ContentBlockTitle,
    PageContent,
    DataTable,
    List,
    ListItem,
    Fab,
    Icon,
    FabActions,
    FabSpeedDial,
    GridRow,
    GridCol,
    ListGroup
} from 'framework7-react';

import Rest from "../../../rest";

export default class ProviderList extends Component {

    constructor(props) {
        super(props);
    }

    onDropbox = (event) => {
        console.log("DB");
        this.props.onProviderAdd("dropbox");
        // Rest.get({
        //     url: "/api/hello",
        //     success: function (response) {
        //         console.log(response);
        //     }
        // });
    };

    render() {
        return (
            <List sortable>
                <ListGroup>
                    <ListItem title='Dropbox' onClick={this.onDropbox} link="/"
                              media='<i class="fa fa-2x fa-dropbox" aria-hidden="true"></i>'></ListItem>
                    <ListItem title="Google Drive" link="#"
                              media='<i class="fa fa-2x fa-google" aria-hidden="true"></i>'></ListItem>
                </ListGroup>
            </List>
        );
    }
}
