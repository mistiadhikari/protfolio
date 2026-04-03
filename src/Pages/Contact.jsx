import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

const contactCards = [
  {
    title: "Email",
    value: "mistichettri815@gmail.com",
    icon: <FaEnvelope />,
    href: "mailto:mistichettri815@gmail.com",
  },
  {
    title: "Phone",
    value: "+977-9821594700",
    icon: <FaPhoneAlt />,
    href: "tel:+9779821594700",
  },
  {
    title: "Location",
    value: "Nepal",
    icon: <FaMapMarkerAlt />,
    href: "#",
  },
];

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/mistiadhikari",
    hover: "hover:bg-gray-900 hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://linkedin.com/misti-adhikari-08am24",
    hover: "hover:bg-blue-600 hover:text-white",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/mistiiiiiii__/",
    hover: "hover:bg-pink-500 hover:text-white",
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("xreoagvl");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    await handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.18),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(147,51,234,0.16),_transparent_28%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#fff8f1_100%)] py-16 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.12),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.12),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#111827_48%,_#172033_100%)] sm:py-20">
        <div className="absolute left-0 top-20 h-52 w-52 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-48 w-48 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 text-center shadow-2xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80 sm:p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-500">
              Message Sent
            </p>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-slate-100 sm:text-3xl">
              Thank you for reaching out
            </h2>
            <p className="mt-4 text-base text-gray-600 dark:text-slate-300 sm:text-lg">
              Your message has been submitted successfully. I will get back to you soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const formError = state.errors?.find((error) => error.field === null);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.18),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(147,51,234,0.16),_transparent_28%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#fff8f1_100%)] py-16 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.12),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.12),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#111827_48%,_#172033_100%)] sm:py-20">
      <div className="absolute left-0 top-20 h-52 w-52 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-48 w-48 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80 dark:text-purple-300">
            <FaPaperPlane className="text-pink-500" />
            Let's Connect
          </p>

          <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-slate-100 sm:text-4xl md:text-5xl">
            Contact Me
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-slate-300 sm:text-lg">
            Whether you want to collaborate, ask a question, or simply say hello, I
            would love to hear from you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/70 bg-gradient-to-br from-gray-950 via-purple-950 to-fuchsia-900 p-6 text-white shadow-2xl dark:border-slate-800 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-200">
              Open For Opportunities
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
              Let's build something thoughtful, useful, and beautiful together.
            </h2>

            <p className="mt-5 text-purple-100">
              I am continuously learning and creating projects in web development. If
              you have an idea, feedback, or an opportunity to share, feel free to
              reach out.
            </p>

            <div className="mt-8 space-y-4">
              {contactCards.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/15"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-lg text-pink-200">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm uppercase tracking-[0.16em] text-purple-200">
                      {item.title}
                    </p>
                    <p className="mt-1 break-all font-medium text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-200">
                Find Me Online
              </p>

              <div className="mt-4 flex flex-wrap gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition ${social.hover} sm:w-auto`}
                  >
                    <span className="text-lg">{social.icon}</span>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[1.75rem] bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-purple-200">
                Quick Note
              </p>
              <p className="mt-3 text-white">
                I enjoy working on responsive websites, learning new tools, and
                improving with every project I build.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-2xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80 sm:p-8 md:p-10">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-500">
                  Send A Message
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-slate-100 sm:text-3xl">
                  Start the conversation
                </h2>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-xl text-white shadow-lg sm:flex">
                <FaArrowRight />
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-200">
                    Your Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-2xl border border-purple-100 bg-purple-50/60 px-4 py-3 text-gray-800 outline-none transition focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:bg-slate-900 dark:focus:ring-purple-900/50"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="mt-2 block text-sm text-red-500"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-200">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-2xl border border-purple-100 bg-purple-50/60 px-4 py-3 text-gray-800 outline-none transition focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:bg-slate-900 dark:focus:ring-purple-900/50"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-2 block text-sm text-red-500"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-200">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your idea, feedback, or project..."
                  rows="7"
                  required
                  className="w-full rounded-[1.5rem] border border-purple-100 bg-purple-50/60 px-4 py-3 text-gray-800 outline-none transition focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:bg-slate-900 dark:focus:ring-purple-900/50"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-2 block text-sm text-red-500"
                />
              </label>

              {formError ? <p className="text-sm text-red-500">{formError.message}</p> : null}

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-sm text-gray-500 dark:text-slate-400">
                  I will do my best to respond as soon as possible.
                </p>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] sm:w-auto"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
