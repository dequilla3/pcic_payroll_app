import { SvgIconProps } from "@mui/material";

interface CardStatusProps {
  title?: string;
  icon?: React.ElementType<SvgIconProps>;
  value?: string;
  valuePercentage?: string;
  bgColor?: string;
}

const bgColorMap: { [key: string]: string } = {
  yellow: "bg-yellow-200",
  blue: "bg-blue-200",
  green: "bg-green-200",
  red: "bg-red-200",
  purple: "bg-purple-200",
  orange: "bg-orange-200",
  teal: "bg-teal-200",
  pink: "bg-pink-200",
  grey: "bg-grey-200",
  black: "bg-black-200",
  navy: "bg-navy-200",
};

export default function CardStatus({
  title,
  icon: Icon,
  value,
  valuePercentage,
  bgColor,
}: CardStatusProps) {
  const bgColorClass = bgColorMap[bgColor || "gray"];

  return (
    <div
      className={`relative w-80 h-36 rounded-lg ${bgColorClass} hover:shadow-lg cursor-pointer`}
    >
      <div className="mt-3 ml-3 mr-3">
        <div className="flex">
          <div className="flex items-center justify-center w-14 h-14 bg-neutral-50 rounded-full">
            {Icon && <Icon className="w-6 h-6" />}
          </div>
          <div>
            <div className="ml-5 mt-2 font-bold text-2xl">{value}</div>
            <div className="ml-5">{title}</div>
          </div>
        </div>
        <div className="absolute bottom-2 left-10 right-10 text-center text-xs text-neutral-400 border-t-2 border-neutral-400 pt-1">
          {valuePercentage}
        </div>
      </div>
    </div>
  );
}
