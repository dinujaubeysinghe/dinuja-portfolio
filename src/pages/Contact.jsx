import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
    return (
     <div className="min-h-screen flex flex-col items-center mt-36 px-4 md:px-6">
        <h2 className="text-3xl md:text-7xl font-bold mb-8 md:mb-16 text-center">
        Let's Talk 
        </h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-4 w-full max-w-4xl">
        <div className="w-full md:w-1/2 rounded-2xl p-6 flex flex-col gap-4 bg-white/2 border border-white/5">
          <h3 className="text-xl font-main font-semibold text-white">Dinuja Ubeysinghe</h3>
          <p className="text-sm text-white/70">Frontend Developer • React</p>
          <div className="mt-2">
            <a href="mailto:contact.dinuja@gmail.com" className="block text-sm text-white/80">contact.dinuja@gmail.com</a>
            <a href="tel:+94766154657" className="block text-sm text-white/80">+94 76 615 4657</a>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/94766154657" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      <div className="border-2 border-white/50 rounded-2xl w-full md:w-1/2 flex flex-col justify-center gap-4 p-4">
      <label className="text-sm text-white font-main">Name</label>
      <input required name="name" aria-required="true" type="text" placeholder="Dinuja Ubeysinghe" className="w-full p-2 bg-transparent border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30" />
      <label className="text-sm text-white font-main">Email</label>
      <input required name="email" aria-required="true" type="email" placeholder="Email@domain.com" className="w-full p-2 bg-transparent border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30" />
      <label className="text-sm text-white font-main">Message</label>
      <textarea required name="message" aria-required="true" placeholder="Message" className="w-full p-2 bg-transparent border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30 h-32 resize-none"></textarea>
        <button className="font-main text-sm font-medium mt-6 inline-block px-10 py-3 rounded-full border border-white/20 text-black bg-white hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer">
          Send
        </button>
        
      </div>
     </div>
    </div>
  )
}

export default Contact
