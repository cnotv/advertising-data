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
    chartData.reduce(
      (acc, { date, clicks, impressions, dataSource, campaign }) => {
        const isFiltered =
          dataSources.includes(dataSource) && campaigns.includes(campaign);
        if (isFiltered) {
          if (acc[date]) {
            acc[date] = {
              date: date,
              clicks: acc[date].clicks + clicks,
              impressions: acc[date].impressions + impressions,
            };
          } else {
            acc[date] = {
              date,
              clicks,
              impressions,
            };
          }
        }
        return acc;
      },
      {} as Record<string, ChartData>
    )
  );
};

/**
 * Generate text based on length and given term
 * @param list
 * @param term
 */
export const textGen = (term: string, list?: string[]) => {
  if (!list) {
    return `All ${term}s`;
  }

  switch (list.length) {
    case 0:
      return ``;
    case 1:
      return `${term} "${list[0]}"`;
    case 2:
      return `${term} "${list.join('" and "')}"`;
    default:
      return `${term} "${list[0]}" and ${list.length - 1} more`;
  }
};
