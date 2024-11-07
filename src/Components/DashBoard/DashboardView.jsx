import React from 'react'
import PropTypes from 'prop-types'
import SideMenuView from '../Sidemenu/SideMenuView'
import SearchbarView from '../Searchbar/SearchbarView'
import WeatherDetailsView from '../WeatherDetailView/WeatherDetailsView'

const DashboardView = props => {
  return (
    <div className='h-full w-full'>
      <div className='flex flex-row items-center h-full '>
        <div className=' w-2/12 md:w-1/12 h-full '>
          <SideMenuView />
        </div>
        <div className="flex flex-col w-10/12 h-full md:w-11/12">
          <div className='w-full md:w-1/2'>
            <SearchbarView />
          </div>
          <div className='w-full h-full mb-4'>
            <WeatherDetailsView />
          </div>
        </div>
      </div>
    </div>
  )
}

DashboardView.propTypes = {}

export default DashboardView