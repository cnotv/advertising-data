interface ChartData {
  date: string;
  clicks: number;
  impressions: number;
};

interface RichChartData extends ChartData {
  dataSource: string;
  campaign: string;
};
