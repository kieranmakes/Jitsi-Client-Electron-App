import React from 'react';
import Jitsi from 'react-jitsi';
import './App.global.css';

export default function App() {
  return (
    <Jitsi
      containerStyle={{ width: '100vw', height: '100vh' }}
      // @ts-ignore: type error
      config={{ prejoinPageEnabled: false }}
      domain="stivio.tantrwm.co.uk"
      roomName="kieran123kieranaaaaaaaa"
      displayName="kieran"
    />
  );
}
