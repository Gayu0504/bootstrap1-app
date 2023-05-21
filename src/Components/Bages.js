import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Bages() {
  return (
    <div>
      <Button variant="primary">

      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
    </div>
  )
}

export default Bages
