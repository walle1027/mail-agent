import React from 'react'
import { IconType } from 'react-icons/lib'

const FeatureCard = ({ icon: Icon, title, description }: { icon: IconType; title: string; description: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-200">
      <Icon size={34} />
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 font-light">{description}</p>
    </div>
  )
}

export default FeatureCard
