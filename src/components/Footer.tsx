import { Dribbble, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[color:var(--primary)] text-white mt-10">
      <div className="page-container section">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <img src="/img/logo.png" alt="logo" className="h-8 w-8 rounded" />
              <span className="font-semibold">Gereja Anugerah Kristus</span>
            </div>
            <p className="mt-3 text-white/80 max-w-prose">
              Jl. Letkol Iskandar No.909, 17 Ilir, Kec. Ilir Tim. I, Kota Palembang, Sumatera Selatan 30125
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Twitter" className="glass p-2 rounded-lg"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="glass p-2 rounded-lg"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="GitHub" className="glass p-2 rounded-lg"><Github className="h-5 w-5" /></a>
              <a href="#" aria-label="Dribbble" className="glass p-2 rounded-lg"><Dribbble className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-white/85">
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Media kit</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-white/85">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Help centre</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="divider mt-10 opacity-30" />
        <div className="pt-6 text-sm text-white/75">© {new Date().getFullYear()} GAK. All rights reserved.</div>
      </div>
    </footer>
  );
}
