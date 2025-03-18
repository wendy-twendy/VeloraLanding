'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <div className="spline-container w-full h-full overflow-hidden">
        <Spline
          scene={scene}
          className={`${className} scale-[1.15] sm:scale-[1.25] origin-center`}
        />
      </div>
    </Suspense>
  )
}
