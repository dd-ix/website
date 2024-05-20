export type Series<T> = {
  start: string;
  end: string;
  data: T;
}

export enum TimeSelection {
  LastTwoDays = "two_days",
  LastWeek = "week",
  LastMonth = "month",
  LastThreeMonths = "three_months",
  LastYear = "year",
}
