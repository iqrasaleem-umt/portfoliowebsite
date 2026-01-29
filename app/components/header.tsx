import Image from 'next/image'

export default function Header() {
  return (
    <div className="bg-green-800 w-full flex flex-col sm:flex-row items-center justify-between px-4 py-2 sm:py-1 h-auto sm:h-8">
      
      {/* Left Section: IQRASALEEM MADE */}
      <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-0">
        <p className="text-white text-sm sm:text-base">IQRASALEEM</p>
        <p className="text-green-300 text-sm sm:text-base">MADE</p>
      </div>

      {/* Center Section: Portfolio with Arrows */}
      <div className="flex items-center space-x-1 sm:space-x-2">
        
        {/* Backward Arrow */}
        <Image
          src="/arrowback.png"
          height={12}
          width={12}
          alt="backward arrow"
          className="filter invert"
        />

        {/* Portfolio Text */}
        <p className="text-white text-center text-sm sm:text-base">Portfolio</p>

        {/* Forward Arrow */}
        <Image
          src="/arrowfor.png"
          height={12}
          width={12}
          alt="forward arrow"
          className="filter invert"
        />
      </div>

    </div>
  )
}

