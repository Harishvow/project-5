import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white/50 dark:bg-secondary-900/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Get in <span className="text-primary-500 dark:text-primary-400">Touch</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-on-scroll">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">Email</h3>
                  <a href="mailto:contact@example.com" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">Location</h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
            
            <form className="space-y-6 animate-on-scroll">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
              ></textarea>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}