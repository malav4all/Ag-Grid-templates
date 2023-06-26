import logo from './logo.svg';
import './App.css';
import {createRoot} from 'react-dom/client';
import {AgGridReact} from 'ag-grid-react';
import React, {useState, useMemo} from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function App() {
  const [rowData] = useState([
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxster', price: 72000},
  ]);

  const [columnDefs] = useState([
    {field: 'make'},
    {field: 'model'},
    {field: 'price'},
  ]);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      filter: true,
      resizable: true,
    };
  }, []);

  return (
    <div className="ag-theme-alpine" style={{width: 500, height: 500}}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        animateRows={true}
        rowSelection="multiple"
        defaultColDef={defaultColDef}
      ></AgGridReact>
    </div>
  );
}

export default App;
