import { useState } from 'react'
import { Grid } from '@giphy/react-components'
import { gf, GifObject } from '../../utils/giphy'

interface StickerPickerProps {
  onStickerSelect: (gif: GifObject) => void
  onClose: () => void
}

export default function StickerPicker({ onStickerSelect, onClose }: StickerPickerProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const fetchGifs = (offset: number) => {
    if (searchTerm) {
      return gf.search(searchTerm, { offset, limit: 20, type: 'stickers' })
    } else {
      return gf.trending({ offset, limit: 20, type: 'stickers' })
    }
  }

  const handleGifClick = (gif: any, e: React.SyntheticEvent<HTMLElement, Event>) => {
    e.preventDefault()
    onStickerSelect(gif as GifObject)
    onClose()
  }

  return (
    <div 
      className="absolute bottom-[50px] left-0 bg-white border shadow-lg rounded-lg p-4 w-[400px] h-[300px] z-20"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">Stickers</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
      
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search stickers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="h-[200px] overflow-y-auto">
        <Grid
          key={searchTerm} // Re-render grid when search changes
          width={360}
          columns={4}
          gutter={6}
          fetchGifs={fetchGifs}
          onGifClick={handleGifClick}
          noLink={true}
          hideAttribution={true}
        />
      </div>
      
      <div className="text-xs text-gray-500 mt-2 text-center">
        Powered by GIPHY
      </div>
    </div>
  )
} 