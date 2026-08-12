import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='py-8 border-t border-b border-white/20 transition-colors '>
      <div className='flex justify-center gap-4 mx-24 mb-4'>
        <a href='https://www.linkedin.com/in/dinuja-ubeysinghe-620317311/' 
        target='_blank' 
        rel='noreferrer' 
        aria-label='LinkedIn' 
        className='text-white/80 hover:text-white hover:scale-112 transition-transform duration-300'>
          <FaLinkedin size={20} />
        </a>
        <a href='https://github.com/dinujaubeysinghe' 
        target='_blank' 
        rel='noreferrer' 
        aria-label='GitHub' 
        className='text-white/80 hover:text-white hover:scale-112 transition-transform duration-300'>
          <FaGithub size={20} />
        </a>
        <a href='https://www.instagram.com/_ubey_____/' 
        target='_blank' 
        rel='noreferrer' 
        aria-label='Instagram' 
        className='text-white/80 hover:text-white hover:scale-112 transition-transform duration-300'>
          <FaInstagram size={20} />
        </a>
        <a href='https://wa.me/94711120704' 
        target='_blank' 
        rel='noreferrer' 
        aria-label='WhatsApp' 
        className='text-white/80 hover:text-white hover:scale-112 transition-transform duration-300'>
          <FaWhatsapp size={20} />
        </a>
      </div>
      <div className='text-center text-white font-main text-3xl md:text-[124px]'>
        DINUJA UBEYSINGHE
      </div>
      
      <div className='lg:mx-24 '>
        <p className='text-center text-white mt-4 text-xs lg:text-sm font-main'>
          &copy; {new Date().getFullYear()} Dinuja Ubeysinghe. All rights reserved.
        </p>
      </div>
      
    </footer>
  )
}

export default Footer
