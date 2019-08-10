import React, {Component} from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import "../App.css"
class Table extends Component {
  state = {
    cells: [
        [false, false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false],

    ]
  };
 change = () => {
   console.log(this.state.cells[1][2])
 }
  render = () =>
    <TableDragSelect
      value={this.state.cells}
      onChange={cells => this.setState({ cells })}
    >
        <tr onClick={this.change}>
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
        
      </tr>
    </TableDragSelect>;
}
export default Table;