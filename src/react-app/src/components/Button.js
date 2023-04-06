import { React } from '@wordpress/element';

export default function Button({ type, buttonText, onClick }) {
  return (
    <button 
        type={type} 
        onClick={onClick}>
        {buttonText}
    </button>
  )
}
