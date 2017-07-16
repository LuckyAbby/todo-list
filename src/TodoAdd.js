import React,{Component} from 'react';

export default class TodoAdd extends Component {
  render(){
    return(
      <div className='todo-add'>
      <input type='text' ref='addValue' placeholder='你在想什么'/>
      <button onClick={() => {this.props.addItem(this.refs.addValue.value); this.refs.addValue.value = '';}}>添加</button>
      </div>
    )
  }
}
