import './App.css';
import { Chart } from './components/Chart';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  const data: Data[] = [
    { date: '01.01.2019', dataSource: 'Facebook Ads', campaign: '	Like Ads', clicks: 274, impressions: 1979 },
    { date: '01.01.2019', dataSource: 'Facebook Ads', campaign: '	Offer Campaigns - Conversions', clicks: 10245, impressions: 764627 },
    { date: '01.01.2019', dataSource: 'Google Adwords', campaign: 'B2B - Leads', clicks: 7, impressions: 444 },
    { date: '01.01.2019', dataSource: 'Google Adwords', campaign: 'GDN Prospecting - App - Prio 1 Offer', clicks: 16, impressions: 12535 },
    { date: '01.01.2019', dataSource: 'Google Adwords', campaign: 'GDN Prospecting - App - Prio 2 Offer', clicks: 93, impressions: 18866 },
    { date: '01.01.2019', dataSource: 'Google Adwords', campaign: 'GDN Prospecting - Desktop - India Offer', clicks: 72, impressions: 59558 },
    { date: '01.01.2019', dataSource: 'Google Adwords', campaign: 'GDN Prospecting - Desktop - Prio 1 Offer', clicks: 65, impressions: 34592 },
    { date: '01.01.2019', dataSource: 'Google Adwords', campaign: 'GDN Prospecting - Desktop - Prio 2 Offer', clicks: 26, impressions: 20901 },
    { date: '01.01.2019', dataSource: 'Google Adwords', campaign: 'GDN Prospecting - Desktop - Prio 3 Offer', clicks: 87, impressions: 47845 },
    { date: '01.01.2019', dataSource: 'Google Adwords', campaign: 'GDN Prospecting - Desktop - Prio 4 Offer', clicks: 263, impressions: 106641 },
    { date: '01.01.2019', dataSource: 'Google Adwords', campaign: 'GDN Prospecting - Interstitials - Prio 1 Offer', clicks: 19, impressions: 11483 },
    { date: '01.01.2019', dataSource: 'Google Adwords', campaign: 'GDN Prospecting - Interstitials - Prio 2 Offer', clicks: 90, impressions: 19809 },
  ];

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
