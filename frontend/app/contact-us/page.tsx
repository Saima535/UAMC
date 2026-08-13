"use client";

import { useState } from "react";
import { LandingPageHeader } from "../../components/landing-page-header";
import { SiteFooter } from "../../components/site-footer";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  consent: false
};

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="M12 21s-6-5.2-6-11a6 6 0 1 1 12 0c0 5.8-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="M3 6.75h18v10.5H3z" />
      <path d="m4.5 8 7.5 6 7.5-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="M21 16.2v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.12 3.5 2 2 0 0 1 3.1 1.3h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.57 1.76L6.7 9.1a16 16 0 0 0 8.2 8.2l1.34-1.33a2 2 0 0 1 1.76-.57l3 .5A2 2 0 0 1 21 16.2Z" />
    </svg>
  );
}

function SocialIcon({ type }: { type: "facebook" | "youtube" | "linkedin" | "instagram" }) {
  const sharedClass = "h-4 w-4";

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={sharedClass} aria-hidden="true">
        <path d="M14.5 8.5h2.5v-3h-2.7c-2.2 0-3.3 1.4-3.3 3.4v1.3h-2v3h2v7h3.5v-7h2.4l.3-3z" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={sharedClass} aria-hidden="true">
        <path d="M10 8.5 16 12l-6 3.5V8.5Zm11.4 7.7c-.2.9-.8 1.5-1.7 1.7-1.5.3-7.7.3-7.7.3s-6.2 0-7.7-.3c-.9-.2-1.5-.8-1.7-1.7-.2-.9-.2-2.8-.2-2.8s0-1.9.2-2.8c.2-.9.8-1.5 1.7-1.7 1.5-.3 7.7-.3 7.7-.3s6.2 0 7.7.3c.9.2 1.5.8 1.7 1.7.2.9.2 2.8.2 2.8s0 1.9-.2 2.8Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={sharedClass} aria-hidden="true">
        <path d="M4.98 3.5a2.28 2.28 0 1 0 0 4.56 2.28 2.28 0 0 0 0-4.56Zm.02 5.85H2v12.65h3V9.35zm4.14 0H6.8v12.65h3V13.7c0-3.27 4.16-3.54 4.16 0v8.3h3V13.03c0-5.76-6.15-5.55-6.15 0v1.32z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={sharedClass} aria-hidden="true">
      <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm4.9-7.95a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zm2.3 1.15c-.05-1.1-.27-1.85-.57-2.5a3.5 3.5 0 0 0-1.36-1.36c-.65-.3-1.4-.52-2.5-.57C14.7 4 9.3 4 8.1 4c-1.2 0-6.6 0-8.1.05-1.1.05-1.85.27-2.5.57A3.5 3.5 0 0 0 .15 5.96c-.3.65-.52 1.4-.57 2.5C-1 10.2-1 15.6-1 16.8c0 1.2 0 6.6.05 8.1.05 1.1.27 1.85.57 2.5.3.65.77 1.12 1.36 1.36.65.3 1.4.52 2.5.57 1.5.05 6.9.05 8.1.05 1.2 0 6.6 0 8.1-.05 1.1-.05 1.85-.27 2.5-.57a3.5 3.5 0 0 0 1.36-1.36c.3-.65.52-1.4.57-2.5.05-1.5.05-6.9.05-8.1 0-1.2 0-6.6-.05-8.1zM20 16.8c0 .98-.01 1.36-.03 1.84-.02.56-.1.86-.17 1.06-.09.27-.2.47-.37.68-.18.22-.4.39-.68.56-.2.08-.5.15-1.06.17-.48.02-.86.03-1.84.03h-8.4c-.98 0-1.36-.01-1.84-.03-.56-.02-.86-.1-1.06-.17a2.73 2.73 0 0 1-.68-.37 2.5 2.5 0 0 1-.56-.68c-.08-.2-.15-.5-.17-1.06-.02-.48-.03-.86-.03-1.84v-8.4c0-.98.01-1.36.03-1.84.02-.56.1-.86.17-1.06.09-.27.2-.47.37-.68.18-.22.4-.39.68-.56.2-.08.5-.15 1.06-.17.48-.02.86-.03 1.84-.03h8.4c.98 0 1.36.01 1.84.03.56.02.86.1 1.06.17.27.09.47.2.68.37.22.18.39.4.56.68.08.2.15.5.17 1.06.02.48.03.86.03 1.84v8.4z" />
    </svg>
  );
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target as HTMLInputElement;
    const checked = (event.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validateForm = () => {
    const nextErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) nextErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) nextErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    }
    if (!formData.message.trim()) nextErrors.message = "Message is required";
    if (!formData.consent) nextErrors.consent = "You must agree to the privacy notice";

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-[#f3f4f0] text-[#1b1b1b]">
      <LandingPageHeader />

      <main className="mx-auto w-full max-w-[1600px] px-4 pt-8 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden border border-[#d8e4d8] bg-[#dfeae0]">
          <div className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-[#dfeae0] via-[#dfeae0]/80 to-transparent" />
          <div className="absolute inset-y-0 right-[5%] hidden w-[260px] items-center justify-center lg:flex">
            <div className="relative h-[160px] w-[160px] rounded-full border-[10px] border-[#dbebdc] bg-[#d4ead9] shadow-[0_4px_20px_rgba(25,62,44,0.15)]">
              <div className="absolute inset-5 rounded-full border-[6px] border-[#5b7c62] bg-[#dfeae0]" />
              <div className="absolute inset-[26px] rounded-full bg-[#edf3ee]" />
              <div className="absolute inset-[40px] rounded-full border-[8px] border-[#0c5c2f] bg-[#d8efdd]" />
            </div>
          </div>

          <div className="relative px-5 py-6 sm:px-7 lg:px-8 lg:py-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1d3428]">
              Home <span className="px-2 text-[#4f6754]">&gt;</span> <span className="text-[#1a7d4f]">Contact Us</span>
            </div>
            <div className="mt-4 flex items-end justify-between gap-4">
              <h1 className="text-[clamp(2.5rem,4vw,5rem)] font-medium leading-[0.9] tracking-tight text-[#1a1a1a]">
                Contact with <span className="text-[#1a7d4f]">UAMC</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="mt-10 bg-[#e8f0ea] px-3 pb-8 pt-0 sm:px-4 lg:px-0">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_2.1fr] lg:gap-10">
            <aside className="bg-[#dfeae0] p-6 shadow-[0_2px_12px_rgba(18,44,30,0.04)] ring-1 ring-[#d7e2d6] lg:p-7">
              <h2 className="border-b border-[#b6c9bb] pb-4 text-[16px] font-semibold uppercase tracking-[0.02em] text-[#1a7d4f]">
                Contact Information
              </h2>

              <div className="mt-6 space-y-6 text-[14px] leading-7 text-[#243329]">
                <div>
                  <p className="font-semibold text-[#243329]">Phone No:</p>
                  <p className="mt-1">0255080711</p>
                </div>

                <div>
                  <p className="font-semibold text-[#243329]">Email:</p>
                  <p className="mt-1 break-all">uamcoffice08@yahoo.com</p>
                </div>

                <div>
                  <p className="font-semibold text-[#243329]">Location:</p>
                  <p className="mt-1">H # 34, R # 4, Sector # 9, Sonargaon Janapath, Uttara Model Town</p>
                </div>

                <div>
                  <p className="font-semibold text-[#243329]">Open Hours:</p>
                  <p className="mt-1">Monday - Friday: 8:00 am - 5:00 pm</p>
                  <p>Saturday - Sunday: 8:00 am - 5:00 pm</p>
                </div>

                <div>
                  <p className="font-semibold text-[#243329]">Social Media:</p>
                  <div className="mt-3 flex items-center gap-4 text-[#1d2d27]">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d7e7dc] text-[#1a7d4f]">
                      <SocialIcon type="facebook" />
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d7e7dc] text-[#1a7d4f]">
                      <SocialIcon type="youtube" />
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d7e7dc] text-[#1a7d4f]">
                      <SocialIcon type="linkedin" />
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d7e7dc] text-[#1a7d4f]">
                      <SocialIcon type="instagram" />
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            <div className="bg-[#e6efe8] px-3 py-5 ring-1 ring-[#d3e1d6] sm:px-6 sm:py-6 lg:px-7 lg:py-8">
              <div className="flex items-start gap-4 border-l-4 border-[#1a7d4f] pl-4">
                <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-medium leading-[1.05] tracking-tight text-[#1b1b1b]">
                  Keep In Touch, We Want To Hear From You -
                  <br />
                  Send Us Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="mt-8" noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-[14px] font-medium text-[#27362d]">
                      First Name <span className="text-[#1a7d4f]">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      placeholder="Enter Your First Name"
                      className="h-[48px] w-full border border-[#cad9cf] bg-[#edf4ef] px-4 text-[14px] text-[#1d1d1d] placeholder:text-[#66756a] focus:border-[#1a7d4f] focus:outline-none"
                    />
                    {errors.firstName ? <p className="mt-2 text-xs text-red-600">{errors.firstName}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-[14px] font-medium text-[#27362d]">
                      Last Name <span className="text-[#1a7d4f]">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                      placeholder="Enter Your Last Name"
                      className="h-[48px] w-full border border-[#cad9cf] bg-[#edf4ef] px-4 text-[14px] text-[#1d1d1d] placeholder:text-[#66756a] focus:border-[#1a7d4f] focus:outline-none"
                    />
                    {errors.lastName ? <p className="mt-2 text-xs text-red-600">{errors.lastName}</p> : null}
                  </div>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-[14px] font-medium text-[#27362d]">
                      Email <span className="text-[#1a7d4f]">*</span>
                    </label>
                    <div className="flex items-center border border-[#cad9cf] bg-[#edf4ef] focus-within:border-[#1a7d4f]">
                      <div className="flex h-[48px] w-[52px] items-center justify-center border-r border-[#cad9cf] text-[#1a7d4f]">
                        <MailIcon />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        placeholder="Enter Your Valid Email Address"
                        className="h-[48px] w-full bg-transparent px-4 text-[14px] text-[#1d1d1d] placeholder:text-[#66756a] focus:outline-none"
                      />
                    </div>
                    {errors.email ? <p className="mt-2 text-xs text-red-600">{errors.email}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-[14px] font-medium text-[#27362d]">
                      Phone Number <span className="text-[#1a7d4f]">*</span>
                    </label>
                    <div className="flex items-center border border-[#cad9cf] bg-[#edf4ef] focus-within:border-[#1a7d4f]">
                      <div className="flex h-[48px] w-[52px] items-center justify-center border-r border-[#cad9cf] text-[#1a7d4f]">
                        <PhoneIcon />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        placeholder="Enter Your Valid Contact Number"
                        className="h-[48px] w-full bg-transparent px-4 text-[14px] text-[#1d1d1d] placeholder:text-[#66756a] focus:outline-none"
                      />
                    </div>
                    {errors.phone ? <p className="mt-2 text-xs text-red-600">{errors.phone}</p> : null}
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className="mb-2 block text-[14px] font-medium text-[#27362d]">
                    Write your Message Here
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="h-[120px] w-full resize-none border border-[#cad9cf] bg-[#edf4ef] px-4 py-3 text-[14px] text-[#1d1d1d] placeholder:text-[#66756a] focus:border-[#1a7d4f] focus:outline-none"
                  />
                  {errors.message ? <p className="mt-2 text-xs text-red-600">{errors.message}</p> : null}
                </div>

                <div className="mt-6 flex items-start gap-3 text-[14px] text-[#23362d]">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 accent-[#1a7d4f]"
                  />
                  <label htmlFor="consent" className="leading-6">
                    By submitting this form, you agree to the UAMC privacy notice.
                  </label>
                </div>
                {errors.consent ? <p className="mt-2 text-xs text-red-600">{errors.consent}</p> : null}

                <div className="mt-8">
                  <button
                    type="submit"
                    className="inline-flex h-[48px] items-center justify-center border border-[#1a7d4f] bg-[#1a7d4f] px-8 text-[14px] font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-[#146d43]"
                  >
                    Send your message <span className="ml-2 text-lg">→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
