import './App.css';
import React from 'react';
import Table from './Table.js';
import Tablemain from './Tablemain'
import Checkbox from '@material-ui/core/Checkbox';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        { 'Hospital/Centre Name': 'Holy Cross', 'Location': 'vetturnimadam', 'Contact': 3, 'normal beds(vacant)': 2, 'normal beds (total)': 11, 'oxygen beds(vacant)': 32, 'oxygen beds (total)': 23, 'ICU/Ventilator(vacant)': 3, 'ICU/Ventilator(total)': 33 },
        { 'Hospital/Centre Name': 'Holy Cross', 'Location': 'vetturnimadam', 'Contact': 3, 'normal beds(vacant)': 2, 'normal beds (total)': 11, 'oxygen beds(vacant)': 32, 'oxygen beds (total)': 23, 'ICU/Ventilator(vacant)': 3, 'ICU/Ventilator(total)': 33 },
        { 'Hospital/Centre Name': 'Holy Cross', 'Location': 'vetturnimadam', 'Contact': 3, 'normal beds(vacant)': 2, 'normal beds (total)': 11, 'oxygen beds(vacant)': 32, 'oxygen beds (total)': 23, 'ICU/Ventilator(vacant)': 3, 'ICU/Ventilator(total)': 33 },
        { 'Hospital/Centre Name': 'Holy Cross', 'Location': 'vetturnimadam', 'Contact': 3, 'normal beds(vacant)': 2, 'normal beds (total)': 11, 'oxygen beds(vacant)': 32, 'oxygen beds (total)': 23, 'ICU/Ventilator(vacant)': 3, 'ICU/Ventilator(total)': 33 },
      ],
      tableData2:[
        {'Overall':20, 'Vacant':30,'Total':50},
        {'Overall':20, 'Vacant':30,'Total':50},
        {'Overall':20, 'Vacant':30,'Total':50}

      ],
      checked: true,

    }
  }


  render() {
    
    const { checked } = this.state

    const customColumnStyle = { height: "1px", width: "70px", fontSize: 10 };
    const handleChange = (event) => {
      checked(event.target.checked);
    };


    return (

      <div className="App">
        <div style={{ display: "flex", height: 50, width: "100%", backgroundColor: "#3caea3", flexDirection: "row",elevation:10 }}>
          <h2 style={{ fontSize: 20, color: "white", fontWeight: "bold", marginLeft: 580,marginTop:13 }}>Covid-19 Live Bed-Tracking</h2>
          <button style={{  marginLeft: 450, border:"none" , color:"white", marginTop:10,marginBottom:10}}  class="lanbutton" >TAMIL</button>
          <button style={{ margin: 10, border:"none" , color:"white" }} class="lanbutton" >ENGLISH</button>

        </div>
        <div style={{ display: "flex", flexDirection: "row", margin: 20 }}>
          <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{ display: "flex", flexDirection: "row"}}> 
            <l1 style={{ fontSize: 15, margin: 10 }}>Please Select the District: </l1>
            <select value="Kanniyakumari" style={{ width: 200, height: 30, borderRadius: 3, elevation: 5, borderColor: "#ddd", color: "grey", marginTop: 6 }}>
              <option value="Kanniyakumari">Kanniyakumari</option>
              <option value="Nagercoil">Nagercoil</option>
              <option value="Marthandam">Marthandam</option>
            </select>
            </div>
            <div style={{display:"flex", flexDirection:"row"}}>
            <button style={{ margin: 10, border:"none" ,backgroundColor:"transparent",}} class="dabutton" >All</button>
            <button style={{ margin: 10, border:"none" ,backgroundColor:"transparent", }} class="dabutton">ICU/Ventilator</button>
            <button style={{ margin: 10, border:"none" ,backgroundColor:"transparent",}} class="dabutton"> Oxygen Beds</button>
            <button style={{ margin: 10, border:"none" ,backgroundColor:"transparent",}} class="dabutton">Normal Beds</button>

            </div>
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
          <input
            placeholder="Search by Hospital/Covid Care"
            style={{ width: 250, height: 23, margin: 7, borderColor: "#ddd", borderWidth: 1, elevation: 5, marginLeft: 250, borderRadius: 3 }}
          />
          <div style={{ marginLeft: 200, display: "flex", flexDirection: "row",marginTop:20}}>
              <Checkbox
                defaultChecked
                onChange={handleChange}
                
            style={{color:"#8bd9c7"}}
              />
              <l1 style={{fontSize:14, marginTop:12}}>Govnment Hospital</l1>
              <Checkbox
                color="#8bd9c7"
                style={{color:"#8bd9c7",}}/>
              <l1 style={{fontSize:14, marginTop:12}}>Private Hospital</l1>
            </div>
            </div>
          <div >
          <Table data={this.state.tableData2} class="table1"/>

          </div>
        </div>

        <br />
        <Tablemain data={this.state.tableData} class="table2"  />

      </div>
    );
  }
}

export default App;
