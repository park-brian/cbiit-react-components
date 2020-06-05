import React, { useState } from 'react';
import { NCIHeader } from '../components/nci-header/nci-header';
import '../components/index.scss';

export default {
  title: 'NCI Header',
  component: NCIHeader,
};

export function Example() {
  return <NCIHeader />
}
