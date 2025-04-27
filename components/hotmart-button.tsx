"use client"

import { useEffect, useRef } from "react"

export function HotmartButton() {
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This ensures the Hotmart button is properly initialized
    // after the component mounts and the script is loaded
    const timer = setTimeout(() => {
      if (window.Hotmart && buttonRef.current) {
        // Force re-render of Hotmart button if needed
        const currentHTML = buttonRef.current.innerHTML
        buttonRef.current.innerHTML = currentHTML
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div ref={buttonRef} className="flex justify-center">
      <a href="https://pay.hotmart.com/C99176579W?checkoutMode=2" className="hotmart-fb hotmart__button-checkout">
        <img src="https://static.hotmart.com/img/btn-buy-green.png" alt="Comprar agora" />
      </a>
    </div>
  )
}
