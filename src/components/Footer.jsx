import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='py-8 border-t border-b border-white/20 '>
      <div className='flex justify-center gap-4 mx-24'>
        <a href='https://linkedin.com' target='_blank' rel='noreferrer' aria-label='LinkedIn' className='text-white hover:text-slate-400'>
          <FaLinkedin size={20} />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noreferrer' aria-label='Instagram' className='text-white hover:text-slate-400'>
          <FaInstagram size={20} />
        </a>
        <a href='https://wa.me/' target='_blank' rel='noreferrer' aria-label='WhatsApp' className='text-white hover:text-slate-400'>
          <FaWhatsapp size={20} />
        </a>
      </div>
      <div className='text-center text-white font-main text-3xl md:text-[124px]'>
        DINUJA UBEYSINGHE
      </div>
      
      <div className='mx-24 '>
        <p className='text-center text-white mt-4 text-sm font-main'>
          &copy; {new Date().getFullYear()} Dinuja Ubeysinghe. All rights reserved.
        </p>
      </div>
      
    </footer>
  )
}

export default Footer
