import TestimonialCard from "../../components/TestimonialCard";

type testimonial = {
  author: string;
  college: string;
  event?: string;
  review: string;
};

export default function TestimonialsSection() {
  const testimonials: testimonial[] = [
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

  return (
    <section
      id="testimonials"
      className="relative flex flex-col items-center gap-8"
    >
      <div className="relative flex w-7xl flex-col gap-5">
        <span className="text-[15px] font-bold tracking-widest text-[#144BE9] uppercase">
          Our Community
        </span>
        <span className="text-6xl font-bold">Community love us</span>
        <div className="absolute top-8.5 left-130.75 -z-10 h-15.5 w-20.5 rounded-[22px] bg-[#144BE9]/60" />
      </div>
      <div
        style={
          {
            "--width": "488px",
            "--height": "330px",
            "--quantity": testimonials.length,
            "--duration": "54s",
          } as React.CSSProperties
        }
        className="slider my-6 w-full max-w-full self-start overflow-hidden"
      >
        <div className="list relative flex min-w-[calc(var(--width)*var(--quantity))]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              position={index + 1}
              author={testimonial.author}
              college={testimonial.college}
              event={testimonial.event}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
      <div className="absolute -right-32 -bottom-24 -z-10 size-88 rounded-full bg-[#234AFF]/25 blur-3xl" />
    </section>
  );
}
