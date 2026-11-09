interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const Hamburger = ({ isOpen, onClick }: HamburgerProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 rounded-xl text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer focus:outline-none"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        // "X" icon
        <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      ) : (
        // Hamburger icon
        <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      )}
    </button>
  );
};

export default Hamburger;
