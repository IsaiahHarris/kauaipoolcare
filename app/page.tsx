import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

const CheckIcon = (props: ComponentPropsWithoutRef<"svg">) => (
  <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
    <path
      d="M8.2 13.4 4.8 10l1.4-1.4 2 2 5.6-5.6 1.4 1.4-7 7Z"
      fill="currentColor"
    />
  </svg>
);

const businessName = "Kauai Pool Pros";
const phoneDisplay = "(808) 215-9222";
const phoneHref = "tel:+18082159222";
const emailAddress = "aloha@kauaipoolpros.com";

const services = [
  {
    title: "Weekly Pool Cleaning",
    description:
      "Reliable skimming, brushing, vacuuming, and basket service tuned to Kauai's trade winds and red-dirt realities.",
    points: [
      "Chemical testing and adjustments included at every visit",
      "Saltwater and chlorine systems supported",
      "Service logs with optional photo proof for remote owners",
    ],
  },
  {
    title: "Comprehensive Maintenance",
    description:
      "Keep pumps, filters, heaters, and automation running smoothly with proactive inspections and tune-ups.",
    points: [
      "Multi-point equipment checks",
      "Filter cleans and media replacements",
      "Energy-saving upgrade recommendations",
    ],
  },
  {
    title: "Vacation Rental Turnover",
    description:
      "Fast, discreet service windows between guests so your pool looks five-star in every review.",
    points: [
      "Same-day emergency clears",
      "Water balancing after heavy usage",
      "Coordination with property managers",
    ],
  },
  {
    title: "Commercial & Resort Support",
    description:
      "Certified technicians for hotels, condo associations, and recreation centers across Kauai.",
    points: [
      "DOH compliance documentation",
      "Custom schedules for high-usage pools",
      "On-call storm and debris response",
    ],
  },
  {
    title: "Water Chemistry & Salt Conversions",
    description:
      "Protect surfaces and swimmers with precise balancing and guided salt system conversions.",
    points: [
      "Langelier saturation index tracking",
      "Specialty stain and scale treatment",
      "Mineral and UV system integration",
    ],
  },
  {
    title: "Green-to-Clean Restorations",
    description:
      "Turn cloudy, algae-filled water into a sparkling oasis with intensive treatment plans.",
    points: [
      "Rapid shock and brushing program",
      "Filter deep cleans and clarifiers",
      "Follow-up visits to lock in clarity",
    ],
  },
];

const differentiators = [
  {
    title: "Island Expertise",
    description:
      "15+ years keeping Kauai pools pristine, accounting for salt air, heavy rain, and volcanic minerals.",
  },
  {
    title: "Proactive Communication",
    description:
      "Visit summaries with chemical readings and recommendations sent after every service.",
  },
  {
    title: "Eco-Friendly Mindset",
    description:
      "Water-saving backwash practices, energy-efficient equipment, and biodegradable products whenever possible.",
  },
  {
    title: "Tourism-Ready Response",
    description:
      "Flexible scheduling around check-in/check-out windows so owners never miss a booking.",
  },
];

const processSteps = [
  {
    title: "Site Assessment & Water Test",
    description:
      "We evaluate pool size, equipment, bather load, and existing water chemistry to tailor your service plan.",
  },
  {
    title: "Customized Maintenance Plan",
    description:
      "Choose weekly, bi-weekly, or hybrid schedules with optional add-ons for tile cleaning, spa care, and storm prep.",
  },
  {
    title: "On-Island Technicians",
    description:
      "Your dedicated technician follows a detailed checklist, captures before/after photos, and logs every chemical reading.",
  },
  {
    title: "Continuous Optimization",
    description:
      "We track trends, adjust for seasonal rainfalls, and alert you before equipment issues become emergencies.",
  },
];

