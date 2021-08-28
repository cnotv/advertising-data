import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <h1>Adverity Advertising Data ETL-V Challenge</h1>
      <div className="header__legend">
        <ul>
          <li>Select zero to N <span>Datasources</span></li>
          <li>Select zero to N <span>Campaigns</span></li>
        </ul>
        <p><small>(Where zero means "All")</small></p>
        <p>Hitting "Apply", filters the chart to show a timeseries for both Clicks</p>
      </div>
    </header>
  )
}