import Image from "next/image";
import Link from "next/link";
import { LandingPageHeader } from "../../../components/landing-page-header";
import { SiteFooter } from "../../../components/site-footer";

const facilityLinks = [
  { href: "/facilities/hospital-service", label: "Hospital Service", active: true },
  { href: "/facilities/departments", label: "Departments" },
  { href: "/facilities/library", label: "Library" },
  { href: "/facilities/medical-education-unit", label: "Medical Education Unit" },
  { href: "/facilities/training", label: "Training" },
  { href: "/facilities/publication", label: "Publications" },
  { href: "/facilities/seminar", label: "Seminar" },
  { href: "/facilities/hostel", label: "Hostel" },
  { href: "/facilities/laboratory", label: "Laboratory" },
  { href: "/facilities/cafeteria", label: "Cafeteria" }
];

const medicalServices = [
  { title: "General Medicine", description: "Diagnosis, treatment, and long-term care of adult diseases.", active: true },
  { title: "Surgery", description: "Minor to major surgeries, anesthesia, and perioperative care." },
  { title: "Obstetrics & Gynecology", description: "Maternity services, prenatal care, and women's health support." },
  { title: "Pediatrics", description: "Child healthcare from infancy, children, and adolescents." },
  { title: "Anesthesiology", description: "Pain control and critical surgery management services." },
  { title: "Radiology & Imaging", description: "Modern imaging support for diagnosis and treatment planning." },
  { title: "Dentistry", description: "Routine and specialized oral treatment and restorations." },
  { title: "Blood Transfusion", description: "Safe blood supply and transfusion support infrastructure." }
];

const clinicalTop = [
  { title: "Neuromedicine", description: "Brain, stroke, spine, and nervous system care.", active: true },
  { title: "Gastroenterology", description: "Care for digestive system disorders and liver disease." },
  { title: "Cardiology", description: "Heart disease management, diagnostics, and non-invasive care." }
];

const clinicalMiddle = [
  { title: "Nephrology", description: "Kidney disease, dialysis services, and renal disorders." },
  { title: "Radiation Oncology", description: "Cancer treatment using image-guided radiation therapy." }
];

const clinicalBottom = [
  { title: "Psychiatry", description: "Mental health diagnosis and therapeutic treatment." },
  { title: "Dermatology", description: "Skin care, hair, nail, and skin diseases." }
];

const surgicalTop = [
  { title: "Otolaryngology (ENT)", description: "Ear, nose, throat, and head-neck treatment.", active: true },
  { title: "Ophthalmology", description: "Eye diseases, surgeries, and visual care." },
  { title: "Neurosurgery", description: "Surgical treatment of diseases related to the brain and spine." }
];

const surgicalBottom = [
  { title: "Urology", description: "Urinary tract and male reproductive organs." },
  { title: "Orthopedics", description: "Bone, joint, muscle, and musculoskeletal system problems." }
];

const emergencyCareLeft = [
  "24/7 Emergency Services",
  "Ambulance Services",
  "ICU (Intensive Care Unit) - 20 beds, 17 ventilators (10th floor)",
  "CCU (Coronary Care Unit) - 17 beds (3rd floor)"
];

const emergencyCareRight = [
  "NICU (Neonatal Intensive Care Unit) - For critical neonatal cases",
  "Ambulance Services",
  "Haemodialysis Unit"
];

const diagnosticLeft = ["Modern Diagnostic Facilities", "CT Scan", "Ultrasound", "Digital X-Ray"];

const diagnosticRight = [
  "Reference Pathology & Laboratory",
  "Cardiac Non-Invasive Lab",
  "Gastroenterology: Video Endoscopy & Colonoscopy"
];

const additionalLeft = ["Blood Bank", "Oral Rehydration Therapy", "Vaccination Services for Children"];
const additionalRight = ["Outpatient Department (OPD)", "Laparoscopic Surgery"];

