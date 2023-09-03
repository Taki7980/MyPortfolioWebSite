"use client";


import TextInput from "./TextInput";



export default function ContactForm() {
     
      return (
            <form>
                  <h2 className="font-display text-base font-semibold text-neutral-950">
                        Work inquiries
                  </h2>
                  <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                        <TextInput label="Name" name="name" autoComplete="name" />
                        <TextInput
                              label="Email"
                              type="email"
                              name="email"
                              autoComplete="email"
                        />

                        {/* <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" /> */}
                        <TextInput label="Message" name="message" />
                  </div>
                  <button
                        type="submit"
                        // disabled={loading}
                        className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4">
                        Send Message
                  </button>
            </form >
      );
}