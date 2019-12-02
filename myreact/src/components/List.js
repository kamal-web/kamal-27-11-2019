import React, {Component} from 'react'

class List extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.emp.id}</td>
                <td>{this.props.emp.name}</td>
                <td>{this.props.emp.project}</td>
                <td>{this.props.emp.exp}</td>
                <td>{this.props.emp.salary}</td>
                <td>{this.props.emp.bloodgroup}</td>
            </tr>
            
        )
    }
}

export default List;