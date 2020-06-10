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

const APICode = `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { ButtonGroup } from 'cbiit-react-components/button-group/button-group';
  
  function ButtonGroupExample() {
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
    
    return <ButtonGroup 
        options={options} 
        value={value} 
        onChange={handleChange} />
  }

  ReactDOM.render(
    <ButtonGroupExample />
    document.getElementById('body')
  );
`;

export function API() {
    return <div className="m-2">
        <h1>Getting Started</h1>
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
                    <td>options</td>
                    <td>{'Array<{label: String, value: any}>'}</td>
                    <td>Specifies the options to be presented. Each options should have a label and value.</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>any</td>
                    <td>Specifies the current selected value of the control. This value should fulfill a triple-equality check with the value of a specified object. 
                        For example, all primitive values will work, but object values need to have the same reference that was used to define the options.
                    </td>
                </tr>

                <tr>
                    <td>onChange</td>
                    <td>Function</td>
                    <td>Specifies an onChange handler for the button. The new value of the ButtonGroup is passed in as the first parameter.</td>
                </tr>
            </tbody>
        </table>
    </div>
}


export function Example() {
    let options = ['a', 'b', 'c'].map(o => ({ label: `Option ${o.toUpperCase()}`, value: o }));
    let value = 'a';
    let onChange = value => action(value);
    return <div className="m-2">
        <ButtonGroup options={options} value={value} onChange={v => action(`Selected ${v}`)()} />
        <CodeRenderer code={ExampleCode}></CodeRenderer>
    </div>
}

export function CustomClasses() {
    let options = ['a', 'b', 'c'].map(o => ({ label: `Option ${o.toUpperCase()}`, value: o }));
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
    let options = ['a', 'b', 'c'].map(o => ({ label: `Option ${o.toUpperCase()}`, value: o }));
    let value = 'a';
    let onChange = value => action(value);
    return <div className="m-2">
        <ButtonGroup disabled options={options} value={value} onChange={v => action(`Selected ${v}`)()} />
        <CodeRenderer code={DisabledCode}></CodeRenderer>
    </div>
}