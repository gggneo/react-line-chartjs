import React, { Component } from 'react';
//import {Line} from 'react-chartjs-2';
var LineChart = require("react-chartjs").Line;

class App extends Component {
  
  render() {
    let chartData = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [
        {
          label: '',
          fill: true,
          lineTension: 0,
          fillColor: "rgba(249, 77, 43, 0.1)",
		  strokeColor: "rgba(239, 178, 0, 0.1)",
		  pointColor: "rgba(220,220,220,1)",
          borderCapStyle: '',
          backgroundColor: '#000',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: '',
          pointBorderWidth: 0,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0, 12, 12, 8, 8, 2, 1]          
        }
      ]
    }

    let chartOptions= { options :{
        animation: {
            easing: "easeInOutBack"
        },
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0)",
                    padding: 20,
		            display:false
                },
                gridLines: {
                    drawTicks: true,
                    drawBorder: true,
                    lineWidth: 0,
                    color: "rgba(0, 0, 0, 0)",                  
                }
            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent",
                    color: "rgba(0, 0, 0, 0)",
                    lineWidth: 0
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }    
    }
  }

  return (
      <div className="App">
        <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
      </div>
    );
  }
}

export default App;
