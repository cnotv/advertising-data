import './App.css';

function App() {
  const chart = [
    {
      clicks: 200,
      impressions: 60000
    },
  ];

  return (
    <div className="app">
      <header className="app__header">
        <h1>Adverity Advertising Data ETL-V Challenge</h1>
        <div className="app__header__legend">
          <ul>
            <li>Select zero to N <span>Datasources</span></li>
            <li>Select zero to N <span>Campaigns</span></li>
          </ul>
          <p><small>(Where zero means "All")</small></p>
          <p>Hitting "Apply", filters the chart to show a timeseries for both Clicks</p>
        </div>
      </header>

      <aside className="app__sidebar">
        <h1>Filter dimension values</h1>

        <div className="actions">
          <span>Datasource</span>
          <i>toggle</i>
          <button
            disabled
            type="button"
          >Reset</button>
        </div>
        <div>
          <p>Doubleclick (dfa)</p>
          <p>Meetrics</p>
          <button type="button">Apply</button>
        </div>

        <div className="actions">
          <span>Campaign</span>
          <i>toggle</i>
          <button
            disabled
            type="button"
          >Reset</button>
        </div>
        <div>
          <p>All</p>
          <button type="button">Apply</button>
        </div>
      </aside>

      <main className="app__content">
        <h1>Datasource "Doubleclick (dfa)" and "Meetrics"; All Campaigns</h1>
        <div>Chart</div>
      </main>
    </div>
  );
}

export default App;
