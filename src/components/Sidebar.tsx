import { Button, Select } from "antd"
import { FilterOutlined, UndoOutlined } from '@ant-design/icons';
import "./Sidebar.css"
import { useState } from "react";

const { Option } = Select;

interface SidebarProps {
  update: (metrics: Metrics) => void
  metrics: Metrics
}

export const Sidebar = ({ update, metrics }: SidebarProps) => {
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
          >{metrics.dataSources.map((item, i) => <Option value={item} key={i}>{item}</Option>)}</Select>
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
        >{metrics.campaigns.map((item, i) => <Option value={item} key={i}>{item}</Option>)}</Select>
      </div>

      <Button
        onClick={() => update({ dataSources, campaigns })}
      >Apply</Button>
    </aside>
  )
}