const testimonials = [
  {
    name: "Maile K.",
    location: "Princeville",
    quote:
      "Our villa pool stays guest-ready year-round. The photo updates and chemical tracking keep our mainland owners confident.",
  },
  {
    name: "Jordan L.",
    location: "Lihue",
    quote:
      "They rescued a green pool after a storm in 48 hours. Since then the weekly service has been flawless.",
  },
  {
    name: "Hanalei Surf House",
    location: "Hanalei",
    quote:
      "Tourist turnover is hectic, but Kauai Pool Pros works around our schedule and keeps the spa crystal clear for every guest.",
  },
];

const faqs = [
  {
    question: "How quickly can you start service on Kauai?",
    answer:
      "We can typically schedule your initial inspection and water test within 48 hours in Lihue, Kapaa, Poipu, Princeville, and surrounding communities.",
  },
  {
    question: "Do you maintain saltwater and chlorine pools?",
    answer:
      "Yes. We balance and maintain both systems and can recommend the best option for your property's usage patterns and exposure.",
  },
  {
    question: "Can you coordinate with property managers or cleaners?",
    answer:
      "Absolutely. We routinely align visits with vacation rental turnovers, resort engineering teams, and HOA boards.",
  },
  {
    question: "What happens during heavy rain or storms?",
    answer:
      "We offer priority storm response with debris removal, water rebalancing, and equipment checks to keep your pool safe and swimmable.",
  },
];

const serviceAreas = [
  "Lihue",
  "Kapa'a",
  "Princeville",
  "Poipu",
  "Hanalei",
  "Kalaheo",
  "Koloa",
  "Waimea",
];

