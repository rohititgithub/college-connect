import TestimonialCard from "../../components/TestimonialCard";

export default function TestimonialsSection() {
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
            "--quantity": 9,
            "--duration": "54s",
          } as React.CSSProperties
        }
        className="slider my-6 w-full max-w-full self-start overflow-hidden"
      >
        <div className="list relative flex min-w-[calc(var(--width)*var(--quantity))]">
          <TestimonialCard
            position={1}
            author="Lee Davis"
            review="Lorem ipsum dolor sit amet consectetur. In et arcu nulla magnis pulvinar. Ut morbi amet ipsum lectus tristique sapien sed enim. Egestas adipiscing non pulvinar a. Ultricies sem commodo a malesuada elementum morbi a in. "
          />
          <TestimonialCard
            position={2}
            author="Daniel Corwin"
            review="Lorem ipsum dolor sit amet consectetur. Sed ut semper sodales id fringilla posuere egestas. Eget ultrices adipiscing augue urna."
          />
          <TestimonialCard
            position={3}
            author="Bonnie Upton"
            review="Lorem ipsum dolor sit amet consectetur. Sed quam sed duis commodo adipiscing ipsum et. Arcu urna sit lectus malesuada convallis integer et. Tempor velit euismod feugiat in proin habitant imperdiet vulputate."
          />
          <TestimonialCard
            position={4}
            author="Lee Davis"
            review="Lorem ipsum dolor sit amet consectetur. In et arcu nulla magnis pulvinar. Ut morbi amet ipsum lectus tristique sapien sed enim. Egestas adipiscing non pulvinar a. Ultricies sem commodo a malesuada elementum morbi a in. "
          />
          <TestimonialCard
            position={5}
            author="Daniel Corwin"
            review="Lorem ipsum dolor sit amet consectetur. Sed ut semper sodales id fringilla posuere egestas. Eget ultrices adipiscing augue urna."
          />
          <TestimonialCard
            position={6}
            author="Bonnie Upton"
            review="Lorem ipsum dolor sit amet consectetur. Sed quam sed duis commodo adipiscing ipsum et. Arcu urna sit lectus malesuada convallis integer et. Tempor velit euismod feugiat in proin habitant imperdiet vulputate."
          />
          <TestimonialCard
            position={7}
            author="Lee Davis"
            review="Lorem ipsum dolor sit amet consectetur. In et arcu nulla magnis pulvinar. Ut morbi amet ipsum lectus tristique sapien sed enim. Egestas adipiscing non pulvinar a. Ultricies sem commodo a malesuada elementum morbi a in. "
          />
          <TestimonialCard
            position={8}
            author="Daniel Corwin"
            review="Lorem ipsum dolor sit amet consectetur. Sed ut semper sodales id fringilla posuere egestas. Eget ultrices adipiscing augue urna."
          />
          <TestimonialCard
            position={9}
            author="Bonnie Upton"
            review="Lorem ipsum dolor sit amet consectetur. Sed quam sed duis commodo adipiscing ipsum et. Arcu urna sit lectus malesuada convallis integer et. Tempor velit euismod feugiat in proin habitant imperdiet vulputate."
          />
        </div>
      </div>
      <div className="absolute -right-32 -bottom-24 -z-10 size-88 rounded-full bg-[#234AFF]/25 blur-3xl" />
    </section>
  );
}
