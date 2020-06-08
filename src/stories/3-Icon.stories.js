import React from 'react';
import { Icon } from '../components/icon/icon';
import { CodeRenderer } from '../components/code-renderer/code-renderer'
import '../components/index.scss';

export default {
  title: 'Icon',
  component: Icon,
};

const iconNames = ["angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","arrow-left","arrow-right","exclamation-circle","minus","plus","sort","sort-down","sort-up","times"];

export function Examples() {
    return iconNames.map(name => <div className="m-2">
      <Icon name={name} />
      <small className="text-muted ml-2">({name})</small>
      <CodeRenderer code={`<Icon name="${name}" />`} />
    </div>)
}
