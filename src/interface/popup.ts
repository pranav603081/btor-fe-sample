import { ReactElement } from "react";

export interface INewPopup {
  open?: boolean;
  handlePopupToggle?: any;
  inputData: IInputData | IInputData[];
  popupTitle: string;
  popupContentText: string;
  buttonLabel: any;
  buttonLabelClasses?: any;
  disableButton?: boolean | number;
  handleOnClick: any;
  handleReset?: any;
  enableReset?: boolean;
  hasSecondaryInputData?: boolean;
  secondaryInputData?: IInputData;
  disableNewButton?: boolean;
  showNewButton?: boolean;
  text?: ReactElement;
  doDisableActionButtonOnClick?: boolean;
  classes?: string;
  popupLoaderConfig?: {
    show?: boolean;
    message?: string;
  };
}

interface IInputData {
  autoFocus?: boolean;
  type: string;
  name: string;
  //
  checked?: boolean;
  label?: string;
  placeholder?: string;
  value: any;
  errorMessage?: string;
  showErrorIcon?: boolean;
  options?: any;
  hasClickAwayAction?: boolean;
  handleOnInput?: any;
  handleOnChange?: any;
  handleOnBlur?: any;
  sortAsc?: boolean;
  sortDesc?: boolean;
  maxLength?: number;
  hasInlineLoader?: boolean;
  hasAddonText?: boolean;
  addonText?: string;
  disabled?: boolean;
  classes?: string;
  menuProps?: any;
  handleSubmitOnEnter?: any;
}

export interface IInputTypes {
  autoFocus?: boolean;
  name?: string;
  value?: any;
  label?: string;
  options?:
    | Array<{ id: string | number; label: string; [any: string]: any }>
    | any;
  editable?: boolean;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  maxLength?: number;
  fullWidth?: boolean;
  id?: string | number;
  sx?: any;
  rows?: number;
  title?: string;
  classes?: string;
  placeholder?: string;
  type?: string;
  href?: string;
  sortAsc?: boolean;
  sortDesc?: boolean;
  defaultValue?: any;
  roundOff?: number;
  classNames?: string;
  maxFileSizeAllowed?: number;
  handleOnFileSizeError?: any;
  hasClickAwayAction?: boolean;
  min?: number;
  max?: number;
  isDecimal?: boolean;
  isInteger?: boolean;
  allowOnlyNumbers?: boolean;
  allowDecimals?: boolean;
  showNotFound?: boolean;
  billingOption?: boolean;
  unitType?: string | JSX.Element | JSX.Element[];
  step?: number;
  isCellFocused?: any;
  hasCellClicked?: any;
  addClickAwayForNormal?: boolean;
  setIsFocusedCellData?: any;
  setSelectedNode?: any;
  isTabFocus?: boolean;
  autoSelect?: boolean;
  hasInlineLoader?: boolean;
  hasAddonText?: boolean;
  addonText?: string;
  handleOnChange?: any;
  handleOnBlur?: any;
  handleOnFocus?: any;
  handleOnInput?: any;
  handleOnKeyDown?: any;
  handleOnFileUpload?: any;
  menuProps?: any;
  forceOptionToSelect?: boolean;
  customValueLabelFormatter?: Function;
  customFilterFunction?: any;
  handleSubmitOnEnter?: any;
}
