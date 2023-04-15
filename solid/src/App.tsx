import { Component, createSignal } from 'solid-js';

const App: Component = () => {
    const [styles, setStyles] = createSignal({
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        height: '100vh',
    });

    return (
        <div style={styles()}>
            <h1 >Hello World!</h1>
        </div>
    );
};

export default App;
