import axios from './axios';

export const getAllTracks = () => axios.get('track/all')