interface LogoProps {
  className?: string;
  showText?: boolean;
  darkMode?: boolean;
}

export default function Logo({ className = "h-16", showText = true, darkMode = false }: LogoProps) {
  // Slate/Charcoal vs White
  const primaryColor = darkMode ? "#ffffff" : "#111827"; 
  // Vibrant Lime Accent
  const accentColor = darkMode ? "#98e683" : "#46b82e"; 
  
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Geometric Icon - Abstract Landscape/M */}
      <svg 
        viewBox="0 0 80 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Solid background square for impact */}
        <rect width="80" height="80" rx="0" fill={primaryColor} />
        
        {/* Stylized 'M' / Landscape Form */}
        {/* Left peak */}
        <path d="M20 50L35 25L45 40" stroke={accentColor} strokeWidth="6" strokeLinecap="square" />
        {/* Right peak / continuation */}
        <path d="M40 40L55 15L70 50" stroke="white" strokeWidth="6" strokeLinecap="square" />
        
        {/* Ground line */}
        <rect x="15" y="60" width="50" height="4" fill="white" />
      </svg>
      
      {/* Text - Bold, Uppercase, Modern */}
      {showText && (
        <div className="flex flex-col leading-none justify-center">
          <span 
            className="font-display text-2xl font-bold tracking-tight uppercase"
            style={{ color: primaryColor }}
          >
            Mansfield
          </span>
          <span 
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: primaryColor, opacity: 0.7 }}
          >
            Landscape Co.
          </span>
        </div>
      )}
    </div>
  );
}
