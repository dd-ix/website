export interface Stats {
  two_days: Series,
  seven_days: Series,
  month: Series,
}

export type Series = {
  start: string;
  end: string;
  data: [number, number][]
};
