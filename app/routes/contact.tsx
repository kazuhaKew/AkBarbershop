import type { Route } from "./+types/contact";
import { Form } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact & Location - AkBarbershop Hair Cut Serves" },
    { name: "description", content: "Get in touch with AkBarbershop. Visit us, call, or send a message." },
  ];
}

export default function Contact() {
  return (
    <div className="bg-[#F5F1ED] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2E1F1B] to-[#5E4B43] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#F5F1ED] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-[#C9A87C] max-w-3xl mx-auto">
            We'd love to hear from you. Visit us, give us a call, or send us a message.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#2E1F1B] mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <ContactCard
                  icon="📍"
                  title="Visit Us"
                  content="123 Main Street, City, State 12345"
                  subContent="Easy parking available"
                />
                
                <ContactCard
                  icon="📞"
                  title="Call Us"
                  content="(123) 456-7890"
                  subContent="Mon-Sat: 9AM-7PM"
                  link="tel:+1234567890"
                />
                
                <ContactCard
                  icon="✉️"
                  title="Email Us"
                  content="info@akbarbershop.com"
                  subContent="We'll respond within 24 hours"
                  link="mailto:info@akbarbershop.com"
                />
                
                <ContactCard
                  icon="🕒"
                  title="Business Hours"
                  content={
                    <>
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </>
                  }
                />
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-xl">
                <div className="bg-gradient-to-br from-[#5E4B43] to-[#2E1F1B] h-64 flex items-center justify-center">
                  <div className="text-center text-[#F5F1ED]">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-xl font-semibold">Interactive Map</p>
                    <p className="text-[#C9A87C]">123 Main Street, City, State</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#2E1F1B] to-[#5E4B43] p-8">
                  <h2 className="text-3xl font-bold text-[#F5F1ED] mb-2">Send Us a Message</h2>
                  <p className="text-[#C9A87C]">Have a question? We're here to help!</p>
                </div>

                <Form method="post" className="p-8 space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-[#2E1F1B] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-[#5E4B43]/30 rounded-lg focus:border-[#5E4B43] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-[#2E1F1B] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-[#5E4B43]/30 rounded-lg focus:border-[#5E4B43] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#2E1F1B] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-[#5E4B43]/30 rounded-lg focus:border-[#5E4B43] focus:outline-none transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#2E1F1B] mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border-2 border-[#5E4B43]/30 rounded-lg focus:border-[#5E4B43] focus:outline-none transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-[#2E1F1B] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-[#5E4B43]/30 rounded-lg focus:border-[#5E4B43] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us what's on your mind..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#2E1F1B] to-[#5E4B43] text-[#F5F1ED] text-lg font-bold rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all"
                  >
                    Send Message
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2E1F1B] to-[#5E4B43]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#F5F1ED] mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="Do I need an appointment?"
              answer="While walk-ins are welcome, we recommend booking an appointment to ensure availability and minimize wait time."
            />
            <FAQItem
              question="What payment methods do you accept?"
              answer="We accept cash, all major credit cards, and digital payments including Apple Pay and Google Pay."
            />
            <FAQItem
              question="Do you offer student discounts?"
              answer="Yes! We offer a 15% discount for students with a valid student ID on weekdays."
            />
            <FAQItem
              question="What's your cancellation policy?"
              answer="Please provide at least 24 hours notice for cancellations. This allows us to offer the time slot to another client."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({ 
  icon, 
  title, 
  content, 
  subContent, 
  link 
}: { 
  icon: string; 
  title: string; 
  content: React.ReactNode; 
  subContent?: string;
  link?: string;
}) {
  const ContentWrapper = link ? 'a' : 'div';
  const linkProps = link ? { href: link } : {};

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-start">
        <div className="text-4xl mr-4">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#2E1F1B] mb-2">{title}</h3>
          <ContentWrapper 
            {...linkProps} 
            className={`text-[#5E4B43] ${link ? 'hover:text-[#C9A87C] transition-colors' : ''}`}
          >
            {content}
          </ContentWrapper>
          {subContent && (
            <p className="text-sm text-[#8B7468] mt-1">{subContent}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="bg-[#5E4B43]/30 backdrop-blur-sm rounded-xl overflow-hidden group">
      <summary className="p-6 cursor-pointer text-[#F5F1ED] font-semibold text-lg hover:bg-[#5E4B43]/50 transition-colors list-none flex justify-between items-center">
        {question}
        <span className="text-[#C9A87C] text-2xl group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <div className="px-6 pb-6 text-[#F5F1ED]/90">
        {answer}
      </div>
    </details>
  );
}
