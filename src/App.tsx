import React from 'react';
import Jitsi from 'react-jitsi';
import './App.global.css';

import getConfig from './getConfig';
const config = getConfig();

export default function App() {
  return (
    <Jitsi
      containerStyle={{ width: '100vw', height: '100vh' }}
      // @ts-ignore: type error
      config={{ prejoinPageEnabled: false }}
      domain={config['JITSI_DOMAIN']}
      roomName={config['JITSI_ROOM_NAME']}
      displayName="Remote Device"
    />
  );
}
