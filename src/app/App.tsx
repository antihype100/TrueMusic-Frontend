import AppRouter from './AppRouter';
import { Player } from '../widgets/Player';
import React from 'react';

const App = () => {
    return (
        <>
            <AppRouter />
            <Player />
        </>
    );

};

export default App;
