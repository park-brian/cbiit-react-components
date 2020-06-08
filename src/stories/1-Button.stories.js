import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/button/button';
import { CodeRenderer } from '../components/code-renderer/code-renderer';
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

const VariantsCode = `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Button } from 'cbiit-react-components/button/button';
  
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

  ReactDOM.render(
    <div>
      {variants.map(variant => <Button className="m-2" variant={variant}>{variant}</Button>}
    </div>
    document.getElementById('body')
  );
`;

export function Variants() {
  return variants.map(variant => <div className="m-2">
      <Button className="mb-1" variant={variant} onClick={action(`Clicked ${variant}`)}>{variant}</Button>
      <CodeRenderer code={`<Button variant="${variant}">${variant}</Button>`} />
    </div>
  );
}

export function DisabledVariants() {
  return variants.map(variant => <div className="m-2">
      <Button className="mb-1" variant={variant} onClick={action(`Clicked ${variant}`)} disabled>{variant}</Button>
      <CodeRenderer code={`<Button variant="${variant}" disabled>${variant}</Button>`} />
    </div>
  );
}