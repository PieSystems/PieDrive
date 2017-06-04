import React, { Component } from 'react';

import PieRow from './table/PieRow';

export default class PieTable extends Component {

  static propTypes = {
    files: React.PropTypes.array.isRequired
  }

  render() {
    var files = this.props.files.map(function(file) {
      return <PieRow file={file}/>;
    });

    return(
      <div className="data-table data-table-init">
          <table>
            <thead>
              <tr>
                <th className="label-cell sortable-cell sortable-active">Name</th>
                <th className="label-cell">Location</th>
              </tr>
            </thead>
            <tbody>
              {files}
            </tbody>
          </table>
      </div>
    );
  }
}