function MedicalPattern() {
  return (
    <div className="absolute inset-x-0 top-0 h-[104px] overflow-hidden">
      <Image
        src="/Hospital Service/hero-strip-placeholder.svg"
        alt="Hospital Service decorative strip placeholder"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

function HospitalIcon() {
  return (
    <svg viewBox="0 0 104 104" fill="none" className="h-[94px] w-[94px] text-[#12a154]" aria-hidden="true">
      <rect x="28" y="18" width="48" height="62" rx="8" fill="currentColor" />
      <rect x="14" y="30" width="18" height="50" rx="6" fill="#b8e7cb" />
      <rect x="72" y="30" width="18" height="50" rx="6" fill="#b8e7cb" />
      <path d="M48 30h8v12h12v8H56v12h-8V50H36v-8h12V30Z" fill="#eef8f0" />
      <path d="M38 92h28" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

function ServiceCategoryIcon({ type }: { type: "medical" | "medicine" | "surgical" }) {
  if (type === "medical") {
    return (
      <svg viewBox="0 0 64 64" fill="none" className="h-[54px] w-[54px] text-[#0ca14c]" aria-hidden="true">
        <rect x="14" y="10" width="36" height="44" rx="10" fill="currentColor" />
        <path d="M30 20h4v8h8v4h-8v8h-4v-8h-8v-4h8v-8Z" fill="#eef8f0" />
      </svg>
    );
  }

  if (type === "medicine") {
    return (
      <svg viewBox="0 0 64 64" fill="none" className="h-[54px] w-[54px] text-[#0ca14c]" aria-hidden="true">
        <path d="M18 34c0-9.4 7.6-17 17-17 3 0 5.8.8 8.2 2.1l3.8 3.8c1.3 2.4 2.1 5.2 2.1 8.1 0 9.4-7.6 17-17 17S18 43.4 18 34Z" fill="currentColor" />
        <path d="m18 46 28-28" stroke="#eef8f0" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-[54px] w-[54px] text-[#0ca14c]" aria-hidden="true">
      <path d="m18 46 28-28" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <path d="M41 13 51 3m-3 15 13 13" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="19" cy="45" r="8" fill="currentColor" />
    </svg>
  );
}

function MiniCardIcon({ kind }: { kind: "person" | "pin" | "building" | "drop" }) {
  if (kind === "pin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <path d="M12 21s-5.5-5-5.5-10a5.5 5.5 0 1 1 11 0c0 5-5.5 10-5.5 10Z" />
        <circle cx="12" cy="11" r="1.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (kind === "building") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <path d="M5 21V6l7-3 7 3v15" />
        <path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
      </svg>
    );
  }

  if (kind === "drop") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <path d="M12 3c3 4 5 6.7 5 9.5A5 5 0 0 1 7 12.5C7 9.7 9 7 12 3Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M6 20c1.3-3 3.5-4.5 6-4.5s4.7 1.5 6 4.5" />
    </svg>
  );
}

function ArrowTile() {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-white text-[18px] text-[#19a94f] shadow-[0_0_0_1px_rgba(18,135,63,0.05)]">
      →
    </span>
  );
}

function ListCard({ label }: { label: string }) {
  return (
    <article className="flex min-h-[52px] items-center justify-between gap-5 bg-[#e5f5e8] px-4 py-3">
      <p className="text-[14px] font-semibold leading-[1.45] text-[#4a4a4a]">{label}</p>
      <ArrowTile />
    </article>
  );
}

function DepartmentCard({
  title,
  description,
  active = false,
  icon
}: {
  title: string;
  description: string;
  active?: boolean;
  icon: "person" | "pin" | "building" | "drop";
}) {
  return (
    <article
      className={`rounded-[4px] border border-dashed px-4 py-4 ${
        active
          ? "border-[#0ca14c] bg-[#0ca14c] text-white"
          : "border-[#abd9b7] bg-[#e5f5e8] text-[#1e1e1e]"
      }`}
    >
      <div
        className={`grid h-9 w-9 place-items-center rounded-full ${
          active ? "bg-white/16" : "bg-[#0ca14c]"
        }`}
      >
        <MiniCardIcon kind={icon} />
      </div>
      <h4 className={`mt-4 text-[16px] font-bold ${active ? "text-white" : "text-[#0d7b42]"}`}>{title}</h4>
      <p className={`mt-2 text-[12px] leading-5 ${active ? "text-white/90" : "text-[#68826f]"}`}>{description}</p>
    </article>
  );
}

export default function FacilitiesHospitalServicePage() {
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
                      HOME &gt; FACILITIES &gt;&gt; <span className="text-[#0f9f49]">Hospital Service</span>
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
              <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
                <div className="flex items-start gap-5">
                  <HospitalIcon />
                  <div>
                    <h2 className="font-display text-[clamp(2.7rem,4.1vw,4.5rem)] leading-[0.95] text-[#111]">
                      About the
                      <br />
                      <span className="font-semibold text-[#0c9a45]">Hospital</span>
                    </h2>
                  </div>
                </div>

                <div className="max-w-[760px] pt-1 text-[15px] leading-[1.7] text-[#525252]">
                  <p>
                    <span className="font-semibold text-[#4a4a4a]">Uttara Adhunik Medical College Hospital (UAMCH)</span> is
                    the teaching and training hospital of the college. It is a 500-bedded, multidisciplinary tertiary care
                    facility located in Uttara, Dhaka. The hospital serves patients from all over the country, particularly
                    from Uttara, Tongi, Gazipur, and Savar.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <div className="relative aspect-[2.05/0.78] overflow-hidden bg-[#ddebe0]">
                  <Image
                    src="/Hospital Service/about-hospital-placeholder.svg"
                    alt="Hospital Service main image placeholder"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-8 text-center md:flex-row md:gap-20">
                <div>
                  <p className="text-[44px] font-extrabold leading-none text-[#0c9a45]">87,260.035</p>
                  <p className="mt-2 text-[13px] text-[#8a8a8a]">sq. ft. (8 Bighas)</p>
                  <p className="mt-1 text-[18px] font-extrabold text-[#262626]">Total Land Area</p>
                </div>
                <div className="hidden h-20 w-px bg-[#6c6c6c] md:block" />
                <div>
                  <p className="text-[44px] font-extrabold leading-none text-[#0c9a45]">17</p>
                  <p className="mt-2 text-[13px] text-[#8a8a8a]">Storied</p>
                  <p className="mt-1 text-[18px] font-extrabold text-[#262626]">Main Building</p>
                </div>
              </div>

              <p className="mt-8 text-center text-[13px] text-[#4a4a4a]">
                <span className="font-extrabold">Additional Structures:</span> Separate buildings for Radiology,
                Orthopedics, ENT, Dental & Emergency Departments
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1480px]">
              <div className="text-center">
                <h3 className="font-display text-[clamp(2.7rem,4vw,4.2rem)] leading-none text-[#111]">
                  <span className="font-semibold text-[#0c9a45]">UAMCH</span> Facilities &amp; Services
                </h3>
                <p className="mt-2 text-[12px] text-[#8a8a8a]">
                  Patients requiring intensive care receive specialized attention.
                </p>
              </div>

              <div className="mt-10 overflow-hidden rounded-[8px] border border-[#d9e6db] bg-white shadow-[0_8px_20px_rgba(14,26,17,0.08)]">
                <div className="grid gap-0 lg:grid-cols-[0.38fr_0.3fr_0.32fr]">
                  <div className="bg-[#f6faf7] px-6 py-6">
                    <div className="space-y-4">
                      {["Intensive Care Unit (ICU)", "Critical Care Unit or Coronary Care Unit (CCU)", "Neonatal Intensive Care Unit (NICU)"].map((item, index) => (
                        <div
                          key={item}
                          className={`text-[14px] font-semibold ${
                            index === 0 ? "border-l-[4px] border-[#0c9a45] bg-[#0c9a45] px-4 py-3 text-white" : "px-1 py-2 text-[#4d4d4d]"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative min-h-[280px] overflow-hidden bg-[#dce9dd]">
                    <Image
                      src="/Hospital Service/icu-team-placeholder.svg"
                      alt="ICU team placeholder"
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="px-6 py-8">
                    <div className="text-[16px] font-bold text-[#333]">Intensive Care Unit (ICU)</div>
                    <p className="mt-4 text-[14px] leading-7 text-[#66756a]">
                      Equipped with ventilators and advanced life support. A 20-bedded unit on 10th floor equipped with
                      17 ventilators, providing continuous care and life support for critically ill adult patients.
                    </p>
                    <button className="mt-6 inline-flex min-h-[34px] items-center justify-center bg-[#0c9a45] px-5 text-[12px] font-bold text-white">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1480px]">
              <div className="text-center">
                <h3 className="font-display text-[clamp(2.7rem,4vw,4.2rem)] leading-none text-[#111]">
                  <span className="font-semibold text-[#0c9a45]">UAMCH</span> Facilities &amp; Services
                </h3>
              </div>

              <div className="mt-10 text-center">
                <div className="font-display text-[70px] leading-none text-[#b6d6bf]">01</div>
                <div className="-mt-6 text-[28px] font-extrabold leading-tight text-[#222]">
                  MEDICAL
                  <br />
                  SERVICES
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-4">
                {medicalServices.map((service, index) => (
                  <DepartmentCard
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    active={service.active}
                    icon={index % 4 === 0 ? "person" : index % 4 === 1 ? "pin" : index % 4 === 2 ? "drop" : "building"}
                  />
                ))}
              </div>

              <div className="mt-14 text-center">
                <div className="font-display text-[70px] leading-none text-[#b6d6bf]">02</div>
                <div className="-mt-6 text-[28px] font-extrabold leading-tight text-[#222]">
                  CLINICAL
                  <br />
                  DEPARTMENTS
                </div>
              </div>

              <div className="mt-8 bg-[#e7f5e9] p-5">
                <div className="grid gap-4 lg:grid-cols-[0.22fr_0.78fr]">
                  <div className="flex items-center justify-center gap-4 py-4 text-[#202020]">
                    <ServiceCategoryIcon type="medicine" />
                    <div className="text-[32px] font-extrabold leading-[0.95]">
                      MEDICINE
                      <br />
                      RELATED
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      {clinicalTop.map((item, index) => (
                        <DepartmentCard
                          key={item.title}
                          title={item.title}
                          description={item.description}
                          active={item.active}
                          icon={index === 0 ? "person" : "pin"}
                        />
                      ))}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {clinicalMiddle.map((item) => (
                        <DepartmentCard key={item.title} title={item.title} description={item.description} icon="building" />
                      ))}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {clinicalBottom.map((item) => (
                        <DepartmentCard key={item.title} title={item.title} description={item.description} icon="building" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#e7f5e9] p-5">
                <div className="grid gap-4 lg:grid-cols-[0.78fr_0.22fr]">
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      {surgicalTop.map((item, index) => (
                        <DepartmentCard
                          key={item.title}
                          title={item.title}
                          description={item.description}
                          active={item.active}
                          icon={index === 1 ? "building" : "pin"}
                        />
                      ))}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {surgicalBottom.map((item) => (
                        <DepartmentCard key={item.title} title={item.title} description={item.description} icon="building" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 py-4 text-[#202020]">
                    <div className="text-right text-[32px] font-extrabold leading-[0.95]">
                      SURGICAL
                      <br />
                      RELATED
                    </div>
                    <ServiceCategoryIcon type="surgical" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1480px] space-y-16">
              <section>
                <h3 className="font-display text-[clamp(2.4rem,3.7vw,3.8rem)] leading-none text-[#111]">Emergency &amp; Specialized Care</h3>
                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div className="space-y-3">
                    {emergencyCareLeft.map((item) => (
                      <ListCard key={item} label={item} />
                    ))}
                  </div>
                  <div className="space-y-3">
                    {emergencyCareRight.map((item) => (
                      <ListCard key={item} label={item} />
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h3 className="font-display text-[clamp(2.4rem,3.7vw,3.8rem)] leading-none text-[#111]">Diagnostic &amp; Imaging Services</h3>
                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div className="space-y-3">
                    {diagnosticLeft.map((item) => (
                      <ListCard key={item} label={item} />
                    ))}
                  </div>
                  <div className="space-y-3">
                    {diagnosticRight.map((item) => (
                      <ListCard key={item} label={item} />
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h3 className="font-display text-[clamp(2.4rem,3.7vw,3.8rem)] leading-none text-[#111]">Additional Services</h3>
                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div className="space-y-3">
                    {additionalLeft.map((item) => (
                      <ListCard key={item} label={item} />
                    ))}
                  </div>
                  <div className="space-y-3">
                    {additionalRight.map((item) => (
                      <ListCard key={item} label={item} />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
