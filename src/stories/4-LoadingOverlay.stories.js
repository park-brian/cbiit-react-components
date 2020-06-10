import React, { useState } from 'react';
import { Button } from '../components/button/button';
import { LoadingOverlay } from '../components/loading-overlay/loading-overlay';
import '../components/index.scss';
import { CodeRenderer } from '../components/code-renderer/code-renderer';

export default {
  title: 'LoadingOverlay',
  component: LoadingOverlay,
};

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget purus sollicitudin, viverra ipsum vel, imperdiet ipsum. Phasellus massa enim, ornare et blandit et, hendrerit imperdiet nibh. Duis metus lectus, pulvinar ac lobortis non, porta nec tortor. Maecenas porta felis at finibus placerat. Mauris euismod faucibus risus sit amet luctus. Nulla sit amet dignissim diam, at dictum tellus. Fusce maximus eget est id auctor. In vitae porta quam, vel interdum libero. Proin tempor quam varius magna lacinia, ac dignissim eros porttitor. Donec mattis efficitur cursus. Donec non interdum nisi. Praesent dictum eu dolor quis consectetur. Fusce bibendum lacinia odio quis tincidunt. Fusce finibus eleifend risus et fringilla.";

const ExampleCode = `
function Example() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }

  return <div className="container border">
    <LoadingOverlay active={loading} />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <Button variant="light" onClick={handleClick}>Show Loading Overlay</Button>
  </div>
}`.trimLeft();


const CustomCode = `
function Example() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }

  return <div className="container border">
    <LoadingOverlay active={loading}>Custom Overlay</LoadingOverlay>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <Button variant="light" onClick={handleClick}>Show Loading Overlay</Button>
  </div>
}`.trimLeft();


const CustomStyleCode = `
function Example() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }

  return <div className="container border">
    <LoadingOverlay active={loading} overlayStyle={{backgroundColor: '#222'}}>
      <div className="text-light">
      Custom Overlay Style
      </div>
    </LoadingOverlay>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <Button variant="light" onClick={handleClick}>Show Loading Overlay</Button>
  </div>
}`.trimLeft();



const APICode = `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { LoadingOverlay } from 'cbiit-react-components/loading-overlay/loading-overlay';
  

  function Example() {
    const [loading, setLoading] = useState(false);
    function handleClick() {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    }
  
    return <div className="container border">
      <LoadingOverlay active={loading} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <Button variant="light" onClick={handleClick}>Show Loading Overlay</Button>
    </div>
  }

  ReactDOM.render(
    <Example />
    document.getElementById('body')
  );
`;

export function API() {
  return <div className="m-2">
    <h1>Getting Started</h1>
    <p>The LoadingOverlay component renders an overlay over an element which disables interaction with any components within the element.</p>
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
          <td>children</td>
          <td>Array&lt;React.Component&gt;</td>
          <td>Any children of the LoadingOverlay component will be rendered (transcluded) overlay, overriding the default loader.</td>
        </tr>
        <tr>
          <td>children</td>
          <td>Boolean</td>
          <td>Specifies whether the LoadingOverlay is visible or not.</td>
        </tr>

        <tr>
          <td>active</td>
          <td>Boolean</td>
          <td>Specifies whether the LoadingOverlay is visible or not.</td>
        </tr>

        <tr>
          <td>overlayClass</td>
          <td>String</td>
          <td>Specifies additional classes to apply to the overlay element.</td>
        </tr>

        <tr>
          <td>overlayStyle</td>
          <td>Object</td>
          <td>Specifies additional styles to apply to the overlay element.</td>
        </tr>

        <tr>
          <td>overlayProps</td>
          <td>Object</td>
          <td>Specifies additional properties to apply to the overlay element.</td>
        </tr>
      </tbody>
    </table>
  </div>
}


export function Example() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }

  return <div className="m-2">
    <div className="mb-2 p-2 border">
      <LoadingOverlay active={loading} />
      <p>{text}</p>
      <Button variant="light" onClick={handleClick}>Show Loading Overlay</Button>
    </div>
    <CodeRenderer code={ExampleCode} />
  </div>

}


export function Custom() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }

  return <div className="m-2">
    <div className="mb-2 p-2 border">
      <LoadingOverlay active={loading}>Custom Overlay</LoadingOverlay>
      <p>{text}</p>
      <Button variant="light" onClick={handleClick}>Show Loading Overlay</Button>
    </div>
    <CodeRenderer code={CustomCode} />
  </div>

}


export function CustomStyle() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }


  return <div className="m-2">
    <div className="mb-2 p-2 border">
      <LoadingOverlay active={loading} overlayStyle={{ backgroundColor: '#222' }}>
        <div className="text-light">
          Custom Overlay Style
        </div>
      </LoadingOverlay>
      <p>{text}</p>
      <Button variant="light" onClick={handleClick}>Show Loading Overlay</Button>
    </div>
    <CodeRenderer code={CustomStyleCode} />
  </div>
}
