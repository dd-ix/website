import { Component, Inject, Input, LOCALE_ID, ElementRef, OnDestroy, afterNextRender, OnChanges, SimpleChanges, OnInit, Injector, runInInjectionContext } from '@angular/core';
import { Language } from "../../api/api.domain";
import { NgIf } from "@angular/common";
import type ApexCharts from "apexcharts";
import type { ApexOptions } from 'apexcharts';

const ENGLISH_TRANSLATIONS = {
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
  imports: [NgIf],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public xMin: string | undefined;

  @Input()
  public xMax: string | undefined;

  @Input()
  public series: ApexAxisChartSeries | undefined;

  @Input()
  public unit: string | undefined;

  @Input()
  public seriesName: string | undefined;

  private chart: ApexCharts | undefined;

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    private readonly injector: Injector,
    @Inject(LOCALE_ID) private locale: Language
  ) {
  }

  ngOnInit(): void {
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateChart();
  }

  private updateChart(): void {
    runInInjectionContext(this.injector, () => afterNextRender(() =>
      // @ts-expect-error
      import("apexcharts/dist/apexcharts.esm.js")
        .then(({ default: ApexCharts }) => {
          const options: ApexOptions = {
            chart: {
              foreColor: 'var(--f-color)',
              type: "area",
              height: 350,
              defaultLocale: this.locale,
              locales: this.locale === Language.GERMAN ? [GERMAN_TRANSLATION] : [ENGLISH_TRANSLATIONS],
              zoom: { enabled: false, },
              toolbar: { show: false },
              animations: { enabled: false },
              fontFamily: 'unset',
            },
            dataLabels: { enabled: false },
            grid: { borderColor: "#535A6C" },
            legend: { horizontalAlign: "left" },
            series: this.series,
            stroke: { width: 2 },
            xaxis: {
              type: "datetime",
              min: new Date(this.xMin!).getTime(),
              max: new Date(this.xMax!).getTime(),
              title: { text: "Time" },
            },
            yaxis: {
              labels: {
                formatter: this.yAxisTickFormatting(),
              },
              min: 0,
              title: { text: this.seriesName },
            },
            tooltip: {
              shared: true,
              hideEmptySeries: true,
              x: {
                format: "dd MMM yyyy HH:mm"
              },
            },
            colors: ['#209680', '#cf0'],
          };

          this.chart?.destroy();
          const chart = new ApexCharts(this.host.nativeElement, options);

          this.chart = chart as ApexCharts;
          this.chart.render();
        })));
  }

  public ngOnDestroy(): void {
    this.chart?.destroy();
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

