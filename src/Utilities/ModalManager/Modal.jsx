import React, { useRef, useState } from 'react'
import { Tooltip } from 'react-tooltip';
import PropTypes from 'prop-types'
import Draggable from './Draggable';

const  Modal = ({ children,toolbarUtilities=[], modalConfig, closeModal, modalClasses, headerClasses,title,onRotateClick,overlay, draggable})=> {
    const headerClassToUse = "font-platform-3 p-2 cursor-drag bg-platform-3  shadow-3xl flex flex-row justify-between items-center ".concat(headerClasses);

    return (
        <div className={`${overlay==false?"":"bg-transparent z-20"} flex flex-col  justify-center items-center text-color-1 `}
            style={{
                position: 'absolute',
                // height: '100%',
                // width: '100%',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1000
            }}>
            <Draggable modalClasses={modalClasses} draggable={draggable} parentConfig={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div className='h-full z-20'>
                    <div className={headerClassToUse} draggable="true">
                        <div className=' font-semibold font-platform-1'>{title || "Modal"}</div>
                        <div className='flex flex-row justify-end items-center '>
                            {(typeof onRotateClick === 'function') && <i className="fa-solid fa-arrow-spin pointer px-1" onClick={onRotateClick}></i>}
                            {toolbarUtilities.map((icon, idx) => {
                                return (
                                <div key={icon.valueKey + idx}>
                                    <i
                                    data-tooltip-id={`${icon.valueKey}-tooltip-${idx}`}
                                    data-tooltip-content={icon.tooltip}
                                    key={icon.valueKey}
                                    id={`${icon.valueKey}`}
                                    className={`${icon.iconClass} pointer  toolbarIcon`}
                                    onClick={icon.onClick}
                                    ></i>
                                    {icon.tooltip && (
                                    <Tooltip place="bottom" id={`${icon.valueKey}-tooltip-${idx}`} />
                                    )}
                                </div>
                                );
                            })}
                            <i className="p-2 pl-0 fa-regular fa-xmark toolbarIcon cursor-pointer ml-3 text-[3vh] text-stone-500 hover:text-color-3 transition-all duration-200" onClick={closeModal}></i>
                        </div>
                    </div>
                    <div className='m-2 platform-gradient-1'>{children}</div>
                </div>
            </Draggable>
        </div>
    )
}



Modal.propTypes = {
    title: PropTypes.string,
    toolbarUtilities: PropTypes.array
}



export default Modal;