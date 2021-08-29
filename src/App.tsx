import { useEffect, useState } from 'react';
import './App.css';
import { Chart } from './components/Chart';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { getData } from './helpers/api';

function App() {
  const [ data, setData ] = useState<Data[]>([]);

  useEffect(() => {
    getData().then(chartData => setData(chartData));
  }, []);

  return (
    <div className="app">
      <Header />
      <Sidebar />

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
