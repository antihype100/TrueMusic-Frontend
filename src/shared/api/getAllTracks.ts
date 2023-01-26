import axios from './axios';

export const getAllTracks = () => {
    return axios.get('track/all')
}