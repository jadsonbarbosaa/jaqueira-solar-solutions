const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sun circle */}
      <circle cx="30" cy="30" r="18" fill="hsl(45 100% 62%)" />
      
      {/* Sun rays */}
      <g stroke="hsl(45 100% 62%)" strokeWidth="2.5" strokeLinecap="round">
        <line x1="30" y1="6" x2="30" y2="2" />
        <line x1="30" y1="58" x2="30" y2="54" />
        <line x1="6" y1="30" x2="2" y2="30" />
        <line x1="58" y1="30" x2="54" y2="30" />
        <line x1="13" y1="13" x2="10" y2="10" />
        <line x1="50" y1="50" x2="47" y2="47" />
        <line x1="13" y1="47" x2="10" y2="50" />
        <line x1="50" y1="10" x2="47" y2="13" />
      </g>
      
      {/* Leaf/Tree element */}
      <path
        d="M30 48 C30 38, 38 32, 30 20 C22 32, 30 38, 30 48"
        fill="hsl(152 48% 24%)"
      />
      <path
        d="M30 20 C25 28, 22 35, 30 48"
        stroke="hsl(152 48% 30%)"
        strokeWidth="1"
        fill="none"
      />
      
      {/* Text */}
      <text
        x="70"
        y="28"
        fill="hsl(152 48% 24%)"
        fontFamily="Montserrat, sans-serif"
        fontWeight="700"
        fontSize="16"
      >
        JAQUEIRA
      </text>
      <text
        x="70"
        y="45"
        fill="hsl(152 48% 24%)"
        fontFamily="Montserrat, sans-serif"
        fontWeight="500"
        fontSize="11"
        letterSpacing="0.1em"
      >
        ENERGIA SOLAR
      </text>
    </svg>
  );
};

export default Logo;
