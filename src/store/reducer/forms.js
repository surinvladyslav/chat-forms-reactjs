import {actions} from "./index";

const formsReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case actions.FORM_DATA:
            return {...state, formData: payload}
        case actions.FORM_ID:
            return {...state, formId: payload}
        case actions.ABOUT_FORM:
            return {...state, aboutForm: payload}
        case actions.AUTH:
            return {...state, auth: payload}
        case actions.DATA:
            return {...state, data: payload}
        case actions.FORM:
            return {...state, form: payload}
        default:
            return state
    }
}

export default formsReducer;