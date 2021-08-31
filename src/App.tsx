import { useEffect, useState } from 'react';
import { map, uniq } from 'lodash';

import './App.css';
import { Chart } from './components/Chart';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { getData } from './helpers/api';

function App() {
  const [ data, setData ] = useState<Data[]>([]);
  const [ filteredData, setFilteredData ] = useState<Data[]>([]);
  const [metrics, setMetrics] = useState<Metrics>({
    campaigns: [],
    dataSources: [],
  });

  const loadData = async () => {
    const newData = await getData();
    setData(newData);
    setFilteredData(newData);
    setMetrics(
      {
        campaigns: uniq(map(newData, 'campaign')),
        dataSources: uniq(map(newData, 'dataSource')),
      }
    )
  }

  const filterData = ({ dataSources, campaigns }: Metrics) => {
    dataSources = dataSources.length > 0 ? dataSources : metrics.dataSources;
    campaigns = campaigns.length > 0 ? campaigns :  metrics.campaigns;

    setFilteredData(
      data.filter(d => {
        return dataSources.includes(d.dataSource) && campaigns.includes(d.campaign);
      })
    );
  }

  useEffect(() => {
    loadData()
  }, []);

  return (
    <div className="app">
      <Header />
      <Sidebar metrics={ metrics } update={filterData} />

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
