import { useState } from 'react'

export function useStorage(key, fallback) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) : fallback
    } catch {
      return fallback
    }
  })

  function set(newValue) {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  function clear() {
    setValue(fallback)
    localStorage.removeItem(key)
  }

  return [value, set, clear]
}
