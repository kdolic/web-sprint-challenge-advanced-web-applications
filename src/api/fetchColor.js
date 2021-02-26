import {axiosWithAuth} from '../helpers/axiosWithAuth';

export const fetchColor = () => {
    axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }