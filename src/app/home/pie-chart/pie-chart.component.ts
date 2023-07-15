import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent  {
  @ViewChild("chart") chart!: ChartComponent;
  @ViewChild("chachart-khachhangrt") chartkhachhang!: ChartComponent; 
   public chartKhachHang:Partial<ChartOptions>
   public chartOptions:Partial<ChartOptions>
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Dự toán",
          data: [0.6, 1, 0.6, 0.5, 0.35, 0.69]
        },
        {
          name: "Đơn hàng",
          data: [0.6, 1, 0.6, 0.5, 0.35, 0.69]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
         
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
    this.chartKhachHang = {
      series: [
        {
          name: "Hợp đồng",
          data: [0.6, 1, 0.2, 0.5, 0.3, 0.9]
        },
        {
          name: "Đơn hàng",
          data: [0.6, 6, 0.6, 0.5, 0.35, 0.69]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
         
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }

   
  
}
