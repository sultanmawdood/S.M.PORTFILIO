import React from 'react'
import { motion } from 'framer-motion'

const Robot = () => {
  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Robot Container */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* Head */}
        <motion.div 
          className="relative mx-auto w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl shadow-2xl"
          animate={{ 
            rotate: [-5, 5, -5],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Antenna */}
          <motion.div 
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-t from-cyan-400 to-purple-500 rounded-full"
            animate={{ 
              scaleY: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
            }}
          >
            <motion.div 
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 10px rgba(168, 85, 247, 0.5)",
                  "0 0 20px rgba(168, 85, 247, 0.8)",
                  "0 0 10px rgba(168, 85, 247, 0.5)"
                ]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Eyes */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-6">
            <motion.div 
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 0.1, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <div className="w-3 h-3 bg-black rounded-full" />
            </motion.div>
            <motion.div 
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 0.1, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <div className="w-3 h-3 bg-black rounded-full" />
            </motion.div>
          </div>

          {/* Mouth */}
          <motion.div 
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-white rounded-full"
            animate={{ 
              scaleX: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Ears/Side Panels */}
          <div className="absolute top-1/2 -left-4 w-3 h-8 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-l-full transform -translate-y-1/2" />
          <div className="absolute top-1/2 -right-4 w-3 h-8 bg-gradient-to-l from-cyan-500 to-cyan-400 rounded-r-full transform -translate-y-1/2" />
        </motion.div>

        {/* Body */}
        <motion.div 
          className="relative mx-auto mt-2 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl"
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
          }}
        >
          {/* Chest Panel */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-cyan-400/30 rounded-2xl backdrop-blur-sm">
            <motion.div 
              className="absolute top-2 left-2 w-4 h-4 bg-green-400 rounded-full"
              animate={{ 
                opacity: [1, 0.3, 1],
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
              }}
            />
            <motion.div 
              className="absolute top-2 right-2 w-4 h-4 bg-yellow-400 rounded-full"
              animate={{ 
                opacity: [0.3, 1, 0.3],
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
              }}
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-cyan-300 rounded-full" />
          </div>

          {/* Arms */}
          <motion.div 
            className="absolute top-8 -left-8 w-6 h-24 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"
            animate={{ 
              rotate: [0, -20, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
            }}
            style={{ transformOrigin: 'top center' }}
          >
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-full shadow-lg" />
          </motion.div>
          <motion.div 
            className="absolute top-8 -right-8 w-6 h-24 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"
            animate={{ 
              rotate: [0, 20, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
            }}
            style={{ transformOrigin: 'top center' }}
          >
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-full shadow-lg" />
          </motion.div>
        </motion.div>

        {/* Legs */}
        <div className="relative mx-auto mt-2 flex gap-4 justify-center">
          <motion.div 
            className="w-8 h-20 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"
            animate={{ 
              scaleY: [1, 0.95, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
            }}
          >
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-cyan-500 rounded-full shadow-lg" />
          </motion.div>
          <motion.div 
            className="w-8 h-20 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"
            animate={{ 
              scaleY: [1, 0.95, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
            }}
          >
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-cyan-500 rounded-full shadow-lg" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

export default Robot
