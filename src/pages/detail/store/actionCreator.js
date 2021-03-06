import * as actionType from './actionType.js';
import axios from 'axios';
import { fromJS } from 'immutable';

const setDetail=(data)=>{
	return {
		type: actionType.SET_DETAIL,
		detailList: fromJS(data)
	}
}

export const getDetail = (id) =>{
	return ((dispatch)=>{
		axios.get('/api/detail.json?id='+id)
		.then((res)=>{
			const data = res.data;
			if(data.success){
				dispatch(setDetail(data.data));
			}
		})
	})
}

export const isPageDetail = (status) =>{
	return{
		type: actionType.IS_PAGE_DETAIL,
		status:status
	}
}

export const changeHeader = (status) =>{
	return{
		type: actionType.CHANGE_HEADER,
		status:status
	}
}