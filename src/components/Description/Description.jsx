import React from 'react'
import css from './Description.module.css';
function Description() {
  return (
      <div>
          <h2 className={css.cafeName}>Sip Happens Café
      </h2>
          <p className={css.guestRequest}>Please leave your feedback about our service by selecting one of the options below.
</p>
      </div>
  )
}

export default Description