import { SvgIconProps } from "@mui/material";

interface SideBarListProps {
  title?: string;
  icon?: React.ElementType<SvgIconProps>;
  onClick?: () => void;
  isClicked?: boolean;
}

export default function SideBarList({
  title,
  icon: Icon,
  onClick,
  isClicked,
}: SideBarListProps) {
  return (
    <li
      className={`cursor-pointer md:pl-4 mb-2 p-2.5 text-xs sm:pl-9 ${
        isClicked
          ? "bg-green-100 font-semibold border-r-2 border-green-700 transition-all"
          : "hover:font-semibold hover:bg-green-100"
      }`}
      onClick={onClick}
    >
      <div className="flex">
        {Icon && <Icon className="mr-2" fontSize="small" />}
        <div className="sm:hidden md:block">{title}</div>
      </div>
    </li>
  );
}
