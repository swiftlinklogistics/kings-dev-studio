import Navbar from "./components/Navbar";
import Image from "next/image";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Git & GitHub",
  "Vercel",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
       <Navbar />
          
      {/* Hero */}
      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6 py-24">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Full-Stack Web Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            I build modern,
            <span className="block text-blue-400">
              production-ready
            </span>
            web applications.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I build responsive and scalable web experiences using Next.js,
            React, TypeScript, Tailwind CSS, Supabase, and modern web
            technologies.
          </p>

         <div className="mt-10 flex flex-col gap-4 sm:flex-row">
  <a
    href="#projects"
    className="rounded-full bg-blue-600 px-7 py-3 text-center font-semibold transition hover:bg-blue-500"
  >
    View My Work
  </a>

  <a
    href="/kings-dev-studio-cv.pdf"
    download
    className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold transition hover:bg-white/10"
  >
    Download CV
  </a>

  <a
    href="#contact"
    className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold transition hover:bg-white/10"
  >
    Get In Touch
  </a>
</div>

</div>
    </section>
      {/* About */}
      <section
        id="about"
        className="border-t border-white/10 bg-slate-900/60"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            About
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Building useful software with modern technology.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Kings Dev Studio is focused on building modern, user-friendly web
            applications that solve real problems. I enjoy turning ideas into
            functional products, connecting applications to real databases,
            implementing authentication and security, and deploying projects
            to production.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Technologies I work with
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
<section
  id="projects"
  className="border-t border-white/10 bg-slate-900/60"
>
  <div className="mx-auto max-w-6xl px-6 py-24">
    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
      Featured Project
    </p>

    <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
      SwiftLink Logistics
    </h2>

    <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
      A production-ready full-stack logistics management and shipment
      tracking platform built with Next.js, React, TypeScript, Tailwind CSS,
      Supabase, PostgreSQL, and Vercel.
    </p>

    <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
      SwiftLink manages the complete shipment workflow from customer booking
      and administrative approval to shipment creation, tracking, status
      updates, and delivery.
    </p>

    {/* Project Screenshots */}
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50">
        <img
          src="/projects/swiftlink-home.png"
          alt="SwiftLink Logistics homepage"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50">
        <img
          src="/projects/swiftlink-tracking.png"
          alt="SwiftLink shipment tracking page"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50">
        <img
          src="/projects/swiftlink-admin.png"
          alt="SwiftLink admin dashboard"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    {/* What I Built */}
    <div className="mt-12">
      <h3 className="text-2xl font-bold">What I Built</h3>

      <ul className="mt-6 grid gap-3 text-slate-300 sm:grid-cols-2">
        <li>• Customer shipment booking system</li>
        <li>• Public shipment tracking</li>
        <li>• Protected admin dashboard</li>
        <li>• Shipment creation and management</li>
        <li>• Booking approval workflow</li>
        <li>• Automatic tracking number generation</li>
        <li>• Shipment history and progress tracking</li>
        <li>• Supabase Authentication</li>
        <li>• PostgreSQL database integration</li>
        <li>• Row-Level Security (RLS)</li>
      </ul>
    </div>

    {/* Technologies */}
    <div className="mt-12">
      <h3 className="text-2xl font-bold">Technologies</h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {[
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "PostgreSQL",
          "RLS",
          "Git",
          "GitHub",
          "Vercel",
        ].map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-slate-800 px-4 py-2 text-sm text-slate-200"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>

    {/* Project Links */}
    <div className="mt-12 flex flex-wrap gap-4">
      <a
        href="https://swiftlink-website.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
      >
        View Live Demo →
      </a>

      <a
        href="https://github.com/swiftlinklogistics/swiftlink-website"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-white/10 bg-slate-800 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
      >
        View GitHub Repository →
      </a>
    </div>
  </div>
</section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let's build something great.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            I'm open to web development opportunities, freelance projects,
            collaborations, and remote work.
          </p>

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=Kingrudy217@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-500"
>
  Contact Me
</a>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kings Dev Studio. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}