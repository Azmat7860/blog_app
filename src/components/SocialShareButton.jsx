import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaWhatsappSquare, FaYoutubeSquare, FaLinkedin} from 'react-icons/fa'

const SocialShareButton = ({url, title}) => {
  return (
    <div className='w-full flex justify-between'>
        <a href="https://www.facebook.com" target='_blank' rel='noreferrer'>
            <FaFacebookSquare className='text-[#3b5998] w-12 h-auto' />
        </a>
        <a href="https://www.twitter.com" target='_blank' rel='noreferrer'>
            <FaTwitterSquare className='text-[#00acee] w-12 h-auto' />
        </a>
        <a href="https://www.whatsapp.com" target='_blank' rel='noreferrer'>
            <FaWhatsappSquare className='text-[#25D366] w-12 h-auto' />
        </a>
        <a href="https://www.youtube.com" target='_blank' rel='noreferrer'>
            <FaYoutubeSquare className='text-[#ff0000] w-12 h-auto' />
        </a>
        <a href="https://www.linkedin.com" target='_blank' rel='noreferrer'>
            <FaLinkedin className='text-[#006fee] w-12 h-auto' />
        </a>
    </div>
  )
}

export default SocialShareButton