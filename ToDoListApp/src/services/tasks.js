import axios from "axios"
const basedUrl = '/api/tasks'

const getAll = () => {
  const req = axios.get(basedUrl)
  return req.then(res => res.data)
}

const create = (newObject) => {
  const req = axios.post(basedUrl, newObject)
  return req.then(res => res.data)
}

const update = (id, newObject) => {
  const req = axios.put(`${basedUrl}/${id}`, newObject)
  return req.then(res => res.data)
}

const remove = (id) => {
  return axios.delete(`${basedUrl}/${id}`)
}

export default {
  getAll,
  create,
  delete: remove,
  update
}