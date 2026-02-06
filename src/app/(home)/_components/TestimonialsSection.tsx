import TestimonialCard from "@/components/TestimonialCard";

type collegeTestimonial = {
  author: string;
  college: string;
  event?: string;
  review: string;
};

type brandTestimonial = {
  author: string;
  brand: string;
  event?: string;
  review: string;
};

export default function TestimonialsSection() {
  const collegeTestimonials: collegeTestimonial[] = [
    {
      author: "Krish",
      college: "BITS Pilani",
      event: "Oasis",
      review:
        "From connecting us with relevant brands to smooth coordination till the event day, their team handled everything professionally. The sponsorship support helped us scale our event smoothly and successfully.",
    },
    {
      author: "Rohit",
      college: "IIT Kanpur",
      event: "Antaragini",
      review:
        "colledge connect bridges the gap between colleges and brands perfectly. The process was transparent, quick, and completely stress-free for student organizers.",
    },
    {
      author: "Tanvi",
      college: "Jaipuriya",
      review:
        "We collaborated with colledge connect for our cultural fest, and the experience was excellent. They helped us secure relevant brand collaborations and supported us throughout the entire event process.",
    },
    {
      author: "Dhanvi",
      college: "COEP",
      event: "Impressions",
      review:
        "colledge connect connected us with brands that aligned well with our audience. Clear communication and smooth execution made the whole sponsorship process easy.",
    },
    {
      author: "Hardik",
      college: "IIT Bombay",
      event: "Mood Indigo",
      review:
        "Finding sponsors is usually challenging, but colledge connect made it simple and efficient. Their strong brand network helped elevate our event quality and reach.",
    },
    {
      author: "Vedika",
      college: "Lady Irwin College",
      review:
        "The team at colledge connect guided us end-to-end and ensured everything ran smoothly. We received both financial support and meaningful brand collaborations.",
    },
  ];

  const brandTestimonials: brandTestimonial[] = [
    {
      author: "Marketing Head",
      brand: "Denver",
      review:
        "Flawless execution across cities—aligned perfectly with our company marketing ideas.",
    },
    {
      author: "North Zone Head",
      brand: "Pizza Hut",
      review:
        "Amazing brand management by the team over events, as a brand we were not worried for the activation at all and were more focused towards the other parts",
    },
    {
      author: "Regional Branch Manager",
      brand: "Monster",
      review:
        "Coll-Edge Connect helped us in easy collaboration and activation in the events.",
    },
    {
      author: "CEO",
      brand: "BLND",
      review:
        "Seamless execution and authentic campus engagement made our collaboration with Coll-Edge Connect truly impactful for BLND. A team that understands youth marketing at its core.",
    },
    {
      author: "Brand Rep",
      brand: "Nykaa",
      review:
        "Coll-Edge Connect helped us as a last moment saviour in closing some crucial deals which none of the other agency was able to. Truly a life saver!",
    },
    {
      author: "Brand Marketing Manager",
      brand: "PhysicsWallah",
      review:
        "Got the best deals with college and truly justified work, the team worked with college students to get the best output for the brand and also helped us to reach right audience.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative flex flex-col items-center gap-4 lg:gap-8"
    >
      <div className="relative flex w-full max-w-7xl flex-col px-8 lg:gap-4">
        <span className="text-[10px] font-bold tracking-widest text-[#144BE9] uppercase lg:text-[15px]">
          Our Community
        </span>
        <span className="text-[32px] font-bold lg:text-6xl">
          Community love us
        </span>
        <div className="absolute top-4 left-77 -z-10 h-9 w-12 rounded-[22px] bg-[#6687E5]/60 lg:top-8.5 lg:left-130.75 lg:h-15.5 lg:w-20.5" />
      </div>
      <div
        style={
          {
            "--width": "clamp(340px,48dvw,512px)",
            "--quantity": collegeTestimonials.length,
            "--duration": "54s",
          } as React.CSSProperties
        }
        className="testimonials slider h-50 w-full max-w-full self-start overflow-hidden lg:h-75"
      >
        <div className="list relative flex min-w-[calc(var(--width)*var(--quantity))]">
          {collegeTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              position={index + 1}
              author={testimonial.author}
              affiliation={testimonial.college}
              event={testimonial.event}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
      <div
        style={
          {
            "--width": "clamp(340px,48dvw,512px)",
            "--quantity": brandTestimonials.length,
            "--duration": "54s",
          } as React.CSSProperties
        }
        className="testimonials slider_alternate h-50 w-full max-w-full self-start overflow-hidden lg:h-75"
      >
        <div className="list relative flex min-w-[calc(var(--width)*var(--quantity))]">
          {brandTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              position={index + 1}
              author={testimonial.author}
              affiliation={testimonial.brand}
              event={testimonial.event}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
      <div className="absolute -right-32 -bottom-24 -z-10 hidden size-88 rounded-full bg-[#234AFF]/25 blur-3xl lg:block" />
    </section>
  );
}
