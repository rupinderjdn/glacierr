import React from 'react'
import PropTypes from 'prop-types'
import { CiSearch } from 'react-icons/ci'

const SearchbarView = props => {
  return (
    <div className=' flex flex-row items-center p-2 m-2 shadow-3xl bg-platform-2 rounded-lg text-gray-400'>
      <CiSearch className='text-gray-300'/>
      <span className='px-4'>Search for cities</span>
    </div>
  )
}

SearchbarView.propTypes = {}

export default SearchbarView