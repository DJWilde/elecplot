import { useState } from 'react'

const useModal = () => {
  const [isShown, setShown] = useState(false)

  const toggle = () => {
    setShown(!isShown)
  }

  return {
    isShown,
    toggle
  }
}

export default useModal