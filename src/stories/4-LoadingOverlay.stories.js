import React, { useState } from 'react';
import { Button } from '../components/button/button';
import { LoadingOverlay } from '../components/loading-overlay/loading-overlay';
import '../components/index.scss';

export default {
  title: 'LoadingOverlay',
  component: LoadingOverlay,
};

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget purus sollicitudin, viverra ipsum vel, imperdiet ipsum. Phasellus massa enim, ornare et blandit et, hendrerit imperdiet nibh. Duis metus lectus, pulvinar ac lobortis non, porta nec tortor. Maecenas porta felis at finibus placerat. Mauris euismod faucibus risus sit amet luctus. Nulla sit amet dignissim diam, at dictum tellus. Fusce maximus eget est id auctor. In vitae porta quam, vel interdum libero. Proin tempor quam varius magna lacinia, ac dignissim eros porttitor. Donec mattis efficitur cursus. Donec non interdum nisi. Praesent dictum eu dolor quis consectetur. Fusce bibendum lacinia odio quis tincidunt. Fusce finibus eleifend risus et fringilla.";

export function Example() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }

  return <div className="m-2 p-2 container border">
    <LoadingOverlay active={loading} />
    <p>{text}</p>
    <Button variant="light" onClick={handleClick}>Show Loading Overlay</Button>
  </div>
}


export function Custom() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }

  return <div className="m-2 p-2 container border">
    <LoadingOverlay active={loading}>Custom Overlay Component</LoadingOverlay>
    <p>{text}</p>
    <Button variant="light" onClick={handleClick}>Show Custom Loading Overlay</Button>
  </div>
}


export function CustomStyle() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }

  return <div className="m-2 p-2 container border">
    <LoadingOverlay active={loading} overlayStyle={{backgroundColor: '#222'}}>
      <div className="text-light">
      Custom Overlay Style
      </div>
    </LoadingOverlay>
    <p>{text}</p>
    <Button variant="light" onClick={handleClick}>Show Loading Overlay with Custom Style</Button>
  </div>
}
