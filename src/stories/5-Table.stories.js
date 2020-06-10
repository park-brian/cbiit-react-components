import React, { useState } from 'react';
import {
  Table,
  paginationText,
  paginationSizeSelector,
  paginationButton,
} from '../components/table/table';
import { CodeRenderer } from '../components/code-renderer/code-renderer';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';
import '../components/index.scss';

export default {
  title: 'Table',
  component: Table,
};

const columns = [
  { dataField: 'id', text: 'ID', sort: true },
  { dataField: 'a', text: 'Column A', sort: true },
  { dataField: 'b', text: 'Column B', sort: true },
  { dataField: 'c', text: 'Column C', sort: true },
  { dataField: 'd', text: 'Column D', sort: true },
];

const data = getData(columns.map(c => c.dataField));

function getData(columns) {
  let numRows = 100;
  let data = [];

  for (let i = 1; i <= numRows; i++) {
    let row = columns.reduce((acc, column) => ({
      [column]: Math.floor(Math.random() * 100),
      ...acc
    }), { id: i });
    data.push(row);
  }

  return data;
}

const ExampleCode = `
function Example() {
  const columns = [
    {dataField: 'id', text: 'ID', sort: true},
    {dataField: 'a', text: 'Column A', sort: true},
    {dataField: 'b', text: 'Column B', sort: true},
    {dataField: 'c', text: 'Column C', sort: true},
    {dataField: 'd', text: 'Column D', sort: true},
  ];
  
  const data = getData(columns.map(c => c.dataField));
  
  function getData(columns) {
    let numRows = 100;
    let data = [];
  
    for (let i = 1; i <= numRows; i ++) {
      let row = columns.reduce((acc, column) => ({
        [column]: Math.floor(Math.random() * 100),
        ...acc
      }), {id: i});
      data.push(row);
    }
  
    return data;
  }
  return <Table 
    keyField="id" 
    columns={columns} 
    data={data} 
  />
}`;


const PaginationCode = `
function Example() {
  const columns = [
    {dataField: 'id', text: 'ID', sort: true},
    {dataField: 'a', text: 'Column A', sort: true},
    {dataField: 'b', text: 'Column B', sort: true},
    {dataField: 'c', text: 'Column C', sort: true},
    {dataField: 'd', text: 'Column D', sort: true},
  ];
  
  const data = getData(columns.map(c => c.dataField));
  
  function getData(columns) {
    let numRows = 100;
    let data = [];
  
    for (let i = 1; i <= numRows; i ++) {
      let row = columns.reduce((acc, column) => ({
        [column]: Math.floor(Math.random() * 100),
        ...acc
      }), {id: i});
      data.push(row);
    }
  
    return data;
  }
  return <Table 
    keyField="id" 
    columns={columns} 
    data={data} 
    filter={filterFactory()}
    pagination={paginationFactory({
      showTotal: true,
      sizePerPageList: [10, 50, 100],
      paginationTotalRenderer: paginationText('record', 'records'),
      sizePerPageRenderer: paginationSizeSelector,
      pageButtonRenderer: paginationButton
    })}    
  />
}`;

const APICode = `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Table } from 'cbiit-react-components/table/table';
  
  function Example() {
    const columns = [
      {dataField: 'id', text: 'ID', sort: true},
      {dataField: 'a', text: 'Column A', sort: true},
      {dataField: 'b', text: 'Column B', sort: true},
      {dataField: 'c', text: 'Column C', sort: true},
      {dataField: 'd', text: 'Column D', sort: true},
    ];
    
    const data = getData(columns.map(c => c.dataField));
    
    function getData(columns) {
      let numRows = 100;
      let data = [];
    
      for (let i = 1; i <= numRows; i ++) {
        let row = columns.reduce((acc, column) => ({
          [column]: Math.floor(Math.random() * 100),
          ...acc
        }), {id: i});
        data.push(row);
      }
    
      return data;
    }
    return <Table 
      keyField="id" 
      columns={columns} 
      data={data} 
    />
  }

  ReactDOM.render(
    <Example />
    document.getElementById('body')
  );
`;

export function API() {
  return <div className="m-2">
    <h1>Getting Started</h1>
    <p>The Table component is a thin wrapper over the react-bootstrap-table2 library.
      Any properties used are identical to those found in the <a href="https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/table-props.html">react-bootstrap-table2 api</a>, and a full listing is not given below.
    </p>
    <CodeRenderer code={APICode} />

    <h1>Properties</h1>
    <table className="table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>keyField</td>
          <td>String</td>
          <td>Specifies the column key which uniquely identifies each row.</td>
        </tr>
        <tr>
          <td>columns</td>
          <td>{'Array<{dataField: String, text: String, sort: Boolean}>'}</td>
          <td>Specifies the columns which will be rendered within this table.</td>
        </tr>
        <tr>
          <td>data</td>
          <td>{'Array<Object>'}</td>
          <td>Specifies the rows which will be rendered within this table. Each row is an object with properties defined by each column's dataField. </td>
        </tr>
      </tbody>
    </table>
  </div>
}

export function Example() {
  return <div className="m-2">
    <Table
      keyField="id"
      columns={columns}
      data={data}
    />
    <CodeRenderer code={ExampleCode} />
  </div>
}

export function Pagination() {

  return <div className="m-2">
    <Table
      keyField="id"
      columns={columns}
      data={data}
      filter={filterFactory()}
      pagination={paginationFactory({
        showTotal: true,
        sizePerPageList: [10, 50, 100],
        paginationTotalRenderer: paginationText('record', 'records'),
        sizePerPageRenderer: paginationSizeSelector,
        pageButtonRenderer: paginationButton
      })}
    />
    <CodeRenderer code={PaginationCode} />
  </div>
    
  return 
}

