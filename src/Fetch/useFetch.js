import React, { useState, useEffect } from 'react'

export function useFetch(urlEnd) {

    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    const url = 'https://time-organizer-249d2-default-rtdb.europe-west1.firebasedatabase.app' + urlEnd

    const fetchFunc = async () => {
        try {
            if (!url) return
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
            setLoading(false)
        } catch(e) {
            setError(e)
        }
    }

    useEffect(() => {
        fetchFunc()
    }, [url])

    return {
        loading,
        data,
        error
    }
} 
