import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material"
import classnames from "classnames"
import { useState, useEffect } from "react"
import InputType from "./InputType"
import { INewPopup } from "../interface/popup"

const PopUpComponent: React.FC<INewPopup> = (props: INewPopup) => {
    const {
        open,
        handlePopupToggle,
        inputData,
        popupTitle,
        popupContentText,
        buttonLabel,
        buttonLabelClasses = '',
        disableButton,
        handleOnClick,
        handleReset,
        enableReset = false,
        hasSecondaryInputData = false,
        secondaryInputData,
        showNewButton = true,
        doDisableActionButtonOnClick = false,
        popupLoaderConfig = { show: false, message: '' },
        classes,
    } = props

    const [disableActionButton, setDisableActionButton] = useState(false)
    useEffect(() => setDisableActionButton(!!disableButton), [disableButton])

    return (
        <>
            <div className="new-popup">
                {showNewButton && (
                    <></>
                    //   <button
                    //     className="button-secondary add-new margin-rem"
                    //     disabled={disableNewButton}
                    //     onClick={() => handlePopupToggle(true)}
                    //   >
                    //     {text}
                    //   </button>
                )}

                <Dialog
                    className={`dialog-box new-popup-box order-spacing new-data-popup ${classes}`}
                    maxWidth={'xs'}
                    open={open || true}
                >
                    <DialogTitle>
                        <div className="title">{popupTitle}</div>
                    </DialogTitle>

                    <DialogContent>
                        {!!hasSecondaryInputData && (
                            <div className={classnames('dialog-content-row', secondaryInputData?.classes)}>
                                <label className="spacing-right">{secondaryInputData?.label}</label>
                                {/* <ErrorField message={secondaryInputData?.errorMessage} showIcon={secondaryInputData?.showErrorIcon}> */}
                                <InputType
                                    classes={classnames({
                                        invalid: secondaryInputData?.errorMessage?.length ? true : false,
                                        'with-height':
                                            secondaryInputData?.type === 'auto-complete' || secondaryInputData?.type === 'select',
                                    })}
                                    autoFocus={secondaryInputData?.autoFocus}
                                    disabled={secondaryInputData?.disabled}
                                    type={secondaryInputData?.type}
                                    name={secondaryInputData?.name}
                                    value={secondaryInputData?.value}
                                    placeholder={secondaryInputData?.placeholder}
                                    options={secondaryInputData?.options || ''}
                                    hasInlineLoader={secondaryInputData?.hasInlineLoader}
                                    hasAddonText={secondaryInputData?.hasAddonText}
                                    addonText={secondaryInputData?.addonText}
                                    handleOnChange={secondaryInputData?.handleOnChange}
                                    hasClickAwayAction={secondaryInputData?.hasClickAwayAction}
                                    handleOnInput={secondaryInputData?.handleOnInput}
                                    handleOnBlur={secondaryInputData?.handleOnBlur}
                                    menuProps={secondaryInputData?.menuProps}
                                />
                                {/* </ErrorField> */}
                            </div>
                        )}
                        {inputData && !Array.isArray(inputData) && (
                            <div className="dialog-content-row new-input-section">
                                <label className="spacing-right">{popupContentText}</label>
                                {/* <ErrorField message={inputData?.errorMessage} showIcon={inputData.showErrorIcon}> */}
                                <InputType
                                    classes={classnames(`${inputData.classes}`, {
                                        invalid: inputData.errorMessage?.length ? true : false,
                                        'with-height': inputData.type === 'auto-complete',
                                    })}
                                    autoFocus={inputData.autoFocus}
                                    disabled={inputData.disabled}
                                    type={inputData.type}
                                    name={inputData.name}
                                    value={inputData.value}
                                    placeholder={inputData.placeholder}
                                    hasClickAwayAction={inputData.hasClickAwayAction}
                                    options={inputData.options || ''}
                                    sortAsc={inputData.sortAsc}
                                    maxLength={inputData.maxLength}
                                    hasInlineLoader={inputData.hasInlineLoader}
                                    hasAddonText={inputData.hasAddonText}
                                    addonText={inputData.addonText}
                                    handleOnChange={inputData.handleOnChange}
                                    handleOnInput={inputData.handleOnInput}
                                    handleOnBlur={inputData.handleOnBlur}
                                    menuProps={inputData.menuProps}
                                    handleSubmitOnEnter={inputData?.handleSubmitOnEnter}
                                />
                                {/* </ErrorField> */}
                            </div>
                        )}
                        {inputData && Array.isArray(inputData) && (
                            <div className="dialog-content-row new-input-section">
                                {inputData.map((item, i) => {
                                    return (<div key={`div-${i}`}>
                                        {item.label && item.type !=='checkbox' && <label className="spacing-right" key={`label-${i}`}>{item.label}</label>}
                                        <InputType
                                            key={`input-${i}`}
                                            classes={classnames(`${item.classes}`, {
                                                invalid: item.errorMessage?.length ? true : false,
                                                'with-height': item.type === 'auto-complete',
                                            })}
                                            autoFocus={item.autoFocus}
                                            disabled={item.disabled}
                                            type={item.type}
                                            name={item.name}
                                            value={item.value}
                                            placeholder={item.placeholder}
                                            hasClickAwayAction={item.hasClickAwayAction}
                                            options={item.options || ''}
                                            sortAsc={item.sortAsc}
                                            maxLength={item.maxLength}
                                            hasInlineLoader={item.hasInlineLoader}
                                            hasAddonText={item.hasAddonText}
                                            addonText={item.addonText}
                                            handleOnChange={item.handleOnChange}
                                            handleOnInput={item.handleOnInput}
                                            handleOnBlur={item.handleOnBlur}
                                            menuProps={item.menuProps}
                                            handleSubmitOnEnter={item?.handleSubmitOnEnter}
                                        />
                                        {item.label && item.type ==='checkbox' && <label className="spacing-right" key={`label-${i}`}>{item.label}</label>}
                                    </div>)
                                })}
                                {/* <ErrorField message={inputData?.errorMessage} showIcon={inputData.showErrorIcon}> */}

                                {/* </ErrorField> */}
                            </div>
                        )}
                    </DialogContent>

                    <DialogActions className="dialog-pop-button">
                        <div className="layout-footer">
                            <div className="btn-wrapper alignment-space align-right">
                                <button
                                    className="button-primary"
                                    disabled={!!disableActionButton}
                                    onClick={() => {
                                        if (doDisableActionButtonOnClick) {
                                            setDisableActionButton(true)
                                        }
                                        handleOnClick()
                                    }}
                                >
                                    <span className={buttonLabelClasses}>
                                        {/* <FontAwesomeIcon icon={faCheck} /> */}
                                        <span className="btn-spacing">{buttonLabel}</span>
                                    </span>
                                </button>
                                {!!enableReset && (
                                    <button
                                        type="submit"
                                        className="button-primary"
                                        style={{ marginLeft: '10px' }}
                                        onClick={() => handleReset?.()}
                                    >
                                        {/* <FontAwesomeIcon icon={faRotateLeft} /> */}
                                        <span className="btn-spacing">Reset</span>
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className="button-primary"
                                    style={{ marginLeft: '10px' }}
                                    onClick={() => handlePopupToggle(false)}
                                >
                                    {/* <FontAwesomeIcon icon={faClose} /> */}
                                    <span className="btn-spacing">Cancel</span>
                                </button>
                            </div>
                        </div>
                    </DialogActions>
                    {popupLoaderConfig?.show && (
                        <></>
                        // <AppLoader message={popupLoaderConfig.message} styles={{ position: 'absolute' }} />
                    )}
                </Dialog>
            </div>
        </>
    )

}


export default PopUpComponent