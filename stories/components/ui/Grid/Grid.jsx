import React, { useState } from "react";
import "./_grid.scss";
import Switch from "../Switch/Switch";
import Checkbox from "../Checkbox/Checkbox";
import Textfield from "../Textfield/Textfield";
import Dropdown from "../dropdown/Dropdown";

const Grid = ({ columns, data = [], showFilters = true }) => {
  const [filters, setFilters] = useState({});
  const [selectedRows, setSelectedRows] = useState(new Set());

  // Auto-generate columns if not provided
  const autoColumns =
    data.length > 0
      ? Object.keys(data[0]).map((key) => ({ key, label: key }))
      : [];

  const resolvedColumns = columns && columns.length > 0 ? columns : autoColumns;

  const filteredData = data.filter((row) =>
    resolvedColumns.every((col) => {
      const filter = filters[col.key] || "";
      return typeof row[col.key] === "string"
        ? row[col.key].toLowerCase().includes(filter.toLowerCase())
        : String(row[col.key] || "").includes(filter);
    })
  );

  const allSelected =
    filteredData.length > 0 &&
    filteredData.every((row) => selectedRows.has(row.id));
  const someSelected =
    filteredData.some((row) => selectedRows.has(row.id)) && !allSelected;

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleRow = (rowId) => {
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(rowId)) {
        newSet.delete(rowId);
      } else {
        newSet.add(rowId);
      }
      return newSet;
    });
  };

  const toggleSelectAll = (val) => {
    if (val) {
      setSelectedRows(new Set(filteredData.map((row) => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleStatusToggle = (rowIdx) => {
    filteredData[rowIdx].status =
      filteredData[rowIdx].status === "Active" ? "Inactive" : "Active";
  };

  return (
    <section className="x-grid">
      <table className="x-grid__table">
        <thead>
          <tr className="x-grid__header-row">
            <th className="x-grid__cell">
              <Checkbox
                type="checkbox"
                checked={allSelected}
                indeterminate={someSelected}
                onChange={(e) => toggleSelectAll(e.target.checked)}
              />
            </th>
            {resolvedColumns.map((col, i) => (
              <th
                key={i}
                className="x-grid__cell x-grid__cell--header x-font-16"
              >
                {col.label || col.key}
              </th>
            ))}
          </tr>

          {showFilters && (
            <tr className="x-grid__filter-row">
              <th className="x-grid__cell"></th>
              {resolvedColumns.map((col, i) => (
                <th
                  key={`filter-${i}`}
                  className="x-grid__cell x-grid__cell--filter x-font-16"
                >
                  {col.filter === "select" && col.options ? (
                    <Dropdown
                      className="x-grid__cell--dropdown-filter"
                      label=""
                      status="default"
                      direction="column"
                      options={[
                        { value: "", label: "All" },
                        ...col.options.map((opt) =>
                          typeof opt === "string"
                            ? { value: opt, label: opt }
                            : opt
                        ),
                      ]}
                      selected={filters[col.key] || ""}
                      onChange={(val) => handleFilterChange(col.key, val)}
                    />
                  ) : (
                    <Textfield
                      className="x-grid__cell--textfield-filter"
                      status="default"
                      placeholder="Filter..."
                      value={filters[col.key] || ""}
                      onChange={(val) => handleFilterChange(col.key, val)}
                    />
                  )}
                </th>
              ))}
            </tr>
          )}
        </thead>

        <tbody>
          {filteredData.map((row, rowIdx) => (
            <tr key={row.id || rowIdx} className="x-grid__row x-font-16">
              <td className="x-grid__cell">
                <Checkbox
                  type="checkbox"
                  checked={selectedRows.has(row.id)}
                  onChange={() => toggleRow(row.id)}
                />
              </td>
              {resolvedColumns.map((col, colIdx) => (
                <td key={colIdx} className="x-grid__cell">
                  {col.render ? (
                    col.render(row[col.key], row, rowIdx)
                  ) : col.key === "status" ? (
                    <Switch
                      checked={row[col.key] === "Active"}
                      onChange={() => handleStatusToggle(rowIdx)}
                      label={false}
                    />
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Grid;
