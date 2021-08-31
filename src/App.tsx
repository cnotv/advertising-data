import { useEffect, useState } from 'react';
import { map, uniq } from 'lodash';

import './App.css';
import { Chart } from './components/Chart';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { getData } from './helpers/api';

function App() {
  const [ data, setData ] = useState<Data[]>([]);
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
  }

  useEffect(() => {
    loadData()
  }, []);

  return (
    <div className="app">
      <Header />
      <Sidebar metrics={ metrics } update={setMetrics} />

      <main className="app__content">
        <h1>Datasource "Doubleclick (dfa)" and "Meetrics"; All Campaigns</h1>
        <div className="app__chart">
          <Chart data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
