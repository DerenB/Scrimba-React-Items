# Scrimba-React-Items

- Following the Scrimba Intro to React course
- This ReadMe contains the notes for all sections

# Requirements

- React Requirements
  - Node.Js / NPM
- Flask Requirements
  - Python

# Get Started with React

- Add CDN links to head:
```
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
- Add Babel to the script type:
  - `<script src="index.js" type="text/babel"></script>`

# 01 : First React ==============================

### Setup

- Add CDN links (found in README)
- Add HTML element with an id
  - Example: `<div id="root"></div>`
  - This is where the React will render

### Render Items

- Render React using the "root" element
- Example:
```
ReactDOM.render(<h1>Hello Everyone</h1>, document.getElementById("root"))
```

# 02 : JSX ==============================

- html syntax in JavaScript
- Can create a html block and assign to variable, then return variable

# 03 : React 18 Changes ==============================

- Imports are a little different
- Content is rendered differently

### Import Lines:

- `import React from "react"`
- `import ReactDOM from "react-dom/client"`

### Render the Items

- Create the Root Variable
  - `const root = ReactDOM.createRoot(document.getElementById("root"));`
- Render the Root Variable
  - `root.render(navbar);`

# 04 : Custom Components

- Put custom items inside a function
  - Function returns the output
- Call the function
- Can add parameters

### Formatting Notes

- Have to use Pascal Case
  - Ex: ThisIsMyVariable
  - (capitalize the first word in the variable)
- Call with "< />"
