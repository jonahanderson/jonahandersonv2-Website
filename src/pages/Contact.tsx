import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);

    window.setTimeout(() => {
      setSubmitted(false);
      setFormData(initialForm);
    }, 3000);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl text-gray-900 dark:text-white sm:text-5xl">Get In Touch</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Have a product opportunity or just want to chat? I&apos;m always open to discussing new projects and
            collaborations.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-1">
            <div>
              <h2 className="mb-6 text-2xl text-gray-900 dark:text-white">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg text-gray-900 dark:text-white">Follow Me</h3>
              <div className="flex gap-3">
                {[
                  { href: personalInfo.social.github, label: "GitHub", icon: Github },
                  { href: personalInfo.social.linkedin, label: "LinkedIn", icon: Linkedin },
                  { href: personalInfo.social.twitter, label: "Twitter", icon: Twitter },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-violet-50 p-6 dark:from-gray-900 dark:to-gray-800">
              <h3 className="mb-2 text-lg text-gray-900 dark:text-white">Availability</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                I&apos;m currently available for freelance projects and full-time opportunities. Let&apos;s build
                something great together.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-6 text-2xl text-gray-900 dark:text-white">Send Me a Message</h2>

              {submitted ? (
                <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400">
                  Thank you for your message! I&apos;ll get back to you soon.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                  <Field
                    id="email"
                    type="email"
                    label="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>

                <Field
                  id="subject"
                  label="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                />

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-shadow focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:ring-blue-400"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700 sm:w-auto dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-6 rounded-2xl bg-gray-100 p-6 dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong className="text-gray-900 dark:text-white">Note:</strong> I typically respond within 24 to 48
                hours. For urgent inquiries, email is the fastest path.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
};

function Field({ id, label, value, onChange, placeholder, type = "text" }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-shadow focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:ring-blue-400"
      />
    </div>
  );
}
