import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const Contact = () => {
  const formRef = useRef(null)
  const statusTimerRef = useRef(null)
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 0)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!status) return undefined

    statusTimerRef.current = setTimeout(() => {
      setStatus('')
    }, 5500)

    return () => {
      if (statusTimerRef.current) {
        clearTimeout(statusTimerRef.current)
      }
    }
  }, [status])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const name = String(formData.get('from_name') ?? '').trim()
    const email = String(formData.get('reply_to') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name || !email || !message) return

    try {
      setIsSending(true)
      setStatus('')

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )

      setStatus('Message sent successfully.')
      formRef.current.reset()
    } catch {
      setStatus('')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center mt-36 px-4 md:px-6">
      <h2
        className="text-3xl md:text-7xl font-bold mb-8 md:mb-16 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
        }}
      >
        Let's Talk
      </h2>

      <motion.div
        className="flex flex-col md:flex-row gap-6 md:gap-8 mt-4 mb-16 w-full max-w-4xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <motion.div
          className="w-full md:w-1/2 rounded-2xl p-6 flex flex-col gap-4 bg-white/2 border border-white/5"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <h3 className="text-xl font-main font-semibold text-white">
            Dinuja Ubeysinghe
          </h3>

          <p className="text-sm text-white/70">
            Frontend Developer • React
          </p>

          <div className="mt-2">
            <a
              href="mailto:contact.dinuja@gmail.com"
              className="block text-sm text-white/80"
            >
              contact.dinuja@gmail.com
            </a>

            <a
              href="tel:+94766154657"
              className="block text-sm text-white/80"
            >
              +94 76 615 4657
            </a>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/dinuja-ubeysinghe-620317311/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={20} />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/_ubey_____/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram size={20} />
            </motion.a>

            <motion.a
              href="https://wa.me/94766154657"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="border-2 border-white/50 rounded-2xl w-full md:w-1/2 flex flex-col justify-center gap-4 px-4 pt-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <label className="text-sm text-white font-main">Name</label>
          <input
            required
            name="from_name"
            aria-required="true"
            type="text"
            placeholder="Dinuja Ubeysinghe"
            className="w-full p-2 bg-transparent border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30"
          />

          <label className="text-sm text-white font-main">Email</label>
          <input
            required
            name="reply_to"
            aria-required="true"
            type="email"
            placeholder="Email@domain.com"
            className="w-full p-2 bg-transparent border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30"
          />

          <label className="text-sm text-white font-main">Message</label>
          <textarea
            required
            name="message"
            aria-required="true"
            placeholder="Message"
            className="w-full p-2 bg-transparent border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30 h-32 resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={isSending}
            className="font-main text-sm font-medium mt-2 inline-block px-10 py-3 rounded-full border border-white/20 text-black bg-white hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? 'Sending...' : 'Send'}
          </button>

          <div className="h-14">
            {status ? (
              <p
                aria-live="polite"
                className="text-sm font-main text-green-300 border border-green-500/20 bg-green-500/10 px-3 py-2 rounded-md text-center"
              >
                {status}
              </p>
            ) : null}
          </div>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default Contact