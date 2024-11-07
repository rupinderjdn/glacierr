import React from 'react'
import PropTypes from 'prop-types'
import CityCardView from '../CityCard/CityCardView'

const CitiesView = props => {
  return (
    <div className='mt-4 p-4 gap-4 grid grid-cols-4'>
      <CityCardView />
      <CityCardView />
      <CityCardView />
      <CityCardView />
      <CityCardView />
      <CityCardView />
    </div>
  )
}

CitiesView.propTypes = {}

export default CitiesView