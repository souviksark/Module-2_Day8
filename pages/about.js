import TitleComponent from '@/components/TitleComponent'
import React from 'react'

function about() {
  return (
    <div>
      <TitleComponent bg_color='orange' f_color='yellow' title='about Header' />
      <h1>This is about page</h1>
    </div>
  )
}

export default about