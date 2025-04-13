import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function JoinGroupForm() {
  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Subscribe to HASD Notify
        </h2>
        <form
          method="post"
          action="https://gaggle.email/join/hasd@gaggle.email"
          className="space-y-5"
        >
          <div>
            <Label htmlFor="name" className="mb-1 block text-gray-700">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="email" className="mb-1 block text-gray-700">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <p className="mt-4 text-center text-gray-500 text-sm">
            You can unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
}
