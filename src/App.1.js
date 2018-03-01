import React, { Component } from 'react';
//import {Line} from 'react-chartjs-2';
import ChartJS from 'react-chartjs-wrapper';
var LineChart = require("react-chartjs").Line;


class App extends Component {

    constructor(props) {
        super(props);
       
        let data = {
            labels: ["M", "T", "W", "T", "F", "S", "S"],
            datasets: [{
                label: "",
                borderColor: 'rgb(249, 77, 43)',
                pointBorderColor: 'black',
                pointBackgroundColor: 'white',
                pointHoverBackgroundColor: 'white',
                pointHoverBorderColor: 'black',
                pointBorderWidth: 1,
                pointHoverRadius: 1,
                pointHoverBorderWidth: 1,
                pointRadius: 1,
                fill: true,
                backgroundColor: 'rgb(239, 178, 0)',
                borderWidth: 0,
                width:'400px',
                data: [0, 12, 12, 8, 8, 2, 1]
            }]
        };

        this.state = {
          data: data,
          type: 'line'
        };
      }
    
      render() {
        return <div>
          <h1>Chart.js Demo</h1>
          <ChartJS type={this.state.type} data={this.state.data} width="400" height="400"/>
        </div>
      }

    }
      export default App;

  /* 
  render() {
    /* let chartData = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [
        {
          label: '',
          fill: true,
          lineTension: 0.1,
          fillColor: "rgba(249, 77, 43, 0.1)",
		  strokeColor: "rgb(239, 178, 0)",
		  pointColor: "rgba(220,220,220,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0, 12, 12, 8, 8, 2, 1],
          width:'400px',
          height:'400px'
        }
      ]
    }

    let options= {
        animation: {
            easing: "easeInOutBack"
        },
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20,
		                display:false
                },
                gridLines: {
                    drawTicks: false,
                    drawBorder: false                    
                }
            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }    
  } 

  return (
      <div className="App">

        <LineChart data={chartData} options={options} width="600" height="250"/>   
      </div>
    );
  }
} */


