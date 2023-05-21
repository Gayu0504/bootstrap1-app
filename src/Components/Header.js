import React from 'react'
import Alert from 'react-bootstrap/Alert';

function Header() {
  return (
    <div>
      <>
      {[
        'primary',
        'secondary',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      ))}
    </>

    </div>
  )
}

export default Header
