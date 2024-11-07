import React from 'react'
import PropTypes from 'prop-types'

const CurrentCityWeatherView = props => {
  return (
    <div className='grid grid-cols-2 p-4 h-full'>
        <div className='flex flex-col justify-between h-full'>
            <div>
                <div className='text-4xl'>Madrid</div>
                <div className='text-sm'>Chane of rain 0%</div>
            </div>
            <div className='text-4xl'>31</div>
        </div>
        <div className=' text-right flex flex-col justify-between h-full'>
            <h1>SUN</h1>
        </div>
    </div>
  )
}

CurrentCityWeatherView.propTypes = {}

export default CurrentCityWeatherView