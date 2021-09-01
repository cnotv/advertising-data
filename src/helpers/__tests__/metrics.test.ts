// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { filterData } from "../metrics";

describe("FX: filterData", () => {
  it("should sum values for the same date", () => {
    const entry = {
      date: "123",
      clicks: 1,
      impressions: 1,
      dataSource: "test",
      campaign: "test",
    };
    const data = [entry, entry, entry];
    const metrics = {
      dataSources: ["test"],
      campaigns: ["test"],
    };
    const expectation = [{
      date: "123",
      clicks: 3,
      impressions: 3,
    }];

    const result = filterData(data, metrics, metrics);

    expect(result).toEqual(expectation);
  });

  it("should filter out based on metrics", () => {
    const data = [
      {
        date: "123",
        clicks: 1,
        impressions: 1,
        dataSource: "yes",
        campaign: "yes",
      },
      {
        date: "123",
        clicks: 1,
        impressions: 1,
        dataSource: "no",
        campaign: "no",
      }
    ];
    const metrics = {
      dataSources: ["yes"],
      campaigns: ["yes"],
    };
    const expectation = [{
      date: "123",
      clicks: 1,
      impressions: 1,
    }];

    const result = filterData(data, metrics, metrics);

    expect(result).toEqual(expectation);
  });
});
