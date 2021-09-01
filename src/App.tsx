import { useEffect, useState } from 'react';
import { map, uniq } from 'lodash';

import './App.css';
import { Chart } from './components/Chart';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { getData } from './helpers/api';
import { filterData } from './helpers/metrics';
import { Skeleton } from 'antd';

function App() {
  const [data, setData] = useState<RichChartData[]>([]);
  const [filteredData, setFilteredData] = useState<ChartData[]>([]);
  const [metrics, setMetrics] = useState<Metrics>({
    campaigns: [],
    dataSources: [],
  });

  const loadData = async () => {
    const newData = await getData();
    const newMetrics = {
      campaigns: uniq(map(newData, 'campaign')),
      dataSources: uniq(map(newData, 'dataSource')),
    }
    setData(newData);
    setMetrics(newMetrics);
    setFilteredData(filterData(newData, newMetrics, newMetrics));
  }

  useEffect(() => {
    loadData()
  }, []);

  return (
    <div className="app">
      <Header />
      <Sidebar metrics={metrics} update={val => setFilteredData(filterData(data, val, metrics))} />

      <main className="app__content">
        <h1>Datasource "Doubleclick (dfa)" and "Meetrics"; All Campaigns</h1>
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
