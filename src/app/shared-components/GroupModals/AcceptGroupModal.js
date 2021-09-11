import React, {useState} from "react";
import CustomModal from "../CustomModal";
import AcceptConfirmForm from "../form/accept/AcceptConfirmForm";
import AcceptInputForm from "../form/accept/AcceptInputForm";
import AcceptUpdateForm from "../form/accept/AcceptUpdateForm";

const AcceptGroupModal = ({show, modalType, setShow, handleClose}) => {
    const [values, setValues] = useState({   
        datetime: "",
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
                title={`Accept Request`}
                key="ACCEPT"
                form={
                    <AcceptInputForm 
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
                title={`Accept Request Confirmation`}
                key={`CONFIRM_ACCEPT`}
                form={
                    <AcceptConfirmForm 
                        onSubmitData={onSubmit} 
                        values={values} 
                        onHandleShowModal={onHandleShowModal}
                    />
                }
            />

            <CustomModal 
                show={show.updateModal}
                handleClose={handleClose}
                title={`Update Accept Request`}
                key={`CHANGE_ACCEPT`}
                form={
                    <AcceptUpdateForm 
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

export default AcceptGroupModal