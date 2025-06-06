import API from "../_api"

export const getAuthors = async () => {
  const { data } = await API.get('/authors') // endpoint
  return data.data
}