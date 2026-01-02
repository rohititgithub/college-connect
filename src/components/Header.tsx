import Logo from "../assets/Coll-Edge_Connect_Logo.png";

export default function Header() {
  return (
    <header className="mx-auto mt-7.5 flex w-7xl items-center gap-11.5">
      <img
        src={Logo}
        alt="Coll-Edge_Connect_Logo"
        className="mr-auto"
        width={207}
      />
      <nav className="flex gap-13.5 text-[17px] font-semibold text-[#382F68]">
        <button type="button">
          <span>Home</span>
        </button>
        <button type="button">
          <span>Our Work</span>
        </button>
        <button type="button">
          <span>About Us</span>
        </button>
        <button type="button">
          <span>Contact Us</span>
        </button>
      </nav>
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-full bg-black px-4.25 py-2.5"
      >
        <div className="size-3 rounded-full bg-[#4F52FF]/25 p-0.75">
          <div className="size-1.5 rounded-full bg-[#4F52FF]"></div>
        </div>
        <span className="text-[15px] font-bold text-white">
          Partner with Us
        </span>
      </button>
    </header>
  );
}
