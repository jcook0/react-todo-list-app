import React, {useRef, Component} from 'react'


class Todo extends React.Component {
    constructor(){
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };
    
    forceUpdateHandler(){
      this.forceUpdate();
    };

    render(){
      return(
        <>
        <div>
            {this.props.todo.Date} - {this.props.todo.Name}
            <input type="checkbox" checked={this.props.todo.Completed} onChange={() => {
                this.props.toggleTasks(this.props.todo.Id);
            }}/>
        </div>
        </>
      );
    }
  }


export default Todo;
