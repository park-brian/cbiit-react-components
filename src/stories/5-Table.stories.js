import React, { useState } from 'react';
import {
  Table,
  paginationText,
  paginationSizeSelector,
  paginationButton,
} from '../components/table/table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';
import '../components/index.scss';

export default {
  title: 'Table',
  component: Table,
};

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

export function Example() {
  return <Table 
    keyField="id" 
    columns={columns} 
    data={data} 
  />
}

export function Pagination() {
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
}

