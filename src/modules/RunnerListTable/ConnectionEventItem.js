
/* eslint-disable camelcase */
import React from 'react';
import ConnectionBox from './styled/ConnectionBox';
import Clock from './styled/Clock';

const ConnectionEventItem = ({ time, style, disconnected }) => (
    <ConnectionBox style={style} disconnected={disconnected}>
      <div className="content">
        <div className="indicator" />
        <div className="data">
          <div className="connectionInfo">
            {disconnected ? 'Connection Lost' : 'Connected' }
          </div>
          <div className="time">
              {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}:{time.getMilliseconds()}
              <Clock />
            </div>
        </div>
      </div>
    </ConnectionBox>
);

export default ConnectionEventItem;
