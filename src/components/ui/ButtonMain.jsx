function ButtonMain({ children, className = "", ...props }) {
  return (
    <>
      <button
        className={`border-2 hover:scale-105 cursor-pointer transition-all duration-400 ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export default ButtonMain;
