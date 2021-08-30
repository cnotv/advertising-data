import { Button, Select } from "antd"
import { FilterOutlined, UndoOutlined } from '@ant-design/icons';
import "./Sidebar.css"

const regularDimensions = ['dataSource', 'campaign'];
const metrics = ['click', 'impressions'];

interface SidebarProps {
  handleChange: () => void
}

export const Sidebar = ({ handleChange }: SidebarProps) => {
  return (
    <aside className="sidebar">
      <h1>Filter dimension values</h1>

      <div className="sidebar__actions">
        <span>Datasource</span>
        <Button shape="circle" icon={<FilterOutlined />} />
        <Button shape="circle" icon={<UndoOutlined />} />
      </div>
      <div>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="All"
          onChange={handleChange}
        >{regularDimensions}</Select>
        <Button>Apply</Button>
      </div>

      <div className="sidebar__actions">
        <span>Campaign</span>
        <Button shape="circle" icon={<FilterOutlined />} />
        <Button shape="circle" icon={<UndoOutlined />} />
      </div>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="All"
        onChange={handleChange}
      >{metrics}</Select>
    </aside>
  )
}