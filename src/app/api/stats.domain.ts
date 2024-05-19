export type Series = {
  start: string;
  end: string;
  data: [number, number][]
}

export enum TimeSelection {
  LastTwoDays = "last_two_days",
  LastWeek = "last_week",
  LastMonth = "last_month",
  LastThreeMonths = "last_three_months",
  LastYear = "last_year",
}
