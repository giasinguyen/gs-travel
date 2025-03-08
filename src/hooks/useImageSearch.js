"use client"

import { useState, useEffect } from "react"

export const useImageSearch = (query) => {
  const [images, setImages] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true)
      try {

        await new Promise((resolve) => setTimeout(resolve, 1000))

        const mockImages = Array(10)
          .fill()
          .map((_, index) => ({
            id: `img-${index}`,
            url: `/placeholder.svg?height=${300 + index * 10}&width=${400 + index * 20}&text=${query.replace(/\s+/g, "+")}`,
            title: `${query} image ${index + 1}`,
            alt: `${query} image ${index + 1}`,
          }))

        setImages(mockImages)
        setError(null)
      } catch (err) {
        console.error("Error fetching images:", err)
        setError("Failed to fetch images. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    if (query) {
      fetchImages()
    }
  }, [query])

  return { images, loading, error }
}

