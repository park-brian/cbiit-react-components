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
  
  ReactDOM.render(
    <div>
      <Button variant="light">light variant</Button>
      <Button variant="dark">dark variant</Button>
      <Button variant="primary">primary variant</Button>
      <Button variant="secondary">secondary variant</Button>
      <Button variant="success">success variant</Button>
      <Button variant="danger">danger variant</Button>
      <Button variant="warning">warning variant</Button>
      <Button variant="info">info variant</Button>
    </div>
    document.getElementById('body')
  );
`;


export function API() {
  return <div className="m-2">
    <h1>Getting Started</h1>
    <CodeRenderer code={VariantsCode} />

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
          <td>children</td>
          <td>Array&lt;React.Component&gt;</td>
          <td>Any children of the Button component will be rendered (transcluded) within the button element.</td>
        </tr>
        <tr>
          <td>active</td>
          <td>Boolean</td>
          <td>Specifies whether the button is active or not.
          Adds or removes the active class to the button element.
          </td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>Specifies whether the button is disabled or not.
          Sets the disabled attribute of the button element.
          </td>
        </tr>
        <tr>
          <td>size</td>
          <td>'lg', 'sm'</td>
          <td>Specifies the size of the button.
            Adds the specified {'btn-${size}'} class to the button element.
          </td>
        </tr>
        <tr>
          <td>type</td>
          <td>'button', 'reset', 'submit'</td>
          <td>Specifies the type of the button.
          Adds the specified type attribute to the button element.
          </td>
        </tr>
        <tr>
          <td>variant</td>
          <td>'light', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info'</td>
          <td>Specifies which semantic variant of the button to use.
            Adds the specified {'btn-${variant}'} class to the button element.
          </td>
        </tr>
        <tr>
          <td>onClick</td>
          <td>Function</td>
          <td>Specifies an onClick handler for the button.</td>
        </tr>
      </tbody>
    </table>
  </div>
}

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