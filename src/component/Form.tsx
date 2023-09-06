import { ChangeEvent, useEffect, useState } from "react";
import { INewPopup } from "../interface/popup"
import PopUpComponent from "./Popup";
import { getAddress } from "../services/Api.service";

const FormComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [selectValue, setSelectValue] = useState('0');
    const [options, setOptions] = useState<{ id: string, value: string }[]>([]);

    const handleOnNewSiteFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('field change', e.target.type === 'checkbox' ? e.target.checked : e.target.value, e.target.name)
    };

    const handleOnNewSiteFieldBlur = () => { }

    const handleOnNewSiteCreate = () => {
        alert(JSON.stringify({ selectedOption: options.find(item => item.id === selectValue), checkboxValue }, undefined, 2));
        setIsOpen(false);
    }


    useEffect(() => {
        const fetchData = async () => {
            const defaultOption = { id: '0', value: 'Please Select a Address' };
            try {
                const endpoint = checkboxValue ? 'getAddress' : 'getNniAddress';
                const data = await getAddress(endpoint);
                setOptions([defaultOption, ...data]);
            } catch (error) {
                setOptions([defaultOption]);
            }
        }
        fetchData();
    }, [checkboxValue]);

    useEffect(() => {
        setSelectValue('0');
    }, [options])

    const selectConfig: INewPopup = {
        buttonLabel: 'Create site',
        inputData: [{
            name: 'postcode',
            type: 'text',
            value: '',
            label: 'Postcode: ',
            autoFocus: true,
            errorMessage: '',
            placeholder: 'postCode',
            showErrorIcon: false,
            hasInlineLoader: false,
            hasAddonText: false,
            addonText: '',
            handleOnChange: handleOnNewSiteFieldChange,
            handleOnBlur: handleOnNewSiteFieldBlur,
        }, {
            name: 'checkbox',
            type: 'checkbox',
            value: '',
            label: 'some content ',
            autoFocus: true,
            checked: checkboxValue,
            errorMessage: '',
            placeholder: 'checkbox',
            showErrorIcon: false,
            hasInlineLoader: false,
            hasAddonText: false,
            addonText: '',
            handleOnChange: (e: any) => setCheckboxValue(e.target.checked),
            handleOnBlur: handleOnNewSiteFieldBlur,
        }, {
            name: 'address',
            type: 'select',
            value: selectValue,
            label: '',
            autoFocus: true,
            options: options,
            errorMessage: '',
            placeholder: 'Address',
            showErrorIcon: false,
            hasInlineLoader: false,
            hasAddonText: false,
            addonText: '',
            handleOnChange: (e: { target: { value: string; }; }) => setSelectValue(e.target.value),
            handleOnBlur: handleOnNewSiteFieldBlur,
        }],
        hasSecondaryInputData: false,
        doDisableActionButtonOnClick: true,
        popupContentText: 'Postcode:    ',
        popupTitle: 'New Site',
        disableButton: false,
        handleOnClick: () => handleOnNewSiteCreate(),
        handlePopupToggle: () => setIsOpen(value => !value)
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Popup</button>
            {isOpen && <PopUpComponent {...selectConfig}></PopUpComponent>}
        </>

    )
}

export default FormComponent;