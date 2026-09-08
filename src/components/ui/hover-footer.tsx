import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text = "FB SEVEN",
  className,
}: {
  text?: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  return (
    /* Desktop and Tablet Version: Single line with generous viewBox padding so it never overflows */
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none uppercase pointer-events-none", className)}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="rgba(0, 242, 254, 0.55)"
        strokeWidth="0.38"
        className="fill-transparent font-[helvetica] text-7xl font-bold tracking-wider"
        style={{
          filter: "drop-shadow(0 0 8px rgba(0, 242, 254, 0.45)) drop-shadow(0 0 20px rgba(0, 242, 254, 0.2))",
        }}
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #00f2fe15 100%)",
      }}
    />
  );
};
