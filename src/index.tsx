import React from 'react';
import {createRoot} from 'react-dom/client';
import Demo from './demo';
import Chart from './test';
// @ts-ignore
createRoot(document.getElementById('container1')).render(<Demo/>);
// @ts-ignore
createRoot(document.getElementById('container2')).render(<Chart/>);