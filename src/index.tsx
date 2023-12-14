import React from 'react';
import {createRoot} from 'react-dom/client';
import Demo from './demo';
import Radar from './Radar';

// @ts-ignore
createRoot(document.getElementById('container1')).render(<Radar PokemonId={0}/>);
// @ts-ignore
createRoot(document.getElementById('container1')).render(<Demo/>);
