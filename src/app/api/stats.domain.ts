export type Series = {
  start: string;
  end: string;
  data: [number, number][]
}

export enum TimeSelection {
  LastTwoDays = "two_days",
  LastWeek = "week",
  LastMonth = "month",
  LastThreeMonths = "three_months",
  LastYear = "year",
}
