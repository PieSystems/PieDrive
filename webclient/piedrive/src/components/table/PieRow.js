import React, { Component } from 'react';

import { Link, Icon } from 'framework7-react';
import { push } from 'react-router-redux';
import { store } from '../../App';

export default class PieRow extends Component {

  static propTypes = {
    file: React.PropTypes.object.isRequired
  }

  onClick(event) {
    //store.dispatch(push(event.target.hash));
    store.dispatch(push(event.target.pathname));
  }

  render() {
    var locations = this.props.file.providers.map(function(location){
      return <Icon fa={location} className="fa-lg">&nbsp;</Icon>;
    });

    var mainIcon = <Icon fa="file" className="fa-2x"></Icon>;
    if(this.props.file.folder) {
      mainIcon = <Icon fa="folder" className="fa-2x"></Icon>;
    }

    return(
      <tr>
        <td className="label-cell">
          {
            //keep the link in the same line as icon because of the space... todo: ask lukas for better solution
          }
          {mainIcon} <Link onClick={this.onClick} href={"/folders/"+this.props.file.name}>
            {this.props.file.name}
          </Link>
        </td>
        <td className="label-cell">
          {locations}
        </td>
      </tr>
    );
  }
}
