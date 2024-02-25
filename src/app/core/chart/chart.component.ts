import {Component, Inject, Input, LOCALE_ID} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule
} from "ng-apexcharts-lazy";
import {Language} from "../../api/api.domain";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgApexchartsModule, NgIf],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {

  @Input()
  public xMin: string | undefined;

  @Input()
  public xMax: string | undefined;

  @Input()
  public series: ApexAxisChartSeries | undefined;

  protected chart: ApexChart = {
    foreColor: 'var(--f-color)',
    type: "area",
    height: 350,
    defaultLocale: this.locale,
    zoom: {enabled: false,},
    toolbar: {show: false},
    animations: {enabled: false},
    fontFamily: 'unset',
  };

  protected dataLabels: ApexDataLabels = {
    enabled: false
  };

  protected stroke: ApexStroke = {
    width: 2,
  }

  protected yaxis: ApexYAxis = {
    labels: {
      formatter: this.yAxisTickFormatting,
    },
    min: 0,
  };

  protected legend: ApexLegend = {
    horizontalAlign: "left"
  }

  protected grid: ApexGrid = {
    borderColor: "#535A6C",
  }

  constructor(
    @Inject(LOCALE_ID) private locale: Language
  ) {
  }

  protected wrapXAxis(min: string, max: string): ApexXAxis {
    return {
      type: "datetime",
      min: new Date(min).getTime(),
      max: new Date(max).getTime(),
    };
  }

  protected yAxisTickFormatting(bits: number): string {
    if (!Number.isFinite(bits) || bits < 1) {
      return '0 b/s';
    }

    const k = 1000;
    const sizes = ['b/s', 'Kb/s', 'Mb/s', 'Gb/s', 'Tb/s', 'Pb/s', 'Eb/s', 'Zb/s', 'Yb/s']

    const i = Math.floor(Math.log(bits) / Math.log(k))

    return `${parseFloat((bits / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
  }
}

