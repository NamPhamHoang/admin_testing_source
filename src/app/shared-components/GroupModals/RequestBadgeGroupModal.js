import React, {useState} from "react";
import CustomModal from "../CustomModal";
import RequestConfirmForm from "../form/request/RequestConfirmForm";
import RequestInputForm from "../form/request/RequestInputForm";
import RequestUpdateForm from "../form/request/RequestUpdateForm";

const RequestBadgeGroupModal = ({show, modalType, setShow, handleClose}) => {
    const [values, setValues] = useState({   
        enterCustomPromiseCard: "",
    })

    const onSubmit = () => {
        console.log(values)
    }
    
    const onHandleShowModal = (type, fieldUpdate) => {
        switch(type) {
            case "INPUT": setShow({
                ...show,
                isOpen: {
                    inputModal: true,
                    confirmModal: false,
                    updateModal: false,
                }
            }); break;
            case "CONFIRM": setShow({
                ...show,
                isOpen: {
                    inputModal: false,
                    confirmModal: true,
                    updateModal: false,
                }
            }); break;
            case "UPDATE": {
                setShow({
                    ...show,
                    isOpen: {
                        inputModal: false,
                        confirmModal: false,
                        updateModal: true,
                    }
                })
            } break
            default: break;
        }
    }

    return (
        <>
            <CustomModal
                show={show.inputModal}
                handleClose={handleClose}
                title={`Badge Request`}
                key="BADGE"
                form={
                    <RequestInputForm 
                        values={values} 
                        setValues={setValues}
                        onSubmit={onSubmit} 
                        onHandleShowModal={onHandleShowModal} 
                        modalType={modalType}
                    />
                }
            />

            <CustomModal 
                show={show.confirmModal}
                handleClose={handleClose}
                title={`Badge Request Confirmation`}
                key={`CONFIRM_BADGE`}
                form={
                    <RequestConfirmForm 
                        onSubmitData={onSubmit} 
                        values={values} 
                        onHandleShowModal={onHandleShowModal}
                    />
                }
            />

            <CustomModal 
                show={show.updateModal}
                handleClose={handleClose}
                title={`Update Badge Request`}
                key={`CHANGE_BADGE`}
                form={
                    <RequestUpdateForm 
                        values={values} 
                        setValues={setValues}
                        onSubmit={onSubmit} 
                        onHandleShowModal={onHandleShowModal} 
                    />
                }
            />
        </>
    )
}

export default RequestBadgeGroupModal