import * as React from "react"
const Cash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_cash)">
      {/* Stack of bills - back bill */}
      <rect x="3" y="6" width="12" height="8" rx="1" fill="#2D5A3D" stroke="#1F4A32" strokeWidth="0.5"/>
      
      {/* Stack of bills - middle bill */}
      <rect x="2.5" y="5" width="12" height="8" rx="1" fill="#4A7C59" stroke="#2D5A3D" strokeWidth="0.5"/>
      
      {/* Stack of bills - front bill */}
      <rect x="2" y="4" width="12" height="8" rx="1" fill="#68B67A" stroke="#4A7C59" strokeWidth="0.5"/>
      
      {/* Dollar sign on front bill */}
      <text x="8" y="9" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#FFFFFF">$</text>
      
      {/* Decorative corners on front bill */}
      <circle cx="3.5" cy="5.5" r="0.3" fill="#85E094"/>
      <circle cx="12.5" cy="5.5" r="0.3" fill="#85E094"/>
      <circle cx="3.5" cy="10.5" r="0.3" fill="#85E094"/>
      <circle cx="12.5" cy="10.5" r="0.3" fill="#85E094"/>
      
      {/* Coins */}
      <circle cx="15.5" cy="9.5" r="2" fill="#FFD700" stroke="#E6C200" strokeWidth="0.5"/>
      <text x="15.5" y="10.2" textAnchor="middle" fontSize="2.5" fontWeight="bold" fill="#B8860B">¢</text>
      
      <circle cx="14" cy="12" r="1.5" fill="#C0C0C0" stroke="#A0A0A0" strokeWidth="0.5"/>
      <text x="14" y="12.5" textAnchor="middle" fontSize="2" fontWeight="bold" fill="#808080">¢</text>
    </g>
    <defs>
      <clipPath id="clip0_cash">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)
export default Cash 