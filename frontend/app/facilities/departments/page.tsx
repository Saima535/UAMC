import Image from "next/image";
import Link from "next/link";
import { LandingPageHeader } from "../../../components/landing-page-header";
import { SiteFooter } from "../../../components/site-footer";

const facilityLinks = [
  { href: "/facilities/hospital-service", label: "Hospital Service" },
  { href: "/facilities/departments", label: "Departments", active: true },
  { href: "/facilities/library", label: "Library" },
  { href: "/facilities/medical-education-unit", label: "Medical Education Unit" },
  { href: "/facilities/training", label: "Training" },
  { href: "/facilities/publication", label: "Publications" },
  { href: "/facilities/seminar", label: "Seminar" },
  { href: "/facilities/hostel", label: "Hostel" },
  { href: "/facilities/laboratory", label: "Laboratory" },
  { href: "/facilities/cafeteria", label: "Cafeteria" }
];

const departments = [
  { title: "College and Hospital Administration", established: "February 19, 2025" },
  { title: "Department of Physiology", established: "February 19, 2025" },
  { title: "Department of Microbiology", established: "February 19, 2025" },
  { title: "Dept. of Community Medicine", established: "February 19, 2025" },
  { title: "Department of Pathology", established: "February 19, 2025" },
  { title: "Department of Dermatology", established: "February 19, 2025" },
  { title: "Department of Otolaryngology (ENT - Head & Neck)", established: "February 19, 2025" },
  { title: "Department of Orthopedics", established: "February 19, 2025" },
  { title: "Department of Urology", established: "February 19, 2025" },
  { title: "Department of Neurosurgery", established: "February 19, 2025" },
  { title: "Department of Gynaecology & Obstetrics", established: "February 19, 2025" },
  { title: "Department of Anatomy", established: "February 19, 2025" },
  { title: "Department of Respiratory Medicine", established: "February 18, 2025" },
  { title: "Department of Gastroenterology", established: "February 18, 2025" },
  { title: "Department of Nephrology", established: "February 18, 2025" },
  { title: "Department of Medicine", established: "February 18, 2025" },
  { title: "Department of Ophthalmology", established: "June 23, 2024" },
  { title: "Department of Biochemistry", established: "June 23, 2024" },
  { title: "Department of Anesthesiology", established: "June 23, 2024" },
  { title: "Department of Anaesthesiology", established: "June 23, 2024" },
  { title: "Department of Forensic Medicine", established: "June 23, 2024" },
  { title: "Department of Neuro Medicine", established: "June 23, 2024" },
  { title: "Department of Cardiology", established: "June 23, 2024" },
  { title: "Department of Pharmacology", established: "June 23, 2024" },
  { title: "Department of Paediatrics", established: "June 23, 2024" },
  { title: "Department of Surgery", established: "May 24, 2023" },
  { title: "Department of Radiology & Imaging", established: "November 20, 2022" },
  { title: "Department of Psychiatry", established: "October 28, 2021" },
  { title: "Department of Transfusion Medicine", established: "October 28, 2021" }
];

function MedicalPattern() {
  return (
    <div className="absolute inset-x-0 top-0 h-[104px] overflow-hidden">
      <Image
        src="/Departments/camp2.jpg"
        alt="Departments decorative strip"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

export default function FacilitiesDepartmentsPage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1d]">
      <LandingPageHeader />

      <main>
        <section className="bg-[#eff8f1] pb-14 pt-1">
          <div className="mx-auto max-w-[1600px] px-0">
            <div className="relative min-h-[510px] overflow-hidden bg-[#eff8f1]">
              <MedicalPattern />

              <div className="mx-auto px-4 pt-[118px] sm:px-6 lg:px-8">
                <div className="mx-auto flex min-h-[324px] max-w-[1480px] items-center justify-between bg-[#a8d7af] px-10 py-10 sm:px-12 lg:px-14">
                  <div className="pt-10">
                    <p className="text-[18px] font-semibold uppercase tracking-[-0.01em] text-[#111111]">
                      HOME &gt; FACILITIES &gt;&gt; <span className="text-[#0f9f49]">Departments</span>
                    </p>
                    <h1 className="mt-4 font-display text-[clamp(3.8rem,6vw,6rem)] font-medium leading-[0.9] tracking-tight text-[#1a1a1a]">
                      FACILITES <span className="font-semibold text-[#0d9a44]">UAMC</span>
                    </h1>
                  </div>

                  <div className="relative hidden h-[220px] w-[220px] shrink-0 lg:block">
                    <Image src="/images/logo2.jpg" alt="UAMC seal" fill sizes="220px" className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-[1480px] grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-6">
              {facilityLinks.slice(0, 6).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-[48px] items-center justify-center rounded-[4px] px-4 text-center text-[13px] font-medium text-white transition ${
                    item.active ? "bg-[#0c9a45]" : "bg-[#7f7f82] hover:bg-[#0c9a45]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="hidden lg:block" />
              {facilityLinks.slice(6).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-[48px] items-center justify-center rounded-[4px] px-4 text-center text-[13px] font-medium text-white transition ${
                    item.active ? "bg-[#0c9a45]" : "bg-[#7f7f82] hover:bg-[#0c9a45]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        <section className="bg-[#eef8f1] py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1480px]">
              <div className="text-center">
                <h2 className="font-display text-[clamp(3.1rem,4.4vw,4.8rem)] font-semibold leading-none text-[#111]">
                  Departments
                </h2>
                <p className="mt-4 text-[14px] text-[#666]">
                  List of academic and clinical departments with their establishment dates.
                </p>
              </div>

              <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {departments.map((department) => (
                  <article
                    key={department.title}
                    className="overflow-hidden rounded-[6px] border border-[#d5e0d6] bg-white shadow-[0_6px_18px_rgba(14,26,17,0.10)]"
                  >
                    <div className="relative aspect-[1.12/0.78] overflow-hidden bg-[#dce9dd] p-2">
                      <Image
                        src="/Departments/camp2.jpg"
                        alt={department.title}
                        fill
                        sizes="(max-width: 1280px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="px-5 pb-5 pt-4">
                      <h3 className="min-h-[44px] text-[14px] font-medium leading-[1.45] text-[#4a4a4a]">
                        {department.title}
                      </h3>
                      <p className="mt-2 text-[13px] text-[#7a7a7a]">
                        <span className="font-medium">Established:</span> {department.established}
                      </p>
                      <button className="mt-4 inline-flex min-h-[34px] items-center justify-center bg-[#0c9a45] px-5 text-[12px] font-bold text-white">
                        Learn More
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
