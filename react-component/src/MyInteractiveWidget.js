// src/MyInteractiveWidget.js
import React, { useState } from 'react';

function MyInteractiveWidget() {
    const [message, setMessage] = useState("Click me to change!");
    const colors = ['red', 'green', 'blue', 'purple', 'orange', 'teal', 'magenta'];
    const [colorIndex, setColorIndex] = useState(0);

    const handleClick = () => {
        setMessage("You clicked me. React is working!");
        setColorIndex((prev) => (prev + 1) % colors.length);
    };

    return (
        <div style={{ padding: '20px', border: '1px solid blue', borderRadius: '8px', textAlign: 'center' }}>
          <h2>React Widget</h2>
          <p style={{ color: colors[colorIndex] }}>{message}</p>
          <button onClick={handleClick}>Change Message</button>
        </div>
      );

}

export default MyInteractiveWidget;