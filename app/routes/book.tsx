import type { Route } from "./+types/book";
import { Form, redirect } from "react-router";
import { getServices, createBooking } from "../db/db.server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Book Appointment - AkBarbershop Hair Cut Serves" },
    { name: "description", content: "Book your appointment at AkBarbershop. Quick and easy online booking." },
  ];
}

export async function loader() {
  const services = getServices();
  return { services };
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  
  const booking = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    service: formData.get('service') as string,
    date: formData.get('date') as string,
    time: formData.get('time') as string,
    message: formData.get('message') as string,
  };

  // Validate required fields
  if (!booking.name || !booking.phone || !booking.service || !booking.date || !booking.time) {
    return { error: 'Please fill in all required fields.' };
  }

  createBooking(booking);
  return redirect('/book?success=true');
}

export default function Book({ loaderData, actionData }: Route.ComponentProps) {
  const { services } = loaderData;
  const error = actionData?.error;

  // Check for success message in URL
  const url = typeof window !== 'undefined' ? new URL(window.location.href) : null;
  const success = url?.searchParams.get('success') === 'true';

  // Time slots
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  return (
    <div className="bg-[#F5F1ED] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2E1F1B] to-[#5E4B43] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#F5F1ED] mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-[#C9A87C] max-w-3xl mx-auto">
            Fill out the form below and we'll confirm your appointment shortly.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {success && (
            <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-xl">
              <div className="flex items-center">
                <span className="text-3xl mr-4">✅</span>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Booking Confirmed!</h3>
                  <p className="text-green-700">
                    Thank you for booking with AkBarbershop. We'll send you a confirmation email shortly.
                  </p>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-8 p-6 bg-red-50 border-2 border-red-500 rounded-xl">
              <div className="flex items-center">
                <span className="text-3xl mr-4">❌</span>
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">Error</h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#2E1F1B] to-[#5E4B43] p-8">
              <h2 className="text-3xl font-bold text-[#F5F1ED] mb-2">Schedule Your Visit</h2>
              <p className="text-[#C9A87C]">We look forward to serving you!</p>
            </div>

            <Form method="post" className="p-8 space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#2E1F1B] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-[#5E4B43]/30 rounded-lg focus:border-[#5E4B43] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#2E1F1B] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border-2 border-[#5E4B43]/30 rounded-lg focus:border-[#5E4B43] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#2E1F1B] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-[#5E4B43]/30 rounded-lg focus:border-[#5E4B43] focus:outline-none transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-[#2E1F1B] mb-2">
                  Select Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border-2 border-[#5E4B43]/30 rounded-lg focus:border-[#5E4B43] focus:outline-none transition-colors"
                >
                  <option value="">Choose a service...</option>
                  {services.map((service: any) => (
                    <option key={service.id} value={service.name}>
                      {service.name} - {service.price} ({service.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-[#2E1F1B] mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-[#5E4B43]/30 rounded-lg focus:border-[#5E4B43] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-[#2E1F1B] mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    className="w-full px-4 py-3 border-2 border-[#5E4B43]/30 rounded-lg focus:border-[#5E4B43] focus:outline-none transition-colors"
                  >
                    <option value="">Choose a time...</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#2E1F1B] mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-[#5E4B43]/30 rounded-lg focus:border-[#5E4B43] focus:outline-none transition-colors resize-none"
                  placeholder="Any specific requests or preferences..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#2E1F1B] to-[#5E4B43] text-[#F5F1ED] text-lg font-bold rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all"
              >
                Confirm Booking
              </button>

              <p className="text-center text-sm text-[#5E4B43]">
                * Required fields. We'll contact you to confirm your appointment.
              </p>
            </Form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-[#2E1F1B] mb-4">Prefer to Call?</h3>
            <p className="text-[#5E4B43] mb-4">
              You can also book by phone or walk-ins are welcome!
            </p>
            <a
              href="tel:+1234567890"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#C9A87C] to-[#8B7468] text-[#2E1F1B] font-bold rounded-lg hover:shadow-xl hover:scale-105 transform transition-all"
            >
              📞 Call (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
