import * as actionTypes from './constants'
import { 
    getResultListRequest,
} from '@/api/request'

const changeResult = (data) => ({
    type: actionTypes.SET_RESULT_LIST,
    data
})

export const changeEnterLoading = (data) => ({
    type: actionTypes.SET_ENTER_LOADING,
    data
})

export const getResultList = (query) => {
    return (dispatch) => {
        getResultListRequest(query) 
            .then((data) => {
                if(data.data == null){
                    dispatch(changeResult(''))
                }                 
                let res = data.data.topics || []
                console.log(res);
                dispatch(changeResult(res))
            })
    }
}