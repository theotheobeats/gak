import { Dribbble, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
	return (
		<footer className="w-full py-12 md:py-16 lg:py-20 bg-[#0C4651] text-white">
			<div className="px-4 md:px-6">
				<div className="flex flex-col gap-8 lg:gap-12">
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6 lg:gap-12">
						<div className="col-span-4">
							<div className="space-y-4">
								<div className="flex space-x-2 ml-8 flex-col">
									<span className="text-xl font-bold">
										Gereja Anugerah Kristus
									</span>

									<p className="text-slate-100 max-w-[500px] font-light">
										Address: Jl. Letkol Iskandar No.909, 17 Ilir, Kec. Ilir Tim.
										I, Kota Palembang, Sumatera Selatan 30125
									</p>
								</div>
								<div className="flex space-x-4 ml-8">
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										<Twitter className="h-5 w-5" />
										<span className="sr-only">Twitter</span>
									</a>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										<Linkedin className="h-5 w-5" />
										<span className="sr-only">LinkedIn</span>
									</a>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										<Github className="h-5 w-5" />
										<span className="sr-only">GitHub</span>
									</a>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										<Dribbble className="h-5 w-5" />
										<span className="sr-only">Dribbble</span>
									</a>
								</div>
							</div>
						</div>
						<div className="col-span-1">
							<h3 className="text-base font-semibold">Company</h3>
							<ul className="mt-4 space-y-3 text-sm">
								<li>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										About us
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										Careers
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										Press
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										News
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										Media kit
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div className="col-span-1">
							<h3 className="text-base font-semibold">Resources</h3>
							<ul className="mt-4 space-y-3 text-sm">
								<li>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										Blog
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										Newsletter
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										Events
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										Help centre
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										Tutorials
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-muted-foreground hover:text-primary">
										Support
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
