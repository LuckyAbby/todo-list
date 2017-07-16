import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TodoList extends Component {

  render() {
    const context = this.props.itemData.map((item, index) => {
     return <div className='todo-item' key={index}><input type='checkbox' checked={item.complete} onChange={() => {this.props.handleCompelete(item.id)}}/>
     {item.complete ? <span className='complete-task'>{item.task}</span> : <span>{item.task}</span> }
     <button onClick={() => this.props.deleteItem(item.id)}>删除</button></div>
    })
    return (
      <div className='todo-list'>{context}</div>
    )
  }
}

TodoList.propTypes = {
  itemData: PropTypes.array
}
