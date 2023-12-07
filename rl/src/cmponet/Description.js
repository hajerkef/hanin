import React from 'react'
import database from '../Product'

export default function Description() {
  return (
    <div>
      {database.description}
    </div>
  )
}
