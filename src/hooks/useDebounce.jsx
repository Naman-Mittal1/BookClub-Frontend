import {useState, useEffect} from 'react'

const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(()=>{
        const id = setTimeout(()=>{
            console.log("setting timeout")
            setDebouncedValue(value)
        }, delay)
        return ()=>{
            console.log("Clear timeout")
            clearTimeout(id)
        }
    }, [value, delay])
  return debouncedValue
}

export default useDebounce