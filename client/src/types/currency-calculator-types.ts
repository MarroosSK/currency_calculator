export interface CurrencyI {
  currency: string;
  rate: string;
}

export interface CurrencyApiDataI {
  Cube: CurrencyI[];
  time: string;
}
