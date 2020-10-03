import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import FunctionComponentExample from './react_function_component/functional_component'


/*
* Render with JSX
*/

// Display single element
const element_p = <p className="text_bold">Display single element using JSX and applied css</p>
ReactDOM.render(element_p, document.getElementById("root"))

// Work with multiple elements
// JSX uses Babel compilation and it will take time for the compilation
const blog_element = (
  <div>
    <h4>My Project</h4>
    <p>Created a blog panel using multiple elements with the help of <b>JSX</b>.</p>
  </div>
)
ReactDOM.render(blog_element, document.getElementById("root"))

/*
* Render without JSX (using React Element)
*/

// created element and used attribute (class)  and rendered the element 
const single_element = React.createElement("p", {"className": "text_bold"}, "Single element without JSX (using react create element method)");
ReactDOM.render(single_element, document.getElementById("root"))

// block element creation and rendered
const block_element = React.createElement("div", {"className": "text_bold"}, 
  React.createElement("h4", null, "My Project"),
  React.createElement("p", null, "Created a blog using block elements without using JSX (using react create element)")
)
ReactDOM.render(block_element, document.getElementById("root"))

/*
* call functional component, pass parameters
*/

ReactDOM.render(
  <FunctionComponentExample name="Jack Bruno" salary="1,00,000 PM" />,
  document.getElementById("root")
)