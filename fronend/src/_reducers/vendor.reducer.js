import { userService } from '../_services/';

const initialState = { anchor: 'left',
    vendor: [],
    open: false,
    id: '',  
    name: '',
    mobile: '',
    phone: '',
    address: ''
 };


export function vendor(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_VENDOR':
            console.log('====================================');
            console.log('FETCHED');
            console.log('====================================');
            let apiEndpoint = 'vendors';
        return userService.getWithHeader(apiEndpoint, action.headers)
        .then((response)=>{
            console.log('response', response);
            return {
                ...state,
                vendor: response.data
            };
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
            
        case 'VENDOR_DETAIL':
            return {
                ...state,
                id: action.id,  
                name: action.name,
                mobile: action.mobile,
                phone: action.phone,
                address: action.address
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };    
        default:
            return state
    }
  }