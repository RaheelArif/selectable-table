import React, { Component } from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import "./table.css"
class Table extends Component {
  state = {
    cells: [
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],

    ],
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],

  };


  getData = (e) => {
    let Sunday = []
    let Monday = []
    let Tuesday = []
    let Wednesday = []
    let Thursday = []
    let Friday = []
    let Saturday = []
    let day = undefined;
    for (let a = 1; a < 8; a++) {
      switch (a) {
        case 1:
          day = Sunday;
          break;
        case 2:
          day = Monday;
          break;
        case 3:
          day = Tuesday;
          break;
        case 4:
          day = Wednesday;
          break;
        case 5:
          day = Thursday;
          break;
        case 6:
          day = Friday;
          break;
        default:
          day = Saturday;
      }

      if (this.state.cells[a][1] === true) { day.push("00") }
      if (this.state.cells[a][2] === true) { day.push("01") }
      if (this.state.cells[a][3] === true) { day.push("02") }
      if (this.state.cells[a][4] === true) { day.push("03") }
      if (this.state.cells[a][5] === true) { day.push("04") }
      if (this.state.cells[a][6] === true) { day.push("05") }
      if (this.state.cells[a][7] === true) { day.push("06") }
      if (this.state.cells[a][8] === true) { day.push("07") }
      if (this.state.cells[a][9] === true) { day.push("08") }
      if (this.state.cells[a][10] === true) { day.push("09") }
      if (this.state.cells[a][11] === true) { day.push("10") }
      if (this.state.cells[a][12] === true) { day.push("11") }
      if (this.state.cells[a][13] === true) { day.push("12") }
      if (this.state.cells[a][14] === true) { day.push("13") }
      if (this.state.cells[a][15] === true) { day.push("14") }
      if (this.state.cells[a][16] === true) { day.push("15") }
      if (this.state.cells[a][17] === true) { day.push("16") }
      if (this.state.cells[a][18] === true) { day.push("17") }
      if (this.state.cells[a][19] === true) { day.push("18") }
      if (this.state.cells[a][20] === true) { day.push("19") }
      if (this.state.cells[a][21] === true) { day.push("20") }
      if (this.state.cells[a][22] === true) { day.push("21") }
      if (this.state.cells[a][23] === true) { day.push("22") }
      if (this.state.cells[a][24] === true) { day.push("23") }
      switch (a) {
        case 1:
          this.setState({
            Sunday: day
          })
          break;
        case 2:
          this.setState({
            Monday: day
          })
          break;
        case 3:
          this.setState({
            Tuesday: day
          })
          break;
        case 4:
          this.setState({
            Wednesday: day
          })
          break;
        case 5:
          this.setState({
            Thursday: day
          })
          break;
        case 6:
          this.setState({
            Friday: day
          })
          break;
        default:
            this.setState({
              Saturday: day
            })
          break;
      }
    }
  }

  render() {
    console.log(this.state)
    
    return (
      <div style={{width:"90%"}}>


        <TableDragSelect
          value={this.state.cells}
          onChange={cells => this.setState({ cells }, () => { this.getData() })}
        >
          <tr>
            <th disabled className="h-Day1">Day</th>
            <th disabled className="h-row">00</th>
            <th disabled className="h-row">01</th>
            <th disabled className="h-row">02</th>
            <th disabled className="h-row">03</th>
            <th disabled className="h-row">04</th>
            <th disabled className="h-row">05</th>
            <th disabled className="h-row">06</th>
            <th disabled className="h-row">07</th>
            <th disabled className="h-row">08</th>
            <th disabled className="h-row">09</th>
            <th disabled className="h-row">10</th>
            <th disabled className="h-row">11</th>
            <th disabled className="h-row">12</th>
            <th disabled className="h-row">13</th>
            <th disabled className="h-row">14</th>
            <th disabled className="h-row">15</th>
            <th disabled className="h-row">16</th>
            <th disabled className="h-row">17</th>
            <th disabled className="h-row">18</th>
            <th disabled className="h-row">19</th>
            <th disabled className="h-row">20</th>
            <th disabled className="h-row">21</th>
            <th disabled className="h-row">22</th>
            <th disabled className="h-row">23</th>
          </tr>
          <tr>
            <td disabled className="c-day">Sunday</td>
            < td onChange={this.getData} id="sunday00" name="seleted" className="my-td" />
            < td id="sunday00" name="seleted" className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
          </tr>
          <tr>
            <td disabled className="c-day2">Monday</td>
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
          </tr>
          <tr>
            <td disabled className="c-day">Tuesday</td>
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
          </tr>
          <tr>
            <td disabled className="c-day2">Wednesday</td>
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
          </tr>
          <tr>
            <td disabled className="c-day">Thursday</td>
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
          </tr>
          <tr>
            <td disabled className="c-day2">Friday</td>
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />

          </tr>
          <tr>
            <td disabled className="c-day">Saturday</td>
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />
            < td className="my-td" />

          </tr>
        </TableDragSelect>
      </div>
    )
  }
}
export default Table;