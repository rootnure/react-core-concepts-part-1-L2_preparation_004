# react-core-concepts-part-1-L2_preparation_004

- React
    - Component
    - JSX Markup (HTML type code in JS file)
    - Virtual DOM
    - Babel Compiler
- Rules of JSX
    1. Return a single root element
    2. Close all the tags
    3. Must use camelCase
    - Fragment
    - JS in JSX using curly braces
    - Using 'double curlies"
- React Component
    - Props (Only way to pass data from parent to child)
    - Props or data passing is Uni-directional
    - Destructuring during receiving props also can use default value
    - Different types of data can be passed (String, Number, Object, Component etc.)
    - Props drilling using spread operator
    - **children** in component
    - ***Props are read-only*** **Immutable**
- Component Export/Import
    - Export from component to use in another component
    - Import component to use inside the component
    - ***Conditional Rendering***
- Dynamic Component for array of elements
    - **key** props
- Interaction in React
    - Do not call any function directly
    - To pass a parameter to a function, must wrap using arrow function



## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
