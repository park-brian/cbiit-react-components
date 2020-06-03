import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonGroup } from '../components/button-group/button-group';
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

export function Example() {
    let options = ['a', 'b', 'c'].map(o => ({label: `Option ${o.toUpperCase()}`, value: o}));
    let value = 'a';
    let onChange = value => action(value);
    return <div className="m-2">
        <ButtonGroup options={options} value={value} onChange={v => action(`Selected ${v}`)()} />
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
    </div>
}

export function Disabled() {
    let options = ['a', 'b', 'c'].map(o => ({label: `Option ${o.toUpperCase()}`, value: o}));
    let value = 'a';
    let onChange = value => action(value);
    return <div className="m-2">
        <ButtonGroup disabled options={options} value={value} onChange={v => action(`Selected ${v}`)()} />
    </div>
}