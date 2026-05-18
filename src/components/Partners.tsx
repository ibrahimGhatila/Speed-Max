import { partners } from "@/lib/site";

export default function Partners() {
  return (
    <section className="bg-white py-16 lg:py-20 border-y border-navy-900/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          We are pleased to work with{" "}
          <span className="text-brand-600">trusted partners</span>
        </h2>
        <div className="mt-4 mx-auto h-[3px] w-20 rounded-full bg-brand-600" />

        <ul className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-8 items-center">
          {partners.map((p) => (
            <li
              key={p}
              className="text-center font-display text-lg font-semibold text-navy-900/40 hover:text-navy-900 transition-colors"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
