import React, {useState} from "react";
import { CUSTOMER_PROMISED_CARD, DATE_TIME, MODAL_INVITATION_TYPE, MODAL_OFFER_TYPE, TEAM_MATE, TYPE_OF_BADGE } from "../../constants/types";
import CustomModal from "../CustomModal";
import ConfirmForm from "../form/ConfirmForm";
import InputForm from "../form/InputForm";
import UpdateForm from "../form/UpdateForm";

const OfferAndInvitationGroupModals = ({show, modalType, setShow, handleClose}) => {
    let title = "";
    switch(modalType) {
        case MODAL_OFFER_TYPE: {
            title = "Offer";
        } break
        case MODAL_INVITATION_TYPE: {
            title = "Invitaition";
        } break;
        default: break;
    }
    const [values, setValues] = useState({
        teamMates: [],
        mobileTeamList: "",
        typeOfBadge: "",
        customPromiseCard: "",
        enterCustomPromiseCard: "",
        dateTime: ""
    })

    const [updateField, setUpdateField] = useState({
        name: "",
        type: ""
    });
    const onSubmit = () => {
        console.log(values)
    }

    const onUpdate = (data) => {
        switch(updateField.type) {
            case TEAM_MATE: {
                setValues({
                    ...values,
                    teamMates: data
                })
            } break;
            case TYPE_OF_BADGE: {
                setValues({
                    ...values,
                    typeOfBadge: data
                })
            } break
            case CUSTOMER_PROMISED_CARD: {
                setValues({
                    ...values,
                    customPromiseCard: data
                })
            } break
            case DATE_TIME: {
                setValues({
                    ...values,
                    dateTime: data
                })
            } break
            default: break;
        }
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
            }); break
            case "UPDATE": {
                setShow({
                    ...show,
                    isOpen: {
                        inputModal: false,
                        confirmModal: false,
                        updateModal: true,
                    }
                })
                handleFieldUpdate(fieldUpdate)
            }; break
            default: break;
        }
    }

    const handleFieldUpdate = (type) => {
        switch(type) {
            case TEAM_MATE: {
                setUpdateField({
                    name: "Team Mate",
                    type: TEAM_MATE
                });
            } break;
            case TYPE_OF_BADGE: {
                setUpdateField({
                    name: "Promise",
                    type: TYPE_OF_BADGE
                })
            } break
            case CUSTOMER_PROMISED_CARD: {
                setUpdateField({
                    name: "Badge",
                    type: CUSTOMER_PROMISED_CARD
                })
            } break
            case DATE_TIME: {
                setUpdateField({
                    name: "Date Time",
                    type: DATE_TIME
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
                title={`Send An ${title}`}
                key={title}
                form={
                    <InputForm 
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
                title={`${title} Confirmation`}
                key={`CONFIRM_${title}`}
                form={
                    <ConfirmForm 
                        onSubmitData={onSubmit} 
                        values={values} 
                        onHandleShowModal={onHandleShowModal}
                    />
                }
            />

            <CustomModal 
                show={show.updateModal}
                handleClose={handleClose}
                title={`Update ${updateField.name}`}
                key={`CHANGE_${title}`}
                form={
                    <UpdateForm onUpdate={onUpdate} type={updateField.type} onHandleShowModal={onHandleShowModal}/>
                }
            />
        </>
    )
}

export default OfferAndInvitationGroupModals