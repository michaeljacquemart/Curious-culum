
import React from 'react';
import ReactDOM from 'react-dom';
import Panel1 from './expansionpanels/panel1';
import Panel2 from './expansionpanels/panel2';
import Panel3 from './expansionpanels/panel3';
import Panel4 from './expansionpanels/panel4';

ReactDOM.render(
    <div className={"grid2x2"}>
        <Panel1 />
        <Panel2 />
        <Panel3 />
        <Panel4 />
    </div>,
    document.querySelector('#root'));
    