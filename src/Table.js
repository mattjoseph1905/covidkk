import { black } from 'material-ui/styles/colors';
import React from 'react';


export default class Table extends React.Component {
    
    constructor(props){
      super(props);
      this.getHeader = this.getHeader.bind(this);
      this.getRowsData = this.getRowsData.bind(this);
      this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function(){
      return Object.keys(this.props.data[0]);
    }
    
    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
        return <th key={key} style={{height:2, fontSize:13, width:70,}}>{key}</th>
      })
    }
    
    getRowsData = function(){
      var items = this.props.data;
      var keys = this.getKeys();
      return items.map((row, index)=>{
        return <tr key={index} style={{height:1,width:20,fontSize:10}}><RenderRow key={index} data={row} keys={keys}/></tr>
      })
    }
    
    render() {
        return (
          <div >
            <table style={{elevation:5,border: "1px solid black",borderTopLeftRadius:10,borderTopRightRadius:15 }}>
            <thead style={{backgroundColor:"#8bd9c7", border:"none"}} >
              <tr>{this.getHeader()}</tr>
            </thead>
            <tbody style={{height:2,  width:2}}>
              {this.getRowsData()}
            </tbody>
            </table>
          </div>
          
        );
    }
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    return <td key={props.data[key]} >{props.data[key]}</td>
  })
}