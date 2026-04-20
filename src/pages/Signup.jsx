import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formdata, setFormdata] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();

      if (
        response.status === 409 ||
        data?.message?.toLowerCase().includes("already")
      ) {
        console.warn("User already exists");
        return;
      }

      if (!response.ok) {
        console.error("Signup failed:", data);
        return;
      }

      console.log(data);
      navigate("/signin");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-amber-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-400/40 blur-3xl" />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:p-8">
        <div className="mb-7 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
            Join Ghardekho
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-800">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Start saving your favorite homes and property searches.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter your username"
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Create a strong password"
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-amber-600 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            Sign Up
          </button>

          <p className="pt-2 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-semibold text-amber-700 transition hover:text-amber-800 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          By signing up, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default Signup;
