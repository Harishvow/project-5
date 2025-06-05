import React, { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [resultMessage, setResultMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setResultMessage("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Your actual access key here
    formData.append("access_key", "c6becbd2-6c9f-48f4-b30c-2b3017e0e575");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setResultMessage("Form submitted successfully!");
        form.reset();
      } else {
        setResultMessage(data.message || "Submission failed");
      }
    } catch (error) {
      setResultMessage("An error occurred while submitting.");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-white/50 dark:bg-secondary-900/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Get in <span className="text-primary-500 dark:text-primary-400">Touch</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info side */}
          <div className="space-y-8 animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-500 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">
                  Email
                </h3>
                <a
                  href="mailto:harisharish982005@gmail.com"
                  className="text-secondary-600 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  harisharish982005@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-500 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">
                  Location
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>

          {/* Form side */}
          <form onSubmit={onSubmit} className="space-y-6 animate-on-scroll">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                disabled={isSending}
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                disabled={isSending}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              disabled={isSending}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
              disabled={isSending}
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className={`inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-black font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25 ${
                isSending ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </button>

            {resultMessage && (
              <p
                className={`mt-4 text-center ${
                  resultMessage.toLowerCase().includes("success")
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {resultMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
