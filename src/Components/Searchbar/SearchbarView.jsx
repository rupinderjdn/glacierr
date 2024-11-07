import React from 'react'
import PropTypes from 'prop-types'
import { CiSearch } from 'react-icons/ci'

const SearchbarView = props => {
  return (
    <div className=' flex flex-row items-center p-2 m-2 shadow-3xl bg-platform-2 rounded-lg text-gray-400'>
      <CiSearch className='text-gray-300 text-2xl'/>
      <input className='px-4 platform-gradient-2 flex-1 focus:border-none outline-none focus:border-transparent ml-4 rounded-lg bg-inherit border-none select-none' placeholder='Search for cities' />
    </div>
  )
}

SearchbarView.propTypes = {}

export default SearchbarView