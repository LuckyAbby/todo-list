import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TodoFooter extends Component{
  render() {
    const {itemData} = this.props;
    const sum = itemData.length;
    const complete = itemData.filter( item => item.complete === true).length;
    return (
      <div>
        总共{sum}项，已完成{complete}项。
      </div>
    )
  }
}

TodoFooter.propTypes = {
  itemData: PropTypes.array
}
