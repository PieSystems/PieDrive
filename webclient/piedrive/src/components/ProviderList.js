import React, { Component } from 'react';

import {Framework7App, Statusbar, Navbar, NavLeft, Link, Panel, View, NavRight, NavCenter, Views, Pages, Page, ContentBlock, ContentBlockTitle, PageContent, DataTable, List, ListItem, Fab, Icon, FabActions, FabSpeedDial, GridRow, GridCol, ListGroup } from 'framework7-react';

export default class ProviderList extends Component {
  render() {
    return(
      <List sortable>
      <ListGroup>
        <ListItem title='Dropbox' link="/" media='<i class="fa fa-2x fa-dropbox" aria-hidden="true"></i>'></ListItem>
        <ListItem title="Google Drive" media='<i class="fa fa-2x fa-google" aria-hidden="true"></i>'></ListItem>
      </ListGroup>
      </List>
    );
  }
}
