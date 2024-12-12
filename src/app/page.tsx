import {Github, Linkedin, User } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-300 flex flex-col items-center px-4 py-8">
      {/* Profile Section */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
        <Image
          src="/profile.webp"
          alt="Profile"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Name and Status */}
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold flex items-center gap-1 justify-center text-black">
          Nitin Sahu
        </h1>
        <p className="text-gray-700">flawlessnitin on WEB!!!!!!</p>
      </div>

      {/* Links */}
      <div className="w-full max-w-md space-y-12">
        <a 
          href="#" 
          className="block bg-pink-400 hover:bg-pink-500 text-black py-3 px-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
        >
          <div className="flex items-center justify-center gap-2">
            <Github className="w-5 h-5" />
            <span>Github</span>
          </div>
        </a>

        <a 
          href="#" 
          className="block bg-cyan-400 hover:bg-cyan-500 text-black py-3 px-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
        >
          <div className="flex items-center justify-center gap-2">
            <Twitter className="w-5 h-5" />
            <span>Twitter</span>
          </div>
        </a>

        <a 
          href="#" 
          className="block bg-purple-400 hover:bg-purple-500 text-black py-3 px-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
        >
          <div className="flex items-center justify-center gap-2">
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </div>
        </a>

        <a 
          href="#" 
          className="block bg-orange-400 hover:bg-orange-500 text-black py-3 px-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
        >
          <div className="flex items-center justify-center gap-2">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </div>
        </a>

        <a 
          href="#" 
          className="block bg-green-400 hover:bg-green-500 text-black py-3 px-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
        >
          <div className="flex items-center justify-center gap-2">
            <User className="w-5 h-5" />
            <span>Discord</span>
          </div>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-12 bg-white/20 px-4 py-2 rounded">
        <span className="font-bold">BIO.LINK</span>
      </div>
    </div>
  )
}

