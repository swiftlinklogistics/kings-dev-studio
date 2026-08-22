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
      A full-stack logistics management and shipment tracking platform
      built to handle customer bookings, shipment operations, public
      tracking, and administrative workflows.
    </p>

    {/* Project Screenshots */}
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
        <Image
          src="/projects/swiftlink-home.png"
          alt="SwiftLink Logistics homepage"
          width={1200}
          height={800}
          className="h-auto w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
        <Image
          src="/projects/swiftlink-tracking.png"
          alt="SwiftLink shipment tracking page"
          width={1200}
          height={800}
          className="h-auto w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
        <Image
          src="/projects/swiftlink-admin.png"
          alt="SwiftLink admin dashboard"
          width={1200}
          height={800}
          className="h-auto w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
    </div>

    {/* Project Details */}
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-slate-950 p-7">
        <h3 className="text-xl font-bold">
          What I built
        </h3>

        <ul className="mt-5 space-y-3 text-slate-300">
          <li>• Customer shipment booking system</li>
          <li>• Public shipment tracking</li>
          <li>• Protected admin dashboard</li>
          <li>• Shipment creation and management</li>
          <li>• Booking approval workflow</li>
          <li>• Shipment history and progress tracking</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950 p-7">
        <h3 className="text-xl font-bold">
          Technologies
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "PostgreSQL",
            "RLS",
            "GitHub",
            "Vercel",
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-blue-500/10 px-3 py-2 text-sm text-blue-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Project Links */}
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <a
        href="https://swiftlink-website.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-blue-600 px-6 py-3 text-center font-semibold transition hover:bg-blue-500"
      >
        View Live Demo
      </a>

      <a
        href="https://github.com/swiftlinklogistics/swiftlink-website"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold transition hover:bg-white/10"
      >
        View GitHub Repository
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
            href="mailto:your-email@example.com"
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