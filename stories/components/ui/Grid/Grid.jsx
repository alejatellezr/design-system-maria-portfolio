import React, { useState, useEffect } from 'react';
import './_grid.scss';
import Switch from '../Switch/Switch'; // Assume reusable switch

const Grid = ({ columns = [], data = [], showFilters = true }) => {
  const [filters, setFilters] = useState({});
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (selectAll) {
      setSelectedRows(filteredData.map((_, i) => i));
    } else {
      setSelectedRows([]);
    }
  }, [selectAll]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredData = data.filter((row) =>
    columns.every((col) => {
      const filter = filters[col.key] || '';
      return typeof row[col.key] === 'string'
        ? row[col.key].toLowerCase().includes(filter.toLowerCase())
        : String(row[col.key] || '').includes(filter);
    })
  );

  const handleStatusToggle = (rowIdx) => {
    filteredData[rowIdx].status =
      filteredData[rowIdx].status === 'Active' ? 'Inactive' : 'Active';
  };

  return (
    <div className="x-grid">
      <table className="x-grid__table">
        <thead>
          <tr className="x-grid__header-row">
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={(e) => setSelectAll(e.target.checked)}
              />
            </th>
            {columns.map((col, i) => (
              <th key={i} className="x-grid__cell x-grid__cell--header">
                {col.label || col.key}
              </th>
            ))}
          </tr>
          {showFilters && (
            <tr className="x-grid__filter-row">
              <th></th>
              {columns.map((col, i) => (
                <th key={`filter-${i}`} className="x-grid__cell x-grid__cell--filter">
                  {col.filter === 'select' && col.options ? (
                    <select
                      onChange={(e) => handleFilterChange(col.key, e.target.value)}
                      value={filters[col.key] || ''}
                    >
                      <option value="">All</option>
                      {col.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      placeholder="Filter..."
                      value={filters[col.key] || ''}
                      onChange={(e) => handleFilterChange(col.key, e.target.value)}
                    />
                  )}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {filteredData.map((row, rowIdx) => (
            <tr key={rowIdx} className="x-grid__row">
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(rowIdx)}
                  onChange={() => toggleRow(rowIdx)}
                />
              </td>
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="x-grid__cell">
                  {col.key === 'status' ? (
                    <Switch
                      checked={row[col.key] === 'Active'}
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
    </div>
  );
};

export default Grid;
