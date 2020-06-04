import React, { useState } from 'react';
import { Navbar } from '../components/navbar/navbar';
import '../components/index.scss';

export default {
  title: 'Navbar',
  component: Navbar,
};


export function Example() {
  let [links, setLinks] = useState([
    {href: '#/home', title: 'Home', active: true},
    {href: '#/example', title: 'Example'},
    {href: '#/about', title: 'About'},
  ]);

  function setLink(href) {
    setLinks(links.map(link => {
      link.active = link.href == href;
      return link;
    }));
  }

  return <Navbar links={links} onClick={setLink} />
}
