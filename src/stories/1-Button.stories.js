import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/button/button';
import '../components/index.scss';

export default {
  title: 'Button',
  component: Button,
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

export function Variants() {
  return variants.map(variant => 
    <Button className="m-2" variant={variant} onClick={action(`Clicked ${variant}`)}>{variant}</Button>
  );
}

export function DisabledVariants() {
  return variants.map(variant => 
    <Button className="m-2" variant={variant} disabled onClick={action(`Clicked ${variant}`)}>{variant}</Button>
  );
}