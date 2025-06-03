import { ReactNode } from "react";
import { CenterOrbit } from "./CenterOrbit";
import { cn } from "@/lib/utils";

interface OrbitPosition {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  transform?: string;
}

interface OrbitItemProps {
  children: ReactNode;
  position: OrbitPosition;
  delay: string;
  animation: string;
}

function OrbitItem({ children, position, delay, animation }: OrbitItemProps) {
  return (
    <div 
      className={cn("absolute", animation)}
      style={{
        ...position,
        animationDelay: delay,
      }}
    >
      {children}
    </div>
  );
}

interface OrbitLayoutProps {
  children?: ReactNode;
  centerTitle?: string;
  className?: string;
}

export function OrbitLayout({ children, centerTitle = "TOOLS", className }: OrbitLayoutProps) {
  return (
    <div className={cn("relative w-full h-full min-h-[600px]", className)}>
      {/* Center orbit */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36">
        <CenterOrbit title={centerTitle} />
      </div>
      
      {/* Orbit children */}
      {children}
    </div>
  );
}

OrbitLayout.Item = OrbitItem;