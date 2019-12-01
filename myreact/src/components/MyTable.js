import React ,{Component} from 'react'
import axios from 'axios'
import List from '../components/List.js'
 
class MyTable extends Component{
    
     componentDidMount(){

       axios.get("/employee")
         .then(response => {
             console.log(response.data)
             //this.setState({details:response.data})
         })
         .catch(error =>{
            console.log(console.log(error)
             )
         })
     }

    render(){
        return(
            <div className="table-responsive">
            <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">EmployeeId</th>
                        <th scope="col">Name</th>
                        <th scope="col">Project</th>
                        <th scope="col">Experience</th>
                        <th scope="col">salary</th>
                        <th scope="col">Blood-Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        {
                                this.props.data.map((emp)=>{
                                    return <List List={emp} />
                                })
                            
                        }
                        
                            
                    
                       
                    </tbody>
            </table>
            </div>
        )
    }
}

export default MyTable;