const stats = [
  {
    value: "200+",
    description: "Pools cared for across Kauai in the last year",
  },
  {
    value: "< 12 hrs",
    description: "Average response time for service requests",
  },
  {
    value: "4.9/5",
    description: "Average rating from homeowners and property managers",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: businessName,
  image: "https://kauaipoolpros.com/og-image.jpg",
  url: "https://kauaipoolpros.com",
  telephone: "+1-808-215-9222",
  email: emailAddress,
  priceRange: "$$",
  description:
    "Kauai Pool Pros delivers weekly pool cleaning, water chemistry balancing, and equipment maintenance for homes, resorts, and vacation rentals across Kauai, Hawaii.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Lihue",
    addressRegion: "HI",
    postalCode: "96766",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.9812,
    longitude: -159.3711,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],
  areaServed: serviceAreas,
  serviceArea: serviceAreas.map((area) => ({ "@type": "Place", name: area })),
  sameAs: [
    "https://www.facebook.com/kauaipoolpros",
    "https://www.instagram.com/kauaipoolpros",
  ],
};

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-white to-white text-slate-900">
      <div
        className="absolute -top-24 left-1/2 h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-sky-200/70 opacity-60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-[-15%] h-96 w-96 rounded-full bg-teal-200/60 opacity-70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-12%] left-[-10%] h-80 w-80 rounded-full bg-cyan-200/70 opacity-60 blur-3xl"
        aria-hidden="true"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="relative z-10">
        <header className="mx-auto max-w-6xl px-6 pt-10 lg:px-8">
          <nav className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/60 bg-white/80 px-6 py-4 shadow-lg shadow-sky-100 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-lg font-semibold text-white">
                KP
              </span>
              <div className="leading-tight">
                <p className="text-lg font-semibold tracking-tight text-slate-900">
                  {businessName}
                </p>
                <p className="text-sm text-slate-500">
                  Cleaning / Maintenance / Equipment Care
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
              <Link
                href="#services"
                className="rounded-full px-3 py-2 transition-colors hover:text-slate-900"
              >
                Services
              </Link>
              <Link
                href="#process"
                className="rounded-full px-3 py-2 transition-colors hover:text-slate-900"
              >
                Process
              </Link>
              <Link
                href="#lead-form"
                className="rounded-full px-3 py-2 transition-colors hover:text-slate-900"
              >
                Free Quote
              </Link>
              <Link
                href="#faq"
                className="rounded-full px-3 py-2 transition-colors hover:text-slate-900"
              >
                FAQ
              </Link>
            </div>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              href={phoneHref}
            >
              <span>Call {phoneDisplay}</span>
            </a>
          </nav>
        </header>

        <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                Kauai Pool Cleaning & Maintenance
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Sparkling pools on island time, without the stress.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                From Princeville villas to Poipu resorts, {businessName} keeps Kauai pools gentle on skin, invitingly clear, and ready for every guest, rain, red dirt, or salty trades.
              </p>
              <ul className="grid gap-3 text-sm font-medium text-slate-600 sm:grid-cols-2">
                <li className="flex items-center gap-3 rounded-full bg-white/80 px-4 py-2.5 shadow-sm ring-1 ring-sky-100">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  Weekly cleaning + chemical balancing
                </li>
                <li className="flex items-center gap-3 rounded-full bg-white/80 px-4 py-2.5 shadow-sm ring-1 ring-sky-100">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  Vacation rental turnover specialists
                </li>
                <li className="flex items-center gap-3 rounded-full bg-white/80 px-4 py-2.5 shadow-sm ring-1 ring-sky-100">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  Licensed, insured, and DOH compliant
                </li>
                <li className="flex items-center gap-3 rounded-full bg-white/80 px-4 py-2.5 shadow-sm ring-1 ring-sky-100">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  Photo updates for off-island owners
                </li>
              </ul>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Request a free water test
                </a>
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white/80 px-8 py-3 text-base font-semibold text-sky-700 shadow-sm transition hover:border-sky-300 hover:bg-white"
                >
                  Email {emailAddress}
                </a>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Serving Lihue, Kapaa, Princeville, Poipu, Hanalei, Kalaheo, Koloa, and Waimea.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -translate-y-6 translate-x-6 rounded-[2.5rem] bg-gradient-to-br from-sky-300/30 via-white to-cyan-200/40 blur-2xl" aria-hidden="true" />
              <div className="relative space-y-8">
                <div className="overflow-hidden rounded-[2.5rem] border border-dashed border-sky-300/70 bg-white/75 p-6 shadow-2xl shadow-sky-200 backdrop-blur">
                  <div className="aspect-[4/3] w-full rounded-[2rem] border border-dashed border-sky-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">
                    Hero image placeholder
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Drop in a bright Kauai pool photo here when you are ready to go live.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 p-8 shadow-2xl shadow-sky-200 backdrop-blur">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-cyan-50 opacity-70" aria-hidden="true" />
                  <div className="relative space-y-6">
                    <h2 className="text-xl font-semibold text-slate-900">
                      Your weekly visit includes
                    </h2>
                    <ul className="space-y-4 text-sm text-slate-600">
                      <li className="flex gap-4">
                        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white">
                          1
                        </span>
                        <div>
                          <p className="font-semibold text-slate-800">Crystal-clear water</p>
                          <p>Vacuuming, skimming, tile brushing, and basket cleaning every visit.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white">
                          2
                        </span>
                        <div>
                          <p className="font-semibold text-slate-800">Dialed-in chemistry</p>
                          <p>Balanced chlorine, pH, alkalinity, calcium, stabilizer, and salt levels.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white">
                          3
                        </span>
                        <div>
                          <p className="font-semibold text-slate-800">Equipment assurance</p>
                          <p>Inspect pumps, filters, heaters, timers, and automation with proactive alerts.</p>
                        </div>
                      </li>
                    </ul>
                    <div className="rounded-2xl bg-sky-50/90 p-5 text-sm text-sky-700 ring-1 ring-sky-100">
                      <p className="font-semibold text-slate-800">Rainy season ready</p>
                      <p>
                        Heavy rainfall? We include algae prevention, phosphate removal, and storm skims so your pool stays open.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-6 rounded-3xl border border-white/70 bg-white/70 p-6 shadow-inner shadow-sky-100 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.value} className="space-y-1 text-center sm:text-left">
                <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                <p className="text-sm font-medium text-slate-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Kauai pool cleaning tailored to island conditions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Trade winds, red dirt, tropical foliage, and tourism traffic are unique to Kauai. Our service plans are engineered to tackle each challenge so your water stays bright and balanced.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex flex-col justify-between gap-5 rounded-3xl border border-white/70 bg-white/80 p-7 shadow-lg shadow-sky-100 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="aspect-[4/3] w-full rounded-2xl border border-dashed border-sky-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50 text-[10px] font-semibold uppercase tracking-[0.4em] text-sky-300 transition group-hover:border-sky-300 group-hover:text-sky-400 sm:text-xs"
                  aria-hidden="true"
                >
                  <div className="flex h-full w-full items-center justify-center">Service image</div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-[6px] h-2 w-2 flex-shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                Why homeowners choose us
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                White-glove pool care rooted in Kauai hospitality
              </h2>
              <p className="text-lg text-slate-600">
                You deserve clear water and clear communication. We show up on schedule, document every visit, and treat your property like it&apos;s our own.
              </p>
              <ul className="space-y-5">
                {differentiators.map((item) => (
                  <li key={item.title} className="flex gap-4 rounded-3xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                    <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sky-200/40 via-white to-teal-100/50 blur-3xl" aria-hidden="true" />
              <div className="relative space-y-6 rounded-[2.5rem] border border-white/70 bg-white/80 p-8 shadow-xl shadow-sky-100">
                <h3 className="text-xl font-semibold text-slate-900">Included with every plan</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span>Balanced chemistry and dosing records</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span>Filter pressure tracking and backwash alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span>Tile, step, and waterline brushing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span>Surface skimming and vacuuming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span>Equipment inspection &amp; preventive recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span>Optional add-ons: spa care, fountain cleaning, start-ups, solar cover folding</span>
                  </li>
                </ul>
                <div className="rounded-2xl bg-sky-50/90 p-5 text-sm text-sky-700 ring-1 ring-sky-100">
                  <p className="font-semibold text-slate-800">Guarantee</p>
                  <p>
                    If your pool isn&apos;t sparkling within 24 hours of a scheduled visit, we return for a complimentary follow-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              Our process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Getting started is simple
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Clear expectations and transparent reporting keep homeowners, HOAs, and property managers confident from day one.
            </p>
          </div>

          <div className="relative mt-12 space-y-8">
            <div className="absolute left-7 top-0 h-full w-px bg-sky-100 sm:left-9" aria-hidden="true" />
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/80 p-6 pl-16 shadow-lg shadow-sky-100 sm:flex-row sm:items-start sm:pl-20"
              >
                <div className="absolute left-4 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-base font-semibold text-white sm:left-6">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
          <div className="rounded-[2.75rem] border border-white/70 bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-500 px-8 py-12 text-white shadow-2xl shadow-sky-200">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                  Tourism ready
                </p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Protect your reviews with flawless pool experiences
                </h2>
                <p className="text-lg text-white/90">
                  We sync with your cleaning crew, deliver photo proof to off-island owners, and offer storm response that keeps your calendar bookable.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-sky-700 shadow-lg shadow-white/40 transition hover:bg-white/90"
                  >
                    Call {phoneDisplay}
                  </a>
                  <a
                    href="#lead-form"
                    className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                  >
                    Schedule a walkthrough
                  </a>
                </div>
              </div>
              <ul className="space-y-4 text-sm text-white/90">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>Guest-ready checklists tailored to vacation rentals and boutique resorts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>Commercial-grade chemical tracking and Department of Health compliance logs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>Emergency cleanup hotline for storms, equipment failures, and last-minute bookings.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Trusted by Kauai homeowners, HOAs, and hospitality pros
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex h-full flex-col justify-between gap-5 rounded-3xl border border-white/70 bg-white/80 p-7 shadow-lg shadow-sky-100"
              >
                <div
                  className="h-12 w-12 rounded-full border border-dashed border-sky-200 bg-sky-50 text-[10px] font-semibold uppercase tracking-[0.35em] text-sky-300"
                  aria-hidden="true"
                >
                  <div className="flex h-full w-full items-center justify-center">Photo</div>
                </div>
                <p className="text-sm text-slate-600">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="text-sm font-semibold text-slate-900">
                  {testimonial.name}
                  <span className="block text-xs uppercase tracking-wide text-slate-400">
                    {testimonial.location}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                Service areas
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Island-wide coverage with local technicians
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Based in Lihue with teams stationed north, south, and west, we deliver dependable weekly service no matter where your pool sits on Kauai.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Not sure if we cover your neighborhood? Call or text us and we&apos;ll confirm availability.
              </p>
            </div>
            <div className="grid gap-4 rounded-[2.5rem] border border-white/70 bg-white/80 p-8 shadow-xl shadow-sky-100 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <div key={area} className="rounded-2xl border border-sky-100 bg-sky-50/70 p-5 text-sm font-semibold text-sky-700">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Answers to common Kauai pool questions
            </h2>
          </div>
          <dl className="mt-12 grid gap-6 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-sky-100"
              >
                <dt className="text-lg font-semibold text-slate-900">{faq.question}</dt>
                <dd className="mt-3 text-sm text-slate-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="lead-form" className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                Free water analysis
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Tell us about your pool and we&apos;ll handle the rest
              </h2>
              <p className="text-lg text-slate-600">
                Share a few details and we&apos;ll send a customized cleaning and maintenance plan with pricing the same day.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-2 w-2 flex-shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                  <span>Response within one business day</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-2 w-2 flex-shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                  <span>Complimentary on-site inspection for Kauai properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-2 w-2 flex-shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                  <span>Optional equipment efficiency audit</span>
                </li>
              </ul>
              <div className="rounded-2xl bg-sky-50/90 p-5 text-sm text-sky-700 ring-1 ring-sky-100">
                <p className="font-semibold text-slate-800">Prefer to chat?</p>
                <p>
                  Call or text <a className="font-semibold text-sky-700" href={phoneHref}>{phoneDisplay}</a> or email <a className="font-semibold text-sky-700" href={`mailto:${emailAddress}`}>{emailAddress}</a>.
                </p>
              </div>
            </div>

            <form
              className="space-y-5 rounded-[2.5rem] border border-white/70 bg-white/80 p-8 shadow-2xl shadow-sky-200"
              method="post"
              action={`https://formsubmit.co/${emailAddress}`}
            >
              <input type="hidden" name="_subject" value="New Kauai Pool Pros Lead" />
              <input type="hidden" name="_honeypot" value="" />
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700">
                    Service type
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                    defaultValue="Weekly maintenance"
                  >
                    <option>Weekly maintenance</option>
                    <option>One-time clean</option>
                    <option>Vacation rental turnover</option>
                    <option>Commercial / resort</option>
                    <option>Equipment repair</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-slate-700">
                  Property location on Kauai
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Princeville, Kapaa, Poipu, etc."
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                  Pool details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about pool size, surface type, hot tub, or any issues you&apos;re seeing."
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-sky-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Get my custom plan
              </button>
              <p className="text-xs text-slate-400">
                By submitting, you agree to receive communication about pool services on Kauai. We respond within one business day.
              </p>
            </form>
          </div>
        </section>

        <footer className="border-t border-sky-100 bg-white/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-base font-semibold text-slate-900">{businessName}</p>
              <p>Kauai, Hawaii | Licensed & Insured</p>
              <p>
                Call <a className="font-semibold text-sky-700" href={phoneHref}>{phoneDisplay}</a> or email <a className="font-semibold text-sky-700" href={`mailto:${emailAddress}`}>{emailAddress}</a>
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p>Serving Lihue, Kapaa, Princeville, Poipu, Hanalei, Kalaheo, Koloa, Waimea, and surrounding communities.</p>
              <p>Copyright {new Date().getFullYear()} {businessName}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
