import { Button, Select } from "antd"
import { FilterOutlined, UndoOutlined } from '@ant-design/icons';
import "./Sidebar.css"
import { useState } from "react";

const { Option } = Select;

const regularDimensions = ['dataSources', 'campaigns'];
const metrics = ['click', 'impressions'];

interface SidebarProps {
  handleChange: (metrics: Metrics) => void
}

export const Sidebar = ({ handleChange }: SidebarProps) => {
  const [dataSources, setDataSources] = useState<string[]>([]);
  const [campaigns, setCampaigns] = useState<string[]>([]);

  return (
    <aside className="sidebar">
      <h1>Filter dimension values</h1>

      <div className="sidebar__filters">
        <div className="sidebar__actions">
          <span>Datasources</span>
          <Button
            shape="circle"
            icon={<FilterOutlined />}
          />
          <Button
            shape="circle"
            icon={<UndoOutlined />}
            onClick={() => setDataSources([])}
          />
        </div>
        <div>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="All"
            onChange={value => setDataSources(value)}
            value={dataSources}
          >{regularDimensions.map((item, i) => <Option value={item} key={i}>{item}</Option>)}</Select>
        </div>

        <div className="sidebar__actions">
          <span>Campaigns</span>
          <Button
            shape="circle"
            icon={<FilterOutlined />}
          />
          <Button
            shape="circle"
            icon={<UndoOutlined />}
            onClick={() => setCampaigns([])}
          />
        </div>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="All"
          onChange={values => setCampaigns(values)}
          value={campaigns}
        >{metrics.map((item, i) => <Option value={item} key={i}>{item}</Option>)}</Select>
      </div>

      <Button
        onClick={() => handleChange({ dataSources, campaigns })}
      >Apply</Button>
    </aside>
  )
}
