import './App.css';
import { Chart } from './components/Chart';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  const chart = [
    {
      clicks: 200,
      impressions: 60000
    },
  ];

  return (
    <div className="app">
      <Header />
      <Sidebar />

      <main className="app__content">
        <h1>Datasource "Doubleclick (dfa)" and "Meetrics"; All Campaigns</h1>
        <Chart />
      </main>
    </div>
  );
}

export default App;
