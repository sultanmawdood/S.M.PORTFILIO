import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiGit, 
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker
} from 'react-icons/si'

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 95 },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', level: 92 },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 88 },
    { name: 'React', icon: SiReact, color: '#61DAFB', level: 90 },
    { name: 'Three.js', icon: SiThreedotjs, color: '#000000', level: 78 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 94 },
    { name: 'Framer Motion', icon: SiFramer, color: '#0055FF', level: 82 },
    { name: 'Git', icon: SiGit, color: '#F05032', level: 85 }
  ]

  const backendSkills = [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 80 },
    { name: 'MongoDB', icon: SiMongodb, color: '#13AA52', level: 82 },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 75 },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 70 }
  ]

  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Communication', level: 90 },
    { name: 'Team Collaboration', level: 92 },
    { name: 'Project Management', level: 85 },
    { name: 'Attention to Detail', level: 94 },
    { name: 'Adaptability', level: 88 }
  ]

  const SkillCard = ({ skill, index }) => (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="glass rounded-2xl p-6 text-center group cursor-pointer"
    >
      <div className="mb-4 flex justify-center">
        <skill.icon 
          size={48} 
          style={{ color: skill.color }}
          className="group-hover:animate-bounce"
        />
      </div>
      <h3 className="text-lg font-semibold mb-3 text-white">{skill.name}</h3>
      
      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
        />
      </div>
      <span className="text-sm text-gray-400">{skill.level}%</span>
    </motion.div>
  )

  const SoftSkillCard = ({ skill, index }) => (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-xl p-4"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-white font-semibold">{skill.name}</h4>
        <span className="text-cyan-400 font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-cyan-400">Skills</span> & <span className="text-purple-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels 
            in modern web development technologies, frameworks, and soft skills that 
            make me an effective developer and team member.
          </p>
        </motion.div>

        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            <span className="text-cyan-400">Frontend</span> Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            <span className="text-purple-400">Backend</span> Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {backendSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            <span className="text-pink-400">Soft</span> Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <SoftSkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-2xl p-8 border border-cyan-400/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Why These <span className="text-cyan-400">Skills Matter</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Modern Stack</h4>
              <p className="text-gray-300">
                I stay current with the latest technologies and frameworks, ensuring your projects 
                are built with cutting-edge tools and best practices.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-3">Full-Stack Capability</h4>
              <p className="text-gray-300">
                From frontend to backend, I can handle complete project development, reducing 
                coordination overhead and ensuring seamless integration.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-3">Soft Skills</h4>
              <p className="text-gray-300">
                Strong communication and collaboration skills ensure smooth project execution 
                and clear understanding of your requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
