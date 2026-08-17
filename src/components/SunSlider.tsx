import { useState, useRef, useCallback } from 'react'

interface SunSliderProps {
  onPositionChange: (percent: number) => void
}

function SunSlider({ onPositionChange }: SunSliderProps) {
  
  //How far up the track the sun is, as a percent (0 = bottom, 100 = top)
  const [sunPosition, setSunPosition] = useState(20)

  //Reference to the track div, so we can measure its size/position on screen
  const trackRef = useRef<HTMLDivElement>(null)

  //Whether the user is currently holding down and dragging the sun
  const isDragging = useRef(false)

  //Stores the ID of the current requestAnimationFrame call (or null if none is scheduled)
  const animationFrameRequest = useRef<number | null>(null)

  //Stores the latest mouse/touch Y position while we wait for the next animation frame
  const pendingPointerY = useRef<number | null>(null)

  //Calculates the sun's new position based on pointer Y, but only updates
  //once per animation frame instead of on every single pixel of movement
  const updatePosition = useCallback((clientY: number) => {

    //Save the latest pointer position
    pendingPointerY.current = clientY

    //If we already have an update scheduled for this frame, don't schedule another
    if (animationFrameRequest.current !== null) return

    //Schedule the actual position update for the next screen repaint
    animationFrameRequest.current = requestAnimationFrame(() => {
      if (!trackRef.current || pendingPointerY.current === null) return

      //Get the track's position/size on screen
      const rect = trackRef.current.getBoundingClientRect()

      //Figure out how far down the track the pointer is
      const relativeY = pendingPointerY.current - rect.top

      //Convert that into a percent, flipped so 0 = bottom and 100 = top
      let percent = 100 - (relativeY / rect.height) * 100

      //Keep the percent between 0 and 100 (can't drag past the track)
      percent = Math.max(0, Math.min(100, percent))

      //Update the sun's position and tell the parent component about it
      setSunPosition(percent)
      onPositionChange(percent)

      //Clear the scheduled frame so the next move can schedule a new one
      animationFrameRequest.current = null
    })
  }, [onPositionChange])

  //Runs when the user first clicks/taps the sun
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true

    //Lock all future pointer events to this element, even if the cursor
    //moves outside the sun or the track while dragging
    e.currentTarget.setPointerCapture(e.pointerId)

    updatePosition(e.clientY)
  }

  //Runs while the pointer moves, but only does anything if we're dragging
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return
    updatePosition(e.clientY)
  }

  //Runs when the user releases the mouse/touch
  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false

    //Give up control of the pointer now that dragging is done
    e.currentTarget.releasePointerCapture(e.pointerId)
  }

  return (
    //The vertical track the sun slides along
    <div
      ref={trackRef}
      className="absolute right-4 sm:right-6 md:right-10 top-24 sm:top-20 bottom-24 sm:bottom-20 w-2 bg-white/20 rounded-full z-20"
    >
      {/* The draggable sun itself */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="absolute w-8 h-8 rounded-full cursor-grab active:cursor-grabbing shadow-lg"
        style={{
          //Positions the sun vertically based on its current percent

          bottom: `${sunPosition}%`,
          left: '50%',

          //Centers the sun on the track (instead of its edge lining up with it)
          transform: 'translate(-50%, 50%)',

          //Gives the sun a glowing yellow look
          background: 'radial-gradient(circle, #fff7cc, #ffcc33)',
          boxShadow: '0 0 20px 6px rgba(255, 204, 51, 0.8)',
        }}
      />
    </div>
  )
}

export default SunSlider