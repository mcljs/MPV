import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chartone extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Niños y Niñas','Adolescentes','Jovenes',
        'Adultos','Adultos Mayores'],
        datasets:[{
            label: 'Beneficiaros',
            data:[15.177,11.410,33.509,21.820,12.991],
            backgroundColor:[
                'rgb(0,128,0,0.7)',
                'rgb(255,153,0,0.7)',
                'rgb(220,57,28,0.7)',
                'rgb(70,132,238,0.7)',
                'rgb(119,47,60,0.7)',
            ]
        }]
      }
    }
  }


  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          var options={{
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            legend:{
                display:this.props.displayLegend,
              }
          }}
        />





      </div>
    )
  }
}

export default Chartone;