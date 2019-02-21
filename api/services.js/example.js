import ApiClient from '../client'

export default {
  post: data => {
    const requestPath = process.env.baseUrl
    const requestParams = ''
    const params = {}

    return ApiClient.request(requestPath, requestParams, params, data, 'POST')
  },
  postEncodedData: data => {
    const requestPath = process.env.baseUrl
    const requestParams = ''
    const params = {}

    const encodedData = JSON.stringify(data)

    return ApiClient.request(
      requestPath,
      requestParams,
      params,
      encodedData,
      'POST'
    )
  },
  get: () => {
    const requestPath = process.env.baseUrl
    const requestParams = ''
    // const params = {}

    return ApiClient.request(requestPath, requestParams)
  },
}
