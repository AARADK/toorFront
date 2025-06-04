'use client'
import { useEffect, useState } from 'react'

const CountdownTimer = ({ targetTime }: { targetTime: number }) => {
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetTime - Date.now())
    }, 1000)
    return () => clearInterval(interval)
  }, [targetTime])

  const hours = Math.floor(timeLeft / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
  const seconds = Math.floor((timeLeft / 1000) % 60)

  return (
    <p className="text-red-500 text-4xl font-extrabold text-right whitespace-nowrap" style={{letterSpacing: '1px'}}>
      {`${hours.toString().padStart(2, '0')} : ${minutes
        .toString()
        .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`}
    </p>
  )
}

export default CountdownTimer
