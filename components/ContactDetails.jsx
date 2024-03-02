"use client";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import TextInput from "./TextInput";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const formRef = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_p8n2mk7",
				"template_j43h9vg",
				formRef.current,
				"pOWs27XlCv1P2IyJ0"
			)
			.then(
				(result) => {
					setSuccess(true);
				},
				(error) => {
					setError(true);
				}
			);
	};

	return (
		<>
			<form ref={formRef} onSubmit={sendEmail}>
				<h2 className="font-display text-base font-semibold text-neutral-950">
					Work inquiries
				</h2>
				<div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
					<TextInput
						type="text"
						label="Name"
						required
						placeholder="Name"
						name="name"
						autoComplete="name"
					/>
					<TextInput
						type="email"
						required
						placeholder="Email"
						name="email"
						label="Email"
						autoComplete="email"
					/>
					<Textarea
						placeholder="Message"
						name="message"
						label="Message"
                                    className="text-black border-4 text-xl"
					/>
				</div>
				<button
					type="submit"
					// disabled={loading}
					className="px-4 py-2 w-52 rounded-lg bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4"
				>
					Send Message {error && "Error"}
					{success && "Success"}
				</button>
			</form>
		</>
	);
}
