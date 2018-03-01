import React, { Component } from 'react';
import './App.css';
//import {Line} from 'react-chartjs-2';
var Chart = require('chart.js-v2');

//var LineChart = require("react-chartjs").Line;


class App extends Component {
  
  constructor(props) {
      super();
      this.state = { 
        gradientFillState : ''
      };
  }

  /* componentDidMount() {
    const refCanvas = document.getElementById('myChart').getContext("2d"); 
    var gradientStroke = refCanvas.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, 'white');
    gradientStroke.addColorStop(1, 'white');

    var gradientFill = refCanvas.createLinearGradient(0, 300, 0, 100);
    gradientFill.addColorStop(1, "rgb(249, 77, 43)");
    gradientFill.addColorStop(0, "rgb(239, 178, 0)");  

    this.setState({gradientFillState:gradientFill});
    
    var myChart = new Chart(refCanvas, {
        type: 'line',
        data: {
            labels: ["M", "T", "W", "T", "F", "S", "S"],
            datasets: [{
                label: "",
                borderColor: gradientStroke,
                pointBorderColor: 'black',
                pointBackgroundColor: 'white',
                pointHoverBackgroundColor: 'white',
                pointHoverBorderColor: 'black',
                pointBorderWidth: 6,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 1,
                pointRadius: 1,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 1,
                data: [0, 12, 12, 8, 8, 2, 1]
            }]
        },
        options: {
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
    });

  } */

  componentDidMount() {
    
    const ctx = document.getElementById("line-chart").getContext("2d");
    
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, 'white');
    gradientStroke.addColorStop(1, 'white');

    var gradientFill = ctx.createLinearGradient(0, 150, 0, 50);
    gradientFill.addColorStop(1, "rgb(249, 77, 43)");
    gradientFill.addColorStop(0, "rgb(239, 178, 0)");

    const data = {
            labels: ["M", "T", "W", "T", "F", "S", "S"],
            datasets: [{
                label: "",
                borderColor: gradientStroke,
                pointFillColor: 'white',
                pointBorderColor: 'black',
                pointBackgroundColor: 'white',
                pointHoverBackgroundColor: 'white',
                pointHoverBorderColor: 'black',
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 1,
                pointRadius: 1,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 1,
                showLine: true,
                steppedLine: false,
                data: [0, 12, 12, 8, 8, 2, 1]
            }]       
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        hover: {
            mode: 'index'
        },
        animation: {
            easing: "easeInOutBack"
        },
        legend: {
            display: false
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                top: 20,
                bottom: 0
            }
        },
        tooltips: {
            titleSpacing:10,
            displayColors:false,
            
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(255, 0, 0)',
                        backgroundColor: 'rgb(255, 0, 0)'
                    }
                },
                labelTextColor:function(tooltipItem, chart){
                    return '#fff';
                }
            }
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
                    zeroLineColor: "transparent",
                    fontSize:14
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }        
    }
    
    new Chart(ctx, {
        type: 'line',
        data: data,
        options: options        
    });
}

  render() {
  return (
      <div className="Apps">
        <canvas id="line-chart"></canvas>
      </div>
    );
  }
}

export default App;
