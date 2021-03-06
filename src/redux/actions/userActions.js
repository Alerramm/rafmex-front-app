import { USER_INIT, USER_SUCCESS, USER_ERROR  } from '../types';
import axios from '../../config/axios';

export const userInicio = () => {
    return { type: USER_INIT };
};
export const userExito = (configuration, programas) => {
    return { type : USER_SUCCESS, payload : {configuration, programas}};
};
export const userError = () => {
    return { type:  USER_ERROR };
};

export const userCargaAction = () => {
    return (dispatch, getState) => {
        dispatch(userInicio());
/*
        const { token, perfil } = getState().login.access_token;
        let configuration, programs = {};
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        };
        axios.get('/cargaConfiguracionEPE',options).then(result => {
            configuration = result.data.dsal ? result.data.dsal : {}
            axios.post('/programs',{perfil , "ui" : "EPE"},options).then(resultProgram => {
                programs = resultProgram.data.dsal ? resultProgram.data.dsal.programas : {};
                dispatch(userExito(configuration,programs))
            }).catch(error => {
                dispatch(userExito(configuration,[]));
            })
        }).catch(error => {
            console.log(error);
            dispatch(userError());
        });
        */
    };
};