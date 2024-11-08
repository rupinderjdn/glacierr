import ReactDOM from "react-dom/client";
import Modal from "./Modal";
import { Provider } from "react-redux";
import { store } from "../../Store/configureStore";
export const closeComponent = (id) => {
    const div = document.getElementById(id);
    document?.getElementById('root').removeChild(div);
}
export const closeAllModals = ()=>{
    const modalElements = document.querySelectorAll(
        '[data-modal="uniqueModalIdentifier"]'
    );
    if (modalElements.length > 0) {
        for (let i = 0; i < modalElements.length; i++) {
            modalElements[i].remove(); 
        }
    }
}
const createModal = (id, Component, componentConfig={}) => {
    const {height,width,title,onRotateClick,headerClasses,overlay, draggable, modalClass,componentProps,callLikeAFunction,cancelAction,cancelActionProps,toolbarUtilities} = componentConfig;
    let div = document.createElement('div');
    div.setAttribute('data-modal', 'uniqueModalIdentifier');
    div.id = id;
    document.getElementById('root').appendChild(div);
    const root = ReactDOM.createRoot(div);
    let modalConfig = {
        minHeight : '30vh',
        minWidth : '30vw'
    }
    if(height){
        modalConfig['height']=height;
    }
    if(width){
        modalConfig['width']=width;
    }
    const cancelForm = ()=>{
        cancelAction && cancelAction(cancelActionProps);
        closeComponent(id);
    }
    if(callLikeAFunction){
        componentProps['cancelForm'] = cancelForm;
    }
    else Component.props["cancelForm"] = cancelForm;
    root.render(
    <Provider store={store}>
        <Modal headerClasses={headerClasses} toolbarUtilities={toolbarUtilities} overlay={overlay} title={title} modalClasses={`shadow-3xl ${modalClass}`} onRotateClick={onRotateClick} closeModal={cancelForm} modalConfig={modalConfig} draggable={draggable}> {callLikeAFunction?<Component {...componentProps}/>:Component} </Modal>
    </Provider>);
}

export const openComponent = (id,Component,config,...args)=>{
    // TODO maybe we can remove args adding a log if below doesn't get printed in any case we can remove this
    if(args.length > 0)console.trace(args);
    createModal(id,Component,config,...args);
}