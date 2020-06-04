import React, { useState } from 'react';
import { TreeSelect } from '../components/tree-select/tree-select';
import '../components/index.scss';

export default {
  title: 'TreeSelect',
  component: TreeSelect,
};

const tree = generateTree();
const data = {
  tree,
  categories: tree, 
  flat: flattenTree(tree),
};

function generateTree() {
  let tree = [];
  let toCharCode = char => char.charCodeAt(0);
  let fromCharCode = code => String.fromCharCode(code);

  for (let i = toCharCode('A'); i <= toCharCode('F'); i ++) {
    let char = fromCharCode(i);
    let node = {
      id: char, 
      title: char,
      value: char,
      children: []
    }
    for (let j = 1; j < 10; j ++) {
      node.children.push({
        id: char + j, 
        title: char + j,
        value: char + j,
        children: []
      })
    }

    tree.push(node);
  }

  return tree;
}

function flattenTree(nodes) {
  let children = [];
  nodes.forEach(addChildren);
  function addChildren(node) {
    children.push(node);
    if (node.children)
      node.children.forEach(addChildren);
  }
  return children;
}


export function Example() {
  const [value, setValue] = useState([]);
  return <div className="m-2" style={{width: '400px'}}>
    <TreeSelect
      data={data}
      value={value}
      onChange={value => setValue(value)}
    />
    <pre>{JSON.stringify(value, null, 2)}</pre>
  </div>
  
}

export function FixedHeight() {
  const [value, setValue] = useState([]);
  return <div className="m-2" style={{width: '400px'}}>
    <TreeSelect
      style={{height: '300px', overflow: 'auto'}}
      data={data}
      value={value}
      onChange={value => setValue(value)}
    />
    <pre>{JSON.stringify(value, null, 2)}</pre>
  </div>
  
}
