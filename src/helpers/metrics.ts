/**
 * Filter data for provided metrics
 * @param chartData 
 * @param param1 
 * @param metrics 
 * @returns 
 */
export const filterData = (
  chartData: RichChartData[],
  { dataSources, campaigns }: Metrics,
  metrics: Metrics
): ChartData[] => {
  dataSources = dataSources.length > 0 ? dataSources : metrics.dataSources;
  campaigns = campaigns.length > 0 ? campaigns : metrics.campaigns;

  return Object.values(
    chartData.reduce((acc, curr) => {
      const isFiltered =
        dataSources.includes(curr.dataSource) &&
        campaigns.includes(curr.campaign);
      if (isFiltered) {
        if (acc[curr.date]) {
          acc[curr.date] = {
            date: curr.date,
            clicks: acc[curr.date].clicks + curr.clicks,
            impressions: acc[curr.date].impressions + curr.impressions,
          };
        } else {
          acc[curr.date] = curr;
        }
      }
      return acc;
    }, {} as Record<string, ChartData>)
  );
};
