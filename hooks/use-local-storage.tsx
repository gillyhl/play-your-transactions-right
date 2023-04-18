import { useMemo } from "react"

const useLocalStorage = () => useMemo(() => {
  if (typeof window === "undefined") return {
    setValue: (key: string, value: unknown) => {},
    getValue: (key: string) => {
      return null
    }
  }

  const setValue = (key: string, value: unknown) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  const getValue = <T,>(key: string): T | null => {
    const value = window.localStorage.getItem(key)
    return value && JSON.parse(value)
  }

  return {
    setValue,
    getValue
  }
}, [])

export default useLocalStorage