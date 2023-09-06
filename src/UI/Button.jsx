const Button = ({ children, className, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center px-4 py-1  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
