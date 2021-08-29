import { useEffect, useState } from 'react'

const PREFIX = 'whatapp-clone-'

//retrieve info from localstorage

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)

        // if there is something in LS
        if (jsonValue !== null) return JSON.parse(jsonValue)

        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })

    //save info to LS

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}
