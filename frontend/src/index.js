import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import ServiceCenters from './components/ServiceCenters/ServiceCenters';

const renderComponent = (component) => {
  let data = component.hasAttribute("data") ? JSON.parse(atob(component.getAttribute("data"))) : {};
  let componentName = component.hasAttribute("componentName") ? component.getAttribute("componentName") : "undefined";
  switch (componentName) {
    case "service-centers":
      return <ServiceCenters data={data} />;
    default:
      console.error(`Component: ${componentName} does not exist!`);
  }
}

let components = document.querySelectorAll(".react-component");
if (components) {
  components.forEach((componentElement) => {
    ReactDOM.render(
      <React.StrictMode>
        { renderComponent(componentElement) }
      </React.StrictMode>,
      componentElement
    );
  });
} else {
  console.warn("No react components on page.");
}
