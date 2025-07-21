import { GiphyFetch } from '@giphy/js-fetch-api'

export const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API_KEY!)

export interface GifObject {
  id: string
  title: string
  images: {
    fixed_height: {
      url: string
      width: string
      height: string
    }
    fixed_width_small: {
      url: string
      width: string
      height: string
    }
  }
} 