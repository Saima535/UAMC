"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchAdminProfile, getStoredAdminToken, loginAdmin, storeAdminToken } from "../../../lib/admin-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = getStoredAdminToken();

    if (!token) {
      return;
    }

    fetchAdminProfile(token)
      .then(() => {
        router.replace("/admin");
      })
      .catch(() => {
        // Stay on login when the saved session is invalid.
      });
  }, [router]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const session = await loginAdmin(email, password);
      storeAdminToken(session.token);
      router.replace("/admin");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Login failed.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="grid min-h-screen place-items-center px-4 py-10">
      <div className="w-full max-w-[480px] rounded-[28px] border border-[#dbe7dd] bg-white p-7 shadow-[0_20px_48px_rgba(17,38,28,0.08)] sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#17924e]">UAMC Admin</p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[#142118]">Login</h1>
        <p className="mt-3 text-sm leading-7 text-[#5b675e]">
          Sign in with the admin email and password stored in the backend environment file.
        </p>

        {error ? <div className="mt-5 rounded-2xl border border-[#f2c1c1] bg-[#fff3f3] px-4 py-3 text-sm text-[#8b2e2e]">{error}</div> : null}

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-sm font-medium text-[#26372d]">
            Admin Email
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-12 rounded-xl border border-[#d9e4db] px-4 outline-none focus:border-[#17924e]"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-[#26372d]">
            Admin Password
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-12 rounded-xl border border-[#d9e4db] px-4 outline-none focus:border-[#17924e]"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-[#17924e] px-6 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Signing In..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
