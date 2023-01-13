import axios, {AxiosError} from "axios";

// Create ax - Axios instance
const ax = axios.create(
  {
    baseURL: process.env.NEXT_PUBLIC_DB_URL,
  });

export let firebaseApi = {
  getStorageItems(uid:string) {
    try {
      return ax.get(`/fav/${uid}.json?auth=${uid}`)
    } catch (e: unknown) {
      const err = e as Error | AxiosError
      throw new Error(err.message)
    }
  },

  addStorageItem(uid:string, payload:string) {
    try {
      return ax.post(`/fav/${uid}.json?auth=${uid}`, payload)
    } catch (e: unknown) {
      const err = e as Error | AxiosError
      throw new Error(err.message)
    }
  },

  delStorageItem (uid:string, key:string) {
    try {
      return ax.delete(`/fav/${uid}/${key}.json?auth=${uid}`)
    } catch (e: unknown) {
      const err = e as Error | AxiosError
      throw new Error(err.message)
    }
  }
}