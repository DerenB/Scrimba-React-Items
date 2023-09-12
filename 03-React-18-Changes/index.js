// New Import Method:
import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </nav>
);

// New Render Method:

// Create the Root Element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the root
root.render(navbar);