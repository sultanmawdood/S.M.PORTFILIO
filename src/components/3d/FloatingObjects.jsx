import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

const FloatingObjects = () => {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[2, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#00f5ff" wireframe />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[-2, 1, -1]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#ff00ff" wireframe />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
        <mesh position={[0, -1, 2]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial color="#00ff00" wireframe />
        </mesh>
      </Float>
    </group>
  )
}

export default FloatingObjects