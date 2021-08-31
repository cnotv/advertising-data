import { useEffect, useState } from 'react';
import { map, uniq, chain } from 'lodash';

import './App.css';
import { Chart } from './components/Chart';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { getData } from './helpers/api';

function App() {
  const [data, setData] = useState<RichChartData[]>([]);
  const [filteredData, setFilteredData] = useState<ChartData[]>([]);
  const [metrics, setMetrics] = useState<Metrics>({
    campaigns: [],
    dataSources: [],
  });

  const loadData = async () => {
    const newData = await getData();
    setData(newData);
    setMetrics(
      {
        campaigns: uniq(map(newData, 'campaign')),
        dataSources: uniq(map(newData, 'dataSource')),
      }
    )
    setFilteredData(newData);
  }

  const filterData = ({ dataSources, campaigns }: Metrics) => {
    dataSources = dataSources.length > 0 ? dataSources : metrics.dataSources;
    campaigns = campaigns.length > 0 ? campaigns : metrics.campaigns;
    const newData = chain(data)
      .filter(['dataSource', dataSources])
      .filter(['campaign', campaigns])
      .value() as ChartData[];

    setFilteredData(newData);
  }

  useEffect(() => {
    loadData()
  }, []);

  return (
    <div className="app">
      <Header />
      <Sidebar metrics={metrics} update={filterData} />

      <main className="app__content">
        <h1>Datasource "Doubleclick (dfa)" and "Meetrics"; All Campaigns</h1>
        <div className="app__chart">
          <Chart data={filteredData} />
        </div>
      </main>
    </div>
  );
}

export default App;
