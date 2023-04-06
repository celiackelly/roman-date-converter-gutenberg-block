import { createRoot, render, createElement } from '@wordpress/element';
import DateConverter from './components/DateConverter';

function App() {
  return (
    <DateConverter />
  );
}


addEventListener("DOMContentLoaded", (event) => {
  const domElement = document.getElementById( 'react-app' );
  const uiElement = createElement( App );

  if ( createRoot ) {
    createRoot( domElement ).render( uiElement );
  } else {
    render( uiElement, domElement );
  }
});