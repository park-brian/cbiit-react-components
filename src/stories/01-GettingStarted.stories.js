import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/button/button';
import { CodeRenderer } from '../components/code-renderer/code-renderer';
import '../components/index.scss';

export default {
  title: 'Getting Started',
  component: () => <h1>GettingStarted</h1>,
};

export function Introduction() {
  return <div className="m-2">
    <h1>Introduction</h1>
    <hr />

    <section className="mb-4">
      This component library implements complex controls and common UI elements on top of a themed version of react-bootstrap and react-bootstrap-table2.
    </section>

    <section className="mb-4">
      <h2>Installation</h2>
      <CodeRenderer code="npm install --save @cbiit/react-components" />
    </section>

    <section className="mb-4">
      <h2>Getting Started</h2>
      <p>Below is an example of how to get started using the components in this library.</p>
      <CodeRenderer removeIndentation code={`
        import React from 'react';
        import ReactDOM from 'react-dom';

        // Import CSS at the root level
        import '@cbiit/react-components/components/index.scss'; 

        // For example, import the Button component
        import { Button } from '@cbiit/react-components/components/button/button';

        // Render the button under the document's #root element
        ReactDOM.render(
          <Button>Sample Button</Button>, 
          document.getElementById('root')
        );
      `} />
    </section>
  </div>
}
