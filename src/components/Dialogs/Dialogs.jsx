import React from 'react';
import './Dialogs.scss'

const Dialogs = () => {
  return (
    <div className="dialogs">
      <div className="dialogs__wrap">
        <div className="dialogs__item">Margarita</div>
        <div className="dialogs__item">Helen</div>
        <div className="dialogs__item">Inna</div>
        <div className="dialogs__item">Anna</div>
      </div>
      <div className="messages">
        <div className="messages__item">Hi</div>
        <div className="messages__item">How are you</div>
        <div className="messages__item">Wats up</div>
      </div>
    </div>
  );
}

export default Dialogs; 