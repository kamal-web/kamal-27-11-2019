import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import '../components/mystyle.css'
import Logo from '../components/Clogo.png'

class empData extends Component{
     constructor(props){
        super(props)
         this.state ={
             empdetails : [],
             Totalctc:''
            
         }
         
     }
     componentDidMount(){

       axios.get("/employee")
         .then(response => {
             console.log(response.data)
             this.setState({empdetails: response.data})
         })
         .catch(error =>{
            console.log(console.log(error)
             )
         })

          axios.get("/employee/ctc")
         .then(responsectc => {
             
              this.setState({Totalctc:responsectc.data})
              console.log(responsectc.data)
          })
          .catch(error =>{
             console.log(console.log(error)
              )
          })

     }

    render(){
        const columns = [
            {
                Header : "EmployeeId",
                accessor : "id",
                style:{
                    textAlign:'left'
                }
                
            },
            {
                Header : "Name",
                accessor : "name",
                style:{
                    textAlign:'center'
                }
            },
            {
                Header : "Project",
                accessor : "project",
                style:{
                    textAlign:'center'
                }
            },
            {
                Header : "Experience",
                accessor : "exp",
                style:{
                    textAlign:'center'
                }
            },
            {
                Header : "Salary",
                accessor : "salary",
                style:{
                    textAlign:'center'
                }
            },
            {
                Header : "Blood-Group",
                accessor : "bloodgroup",
                style:{
                    textAlign:'center'
                }   
            },
            {
                Header : "Actions",
                Cell : props =>{
                    return(
                        <button style ={{backgroundColor:'white',color:"red",textAlign:'center'}}>View</button>
                    )
                },
                width:100,
                maxWidth:100,
                minWidth:100
            }
        ]

        return(
            <div>
                <div style={{display:'flex',justifyContent:"space-between",maxWidth:'100%',maxHeight:'100',padding:'20px',backgroundColor:'#f5f5f0'}}>
                    <img src={Logo} alt={Logo} maxWidth='40px'/>
                </div>
                <div class="container-fluid" >
                        <div style={{display:'flex',justifyContent:"space-between",margin:'10px'}}>
                            <div style={{maxWidth:'100',fontSize:'2vw',color:'red',textShadow: '2px 2px 4px #000000'}}>Employee List</div>
        <div style={{background:'linear-gradient(to right, white 50%, blue 50%)',textAlign:'center',maxWidth:'100',border:'1px solid #d6d6c2',borderRadius:'50px',padding:'10px'}}><span style={{color:'blue',fontSize:'16px',padding:'5px 24px'}}>Total CTC:</span><span style={{color:'white',fontSize:'16px',padding:'5px 24px'}}>{this.state.Totalctc}/-</span></div>
                        </div>
                            
                                    <ReactTable
                                    columns={columns}
                                    data ={this.state.empdetails}
                                    defaultPageSize = {10}
                                    >

                                    </ReactTable>
                </div>
                    
            </div>
        )
    }
}

export default empData;