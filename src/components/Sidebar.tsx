import "./Sidebar.css"

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1>Filter dimension values</h1>

      <div className="sidebar__actions">
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

      <div className="sidebar__actions">
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
  )
}