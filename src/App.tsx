import './App.css';

function App() {
  const chart = [
    {
      clicks: 200,
      impressions: 60000
    },
  ];

  return (
    <div>
      <header>
        <ul>
          <li>Select zero to N <span>Datasources</span></li>
          <li>Select zero to N <span>Campaigns</span></li>
        </ul>
        <p><small>(Where zero means "All")</small></p>
        <p>Hitting "Apply", filters the chart to show a timeseries for both Clicks</p>
      </header>

      <main>
        <aside>
          <h1>Filter dimension values</h1>
          
          <div>
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

          <div>
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

        <section>
          <h1>Datasource "Doubleclick (dfa)" and "Meetrics"; All Campaigns</h1>
          <div>Chart</div>
        </section>
      </main>
    </div>
  );
}

export default App;
