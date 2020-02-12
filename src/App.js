import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options : {
        chart: {
          height: 300,
          width: "100%",
          type: "area",
          zoom: { type: "x", enabled: true },
          toolbar: { autoSelected: "zoom" },
          animations: {
            initialAnimation: {
              enabled: false
            }
          }
        },
        
        xaxis: {
          type: "datetime",
          labels: {
            datetimeFormatter: {
              year: 'yy',
              month: 'MM yyyy',
              day: 'dd/MM',
              hour: 'HH:mm'
            }
          }
        },
        yaxis: [
          {
            show: true,
            showAlways: false,
            opposite: false,
            reversed: false,
            logarithmic: false,
            forceNiceScale: false,
            floating: false,
            min: 0,
            max: 100,
            seriesName: 'abc',
            labels: {
              show: true,
              minWidth: 0,
              maxWidth: 160,
              offsetX: 0,
              offsetY: 0,
              rotate: 0,
              padding: 20,
              style: { colors: [], fontSize: "11px", cssClass: "" }
            },
            axisBorder: { show: false, color: "#78909C", offsetX: 0, offsetY: 0 },
            axisTicks: {
              show: false,
              color: "#78909C",
              width: 6,
              offsetX: 0,
              offsetY: 0
            },
            title: {
              text: "Programming",
              rotate: 90,
              offsetY: 0,
              offsetX: 0,
              style: { fontSize: "11px", cssClass: "" }
            },
            tooltip: { enabled: false, offsetX: 0 },
            crosshairs: {
              show: true,
              position: "front",
              stroke: { color: "#b6b6b6", width: 1, dashArray: 0 }
            }
          }
        ],
        title: { text: "Javascript ", align: "left" }
      },
      series: [
        {
          name: "Javascript Basic",
          data: [
            {
              x: "05-10-2019 GMT",
              y: 34
            },
            {
              x: "05-11-2019 GMT",
              y: 43
            },
            {
              x: "05-12-2019 GMT",
              y: 31
            },
            {
              x: "05-13-2019 GMT",
              y: 90
            },
            {
              x: "05-14-2019 GMT",
              y: 33
            },
            {
              x: "05-15-2019 GMT",
              y: 52
            }
          ]
        },
        {
          name: "Javascript Advanced",
          data: [

            { x: "2019-05-10 05:00:01", y: "92" },
            { x: "2019-05-11 06:00:03", y: "30" },
            { x: "2019-05-11 07:00:02", y: "50" },
            { x: "2019-05-12 10:00:02", y: "100" },
            { x: "2019-05-14 09:00:03", y: "80" }
          ]
        },
      ]
    }

  }

    render() {
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="area"
                width="500"
              />
            </div>
          </div>
        </div>
      );
    }
  }

  export default App;
