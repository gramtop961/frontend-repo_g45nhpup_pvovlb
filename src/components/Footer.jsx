export default function Footer(){
  return (
    <footer className="relative mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-cyan-400/20"></div>
        <div className="py-8 grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-sm text-slate-400">
          <div className="flex gap-4">
            <a href="#login" className="hover:text-cyan-200">Login</a>
            <a href="#signup" className="hover:text-cyan-200">Signup</a>
            <a href="#privacy" className="hover:text-cyan-200">Privacy</a>
            <a href="#docs" className="hover:text-cyan-200">Docs</a>
          </div>
          <div className="text-center text-slate-500">© {new Date().getFullYear()} SecureVision. All rights reserved.</div>
          <div className="sm:text-right">
            <select className="bg-slate-900/60 border border-cyan-400/20 rounded-md px-2 py-1 text-slate-300">
              <option>English</option>
              <option>Hindi</option>
              <option>Gujarati</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}
