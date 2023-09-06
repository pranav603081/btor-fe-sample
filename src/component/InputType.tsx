import { IInputTypes } from "../interface/popup";

const InputType = (props: IInputTypes) => {
    const { type, handleOnChange, options, name, checked, value } = props;
    return (
        <>
            {(() => {
                switch (type) {
                    case 'text': {
                        return <input type="text" onChange={handleOnChange} name={name}></input>
                    }
                    case 'checkbox': {
                        return <input type="checkbox" onChange={handleOnChange} name={name} checked={checked}></input>
                    }
                    case 'select': {
                        return (
                            <select onChange={handleOnChange} name={name} value={value}>
                                {options && options.map((item: any, index: number) => <option value={item.id} key={index}>{item.value}</option>)}
                            </select>
                        )
                    }
                    default: {
                        return <h1>No input element</h1>
                    }
                }
            })()}
        </>
    )
}

export default InputType;