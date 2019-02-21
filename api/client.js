import axios from 'axios'

export default {
  request: (requestPath, requestParams, params, data, method) => {
    const options = {
      url: requestPath + requestParams,
      method: method || 'GET',
      data: data || {},
      params: params || {},
      headers: method === 'POST' ? { 'Content-type': 'application/json' } : {},
    }

    // console.log('header', axios(options))

    return axios(options)
      .then(response => {
        // console.log('response from api', response)
        return response.data
      })
      .catch(error => console.log('error', error))
  },
}
