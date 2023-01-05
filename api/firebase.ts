import axios, {AxiosError} from "axios";

// Create ax - Axios instance
const ax = axios.create(
  {
    baseURL: process.env.REACT_APP_DB_URL,
  });

export let firebaseApi = {
  getStorageItems(uid:string, authToken:string) {
    try {
      return ax.get(`/fav/${uid}.json?auth=${authToken}`)
    } catch (e: unknown) {
      const err = e as Error | AxiosError
      throw new Error(err.message)
    }
  },

  addStorageItem(uid:string, authToken:string, payload:string) {
    try {
      return ax.post(`/fav/${uid}.json?auth=${authToken}`, payload)
    } catch (e: unknown) {
      const err = e as Error | AxiosError
      throw new Error(err.message)
    }
  },

  delStorageItem (uid:string, authToken:string, key:string) {
    try {
      return ax.delete(`/fav/${uid}/${key}.json?auth=${authToken}`)
    } catch (e: unknown) {
      const err = e as Error | AxiosError
      throw new Error(err.message)
    }
  }
}