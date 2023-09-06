import { INewPopup } from "../interface/popup";

const handleOnNewSiteFieldChange = () => {};
const handleOnNewSiteFieldBlur = () => {};
const handleOnNewSiteCreate = () => {};
const setIsOpen = (value: any) => {};

const newSiteConfig: INewPopup = {
  buttonLabel: "Create site",
  inputData: {
    name: "postcode",
    type: "text",
    value: "",
    autoFocus: true,
    errorMessage: "",
    placeholder: "Postcode",
    showErrorIcon: false,
    hasInlineLoader: false,
    hasAddonText: false,
    addonText: "",
    handleOnChange: handleOnNewSiteFieldChange,
    handleOnBlur: handleOnNewSiteFieldBlur,
  },
  hasSecondaryInputData: false,
  doDisableActionButtonOnClick: true,
  popupContentText: "Postcode:    ",
  popupTitle: "New Site",
  disableButton: false,
  handleOnClick: () => handleOnNewSiteCreate(),
  handlePopupToggle: () => setIsOpen((value: any) => !value),
};
