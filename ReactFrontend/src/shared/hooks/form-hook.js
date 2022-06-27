import { useCallback, useReducer } from "react";

const formReducer = (state, action)=>{
    switch(action.type){
        case 'INPUT_CHANGE':
            let formisValid = true;
            for(const inputId in state.inputs){
                if(inputId === action.inputId){
                    formisValid=formisValid && action.isValid;
                }
                else{
                    formisValid = formisValid && state.inputs[inputId].isValid
                }
            }
            return {
             ...state,
                input: {
                    ...state.inputs,
                    [action.inputId]: {value: action.value, isValid: action.isValid}
                },
                isValid: formisValid
            };

        default: 
        return state;
    }

}

export const useForm =(initialInputs, initialFormValidity)=>{
   const [formState, dispatch]= useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity

    })

    const inputHandler=useCallback((id, value, isValid)=>{
        dispatch({type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id})
    }, []);

    return [formState, inputHandler];
}