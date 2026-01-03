import Logo from "../assets/Coll-Edge_Connect_Logo.png";

export default function Header() {
  function goTo(id: string) {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  return (
    <header className="mx-auto mt-7.5 flex w-7xl items-center gap-11.5">
      <img
        src={Logo}
        alt="Coll-Edge_Connect_Logo"
        className="mr-auto"
        width={207}
      />
      <nav className="flex gap-13.5 text-[17px] font-semibold text-[#382F68]">
        <button
          type="button"
          onClick={() => goTo("home")}
          className="cursor-pointer underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#382F68] active:text-[#234AFF] active:decoration-[#234AFF]"
        >
          <span>Home</span>
        </button>
        <button
          type="button"
          onClick={() => goTo("services")}
          className="cursor-pointer underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#382F68] active:text-[#234AFF] active:decoration-[#234AFF]"
        >
          <span>Our Work</span>
        </button>
        <button
          type="button"
          onClick={() => goTo("about")}
          className="cursor-pointer underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#382F68] active:text-[#234AFF] active:decoration-[#234AFF]"
        >
          <span>About Us</span>
        </button>
        <button
          type="button"
          onClick={() => goTo("contact")}
          className="cursor-pointer underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#382F68] active:text-[#234AFF] active:decoration-[#234AFF]"
        >
          <span>Contact Us</span>
        </button>
      </nav>
      <button
        type="button"
        onClick={() => goTo("contact")}
        className="flex cursor-pointer items-center gap-1.5 rounded-full bg-black px-4.25 py-2.5 transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none"
      >
        <div className="size-3 rounded-full bg-[#4F52FF]/25 p-0.75">
          <div className="size-1.5 animate-ping rounded-full bg-[#4F52FF] duration-300" />
        </div>
        <span className="text-[15px] font-bold text-white">
          Partner with Us
        </span>
      </button>
    </header>
  );
}
