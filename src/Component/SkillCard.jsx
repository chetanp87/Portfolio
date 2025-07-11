import React from 'react'

const SkillsCard = ({ icon: Icon, label }) => {
  return (
     <div>
      <div className="border-2 border-purple-500 rounded-md p-4 sm:p-5 md:p-6 w-36 sm:w-44 md:w-48 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
        <Icon className="" size={64} />
        <p className="mt-2 text-sm sm:text-base text-white text-center">{label}</p>
      </div>
    </div>
  )
}

export default SkillsCard
