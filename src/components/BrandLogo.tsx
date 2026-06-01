import { ASSETS } from "../data";

type BrandLogoProps = {
  variant?: "nav" | "reveal";
  className?: string;
};

const variantClasses: Record<NonNullable<BrandLogoProps["variant"]>, string> = {
  nav: "h-16 sm:h-[4.25rem] md:h-20 w-full max-w-[min(100%,300px)] sm:max-w-[360px] md:max-w-[400px] object-contain object-left",
  reveal:
    "w-full max-w-3xl sm:max-w-4xl md:max-w-5xl h-auto min-h-[6.5rem] sm:min-h-[9rem] md:min-h-[10rem] object-contain",
};

export default function BrandLogo({
  variant = "nav",
  className = "",
}: BrandLogoProps) {
  return (
    <img
      src={ASSETS.logo}
      alt="Komorebi — Casa de Té"
      className={`${variantClasses[variant]} ${className}`.trim()}
      width={variant === "reveal" ? 640 : 320}
      height={variant === "reveal" ? 200 : 80}
      decoding="async"
    />
  );
}
