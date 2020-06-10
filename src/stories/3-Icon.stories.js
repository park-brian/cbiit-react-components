import React from 'react';
import { Icon } from '../components/icon/icon';
import { CodeRenderer } from '../components/code-renderer/code-renderer'
import '../components/index.scss';

export default {
  title: 'Icon',
  component: Icon,
};

const iconNames = ["angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","arrow-left","arrow-right","exclamation-circle","minus","plus","sort","sort-down","sort-up","times"];


const APICode = `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Icon } from 'cbiit-react-components/icon/icon';
  
  ReactDOM.render(
    <Icon name="exclamation-circle" />
    document.getElementById('body')
  );
`;

export function API() {
    return <div className="m-2">
        <h1>Getting Started</h1>
        <p>The Icon component by default renders svg images assumed to be located the 'assets/icons' folder, relative to the current page's document root. SVG names correspond to icon names. For example, a svg called 'plus.svg' corresponds to an icon named 'plus'.</p>
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
                    <td>name</td>
                    <td>String</td>
                    <td>Specifies the name of the icon to use. Should correspond to an image asset found in the 'assets/icons' folder.</td>
                </tr>

                <tr>
                    <td>path</td>
                    <td>String</td>
                    <td>Specifies an alternative to the 'assets/icons' folder. In the future, this can be configured globally using the IconProvider component.</td>
                </tr>

                <tr>
                    <td>width</td>
                    <td>Number</td>
                    <td>Specifies the width of the icon (in pixels)</td>
                </tr>

                <tr>
                    <td>height</td>
                    <td>Number</td>
                    <td>Specifies the height of the icon (in pixels)</td>
                </tr>

                <tr>
                    <td>alt</td>
                    <td>String</td>
                    <td>Specifies the alternate text for the icon.</td>
                </tr>

                <tr>
                    <td>(Additional Properties)</td>
                    <td>any</td>
                    <td>Any properties not listed above will be added to the img element as attributes. This allows us to add arbitrary styles, classes, event handlers, and selectors to the generated img element. </td>
                </tr>
            </tbody>
        </table>
    </div>
}


export function Examples() {
    return iconNames.map(name => <div className="m-2">
      <Icon name={name} />
      <small className="text-muted ml-2">({name})</small>
      <CodeRenderer code={`<Icon name="${name}" />`} />
    </div>)
}
