import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="bg-navy-50/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Client Stories
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="brand-underline">What our</span> clients say
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.author + t.company}
              className="relative rounded-2xl bg-white border border-navy-900/8 p-7 shadow-sm hover:shadow-xl hover:shadow-navy-900/5 transition-shadow"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-brand-600/15" />
              <div className="flex gap-0.5 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-navy-900/85 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-navy-900/8">
                <div className="font-semibold text-navy-900">{t.author}</div>
                <div className="text-sm text-navy-900/55">{t.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
