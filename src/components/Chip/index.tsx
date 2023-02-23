import { TechProps } from "../../@types/user";
import { TEXT_COLORS } from "../../utils";

export function Chip({ icon, color = "gray", tech }: TechProps) {
    return (
        <div className={`flex items-center font-medium rounded-full border ${TEXT_COLORS[color]}`}>
            {icon && (
                <img className="rounded-full w-5 h-5" alt="A"
                  src={icon} />
            )}
            <div className="text-xs mx-2 font-normal leading-none max-w-full flex-initial">{tech}</div>
        </div>
    )
}
