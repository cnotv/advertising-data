import { useEffect, useState } from 'react';
import { isEqual, map, uniq } from 'lodash';

import './App.css';
import { Chart } from './components/Chart';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { getData } from './helpers/api';
import { filterData, textGen } from './helpers/metrics';
import { Skeleton } from 'antd';

function App() {
  const [data, setData] = useState<RichChartData[]>([]);
  const [filteredData, setFilteredData] = useState<ChartData[]>([]);
  const [metrics, setMetrics] = useState<Metrics>({
    campaigns: [],
    dataSources: [],
  });
  const [title, setTitle] = useState<string>('');

  /**
   * Fetch data and parse information
   */
  const loadData = async () => {
    const newData = await getData();
    const newMetrics = {
      campaigns: uniq(map(newData, 'campaign')),
      dataSources: uniq(map(newData, 'dataSource')),
    }
    setData(newData);
    setMetrics(newMetrics);
    setFilteredData(filterData(newData, newMetrics, newMetrics));
    setTitle([textGen('Datasource'), textGen('Campaign')].filter(Boolean).join('; '));
  }

  /**
   * Update filtered data and title
   * @param newData 
   * @param newMetrics 
   * @param allMetrics 
   */
  const update = (newData: RichChartData[], newMetrics: Metrics, allMetrics: Metrics) => {
    setFilteredData(filterData(newData, newMetrics, allMetrics));
    const newSources = newMetrics.dataSources.length === 0 || isEqual(newMetrics.dataSources, allMetrics.dataSources)
      ? void 0
      : newMetrics.dataSources;
    const newCampaigns = newMetrics.campaigns.length === 0 || isEqual(newMetrics.campaigns, allMetrics.campaigns)
      ? void 0
      : newMetrics.campaigns;
    setTitle([textGen('Datasource', newSources), textGen('Campaign', newCampaigns)].filter(Boolean).join('; '));
  }

  useEffect(() => {
    loadData()
  }, []);

  return (
    <div className="app">
      <Header />
      <Sidebar metrics={metrics} update={newMetrics => update(data, newMetrics, metrics)} />

      <main className="app__content">
        <h1>{title}</h1>
        <div className="app__chart">
          {data.length > 0
            ? <Chart data={filteredData} />
            : <Skeleton active />
          }
        </div>
      </main>
    </div>
  );
}

export default App;
