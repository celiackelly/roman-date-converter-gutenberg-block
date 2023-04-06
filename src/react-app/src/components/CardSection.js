import { React } from '@wordpress/element';

export default function CardSection( {title, children} ) {
  return (
    <section className="card">
        <h2>{title}</h2>
        {children}
    </section>
  )
}
