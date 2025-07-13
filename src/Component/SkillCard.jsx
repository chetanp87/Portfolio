// import React from 'react'

// const SkillsCard = ({ icon: Icon, label }) => {
//   return (
//      <div>
//       <div className="border-2 bg-black-900/10 rounded-md p-4 sm:p-5 md:p-6 w-36 sm:w-44 md:w-48 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
//         <Icon className="" size={64} />
//         <p className="mt-2 text-sm sm:text-base text-white text-center">{label}</p>
//       </div>
//     </div>
//   )
// }

// export default SkillsCard


import React from 'react';

const SkillsCard = ({ icon: Icon, label }) => {
  return (
    <div className="border border-gray-700 bg-[#1f1f1f] rounded-xl p-5 w-36 sm:w-44 md:w-48 h-40 flex flex-col items-center justify-center hover:scale-110 hover:shadow-lg hover:border-gray-500 transition-all duration-300">
      {/* Icon inside circle */}
      <div className="bg-[#2c2c2c] p-4 rounded-full mb-3">
        <Icon className="text-white text-3xl" />
      </div>
      
      {/* Skill label */}
      <p className="text-sm sm:text-base text-gray-200 text-center font-medium">
        {label}
      </p>
    </div>
  );
};

export default SkillsCard;
