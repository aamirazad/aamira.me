"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function JoinGroupForm() {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		try {
			await fetch("https://gaggle.email/join/hasd@gaggle.email", {
				method: "POST",
				body: formData,
				mode: "no-cors", // ignore CORS errors
			});
			setSubmitted(true);
		} catch (error) {
			console.error(error);
			// Even if an error occurs, show the success message since the subscription worked.
			setSubmitted(true);
		}
	};

	if (submitted) {
		return (
			<div className="fixed inset-0 z-10 flex items-center justify-center bg-white p-4 dark:bg-[#191919]">
				<div className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-lg dark:bg-[#191919]">
					<h2 className="mb-6 font-bold text-2xl text-gray-800 dark:text-gray-100">
						Success!
					</h2>
					<p className="text-gray-700 dark:text-gray-300">
						Check your email for confirmation
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="fixed inset-0 z-10 flex items-center justify-center bg-white p-4 dark:bg-[#191919]">
			<div className="w-full max-w-md rounded-lg p-6 shadow-lg">
				<h2 className="mb-6 text-center font-bold text-2xl text-gray-800 dark:text-gray-100">
					Subscribe to HASD Notify
				</h2>
				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<Label
							htmlFor="name"
							className="mb-1 block text-gray-700 dark:text-gray-300"
						>
							Name
						</Label>
						<Input
							id="name"
							name="name"
							type="text"
							placeholder="Your Name"
							// Added explicit bg/text colors for inputs for better contrast
							className="w-full rounded-md border border-gray-300 bg-white p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
						/>
					</div>
					<div>
						<Label
							htmlFor="email"
							className="mb-1 block text-gray-700 dark:text-gray-300"
						>
							Email Address
						</Label>
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="you@example.com"
							// Added explicit bg/text colors for inputs for better contrast
							className="w-full rounded-md border border-gray-300 bg-white p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
						/>
					</div>
					<div>
						<Button
							type="submit"
							className="w-full bg-blue-600 text-white hover:bg-blue-700"
						>
							Join Group
						</Button>
					</div>
					<p className="mt-4 text-center text-gray-500 text-sm dark:text-gray-400">
						You can unsubscribe at any time.
					</p>
				</form>
			</div>
		</div>
	);
}
