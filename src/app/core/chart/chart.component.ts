import { Component, Inject, Input, LOCALE_ID } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexLegend,
  ApexLocale,
  ApexStroke,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule
} from "ng-apexcharts-lazy";
import { Language } from "../../api/api.domain";
import { NgIf } from "@angular/common";

const ENGLISH_TRANSLATIONS: ApexLocale = {
  name: Language.ENGLISH,
  options: {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    toolbar: {
      download: 'Download SVG',
      selection: 'Selection',
      selectionZoom: 'Selection Zoom',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      pan: 'Panning',
      reset: 'Reset Zoom',
    }
  }
};

const GERMAN_TRANSLATION: ApexLocale = {
  name: Language.GERMAN,
  options: {
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    shortMonths: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    shortDays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    toolbar: {
      download: 'SVG herunterladen',
      selection: 'Auswahl',
      selectionZoom: 'Auswahl Zoom',
      zoomIn: 'Hineinzoomen',
      zoomOut: 'Herauszoomen',
      pan: 'Verschieben',
      reset: 'Zoom zurücksetzen',
    }
  }
};

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

  @Input()
  public unit: string | undefined;

  protected chart: ApexChart = {
    foreColor: 'var(--f-color)',
    type: "area",
    height: 350,
    defaultLocale: this.locale,
    locales: this.locale === Language.GERMAN ? [GERMAN_TRANSLATION] : [ENGLISH_TRANSLATIONS],
    zoom: { enabled: false, },
    toolbar: { show: false },
    animations: { enabled: false },
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
      formatter: this.yAxisTickFormatting(),
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

  private yAxisTickFormatting(): (bits: number) => string {
    return (bits: number) => {
      if (!Number.isFinite(bits)) {
        return `0 ${this.unit}/s`;
      }

      const k = 1000;
      const sizes = [
        this.unit + '/s',
        `K${this.unit}/s`,
        `M${this.unit}/s`,
        `G${this.unit}/s`,
        `T${this.unit}/s`,
        `P${this.unit}/s`,
        `E${this.unit}/s`,
        `Z${this.unit}/s`,
        `Y${this.unit}/s`
      ];

      const i = Math.max(0, Math.floor(Math.log(bits) / Math.log(k)));

      return `${parseFloat((bits / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
    };
  }
}

