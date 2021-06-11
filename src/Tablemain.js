import React from 'react';

export default class Tablemain extends React.Component {
    
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
        return <th key={key} style={{height:50, fontSize:15, backgroundColor:" #8bd9c7", padding:15, fontWeight:"normal", border:"none",borderCollapse: "collapse"}}>{key}</th>
      })
    }
    
    getRowsData = function(){
      var items = this.props.data;
      var keys = this.getKeys();
      return items.map((row, index)=>{
        return <tr key={index} ><RenderRow key={index} data={row} keys={keys}/></tr>
      })
    }
    
    render() {
        return (
          <div>
            <table style={{margin:50, borderTopRadius:10}}>
            <thead >
              <tr>{this.getHeader()}</tr>
            </thead>
            <tbody >
              {this.getRowsData()}
            </tbody>
            </table>
          </div>
          
        );
    }
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    return <td key={props.data[key]}  style={{height:70}}>{props.data[key]}</td>
  })
}

  