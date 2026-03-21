import React from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import FloatingObjects from './FloatingObjects'

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls enableZoom={false} enablePan={false} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00f5ff" />
      
      <FloatingObjects />
    </>
  )
}

export default Scene