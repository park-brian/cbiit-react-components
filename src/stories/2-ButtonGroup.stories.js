import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonGroup } from '../components/button-group/button-group';
import { CodeRenderer } from '../components/code-renderer/code-renderer';
import '../components/index.scss';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
};

const variants = [
  'light',
  'dark',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
];

const ExampleCode = `
let options = [
    {
    "label": "Option A",
    "value": "a"
    },
    {
    "label": "Option B",
    "value": "b"
    },
    {
    "label": "Option C",
    "value": "c"
    }
];
let value = "a";
let handleChange = value => console.log(value);

<ButtonGroup 
    options={options} 
    value={value} 
    onChange={handleChange} />
`;


const CustomClassesCode = `
let options = [
    {
    "label": "Option A",
    "value": "a"
    },
    {
    "label": "Option B",
    "value": "b"
    },
    {
    "label": "Option C",
    "value": "c"
    }
];
let value = "a";
let handleChange = value => console.log(value);

<ButtonGroup 
    activeClass="btn-success active"
    inactiveClass="btn-dark"
    options={options} 
    value={value} 
    onChange={handleChange} />
`;


const DisabledCode = `
let options = [
    {
    "label": "Option A",
    "value": "a"
    },
    {
    "label": "Option B",
    "value": "b"
    },
    {
    "label": "Option C",
    "value": "c"
    }
];
let value = "a";

<ButtonGroup 
    disabled
    options={options} 
    value={value} />
`


export function Example() {
    let options = ['a', 'b', 'c'].map(o => ({label: `Option ${o.toUpperCase()}`, value: o}));
    let value = 'a';
    let onChange = value => action(value);
    return <div className="m-2">
        <ButtonGroup options={options} value={value} onChange={v => action(`Selected ${v}`)()} />
        <CodeRenderer code={ExampleCode}></CodeRenderer>
    </div>
}

export function CustomClasses() {
    let options = ['a', 'b', 'c'].map(o => ({label: `Option ${o.toUpperCase()}`, value: o}));
    let value = 'a';
    let onChange = value => action(value);
    return <div className="m-2">
        <ButtonGroup 
            activeClass="btn-success active"
            inactiveClass="btn-dark"
            options={options} 
            value={value} 
            onChange={v => action(`Selected ${v}`)()} 
        />
        <CodeRenderer code={CustomClassesCode}></CodeRenderer>

    </div>
}

export function Disabled() {
    let options = ['a', 'b', 'c'].map(o => ({label: `Option ${o.toUpperCase()}`, value: o}));
    let value = 'a';
    let onChange = value => action(value);
    return <div className="m-2">
        <ButtonGroup disabled options={options} value={value} onChange={v => action(`Selected ${v}`)()} />
        <CodeRenderer code={DisabledCode}></CodeRenderer>
    </div>
}