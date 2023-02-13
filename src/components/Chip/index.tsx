const TEXT_COLORS = {
    red: "text-red-700 bg-red-100 border-red-300",
    blue: "text-blue-700 bg-blue-100 border-blue-300",
    gray: "text-gray-700 bg-gray-100 border-gray-300",
    green: "text-green-700 bg-green-100 border-green-300",
    black: "text-black-700 bg-black-100 border-black-300",
    yellow: "text-yellow-700 bg-yellow-100 border-yellow-300",
}


export interface Props {
    icon?: string;
    color?: keyof typeof TEXT_COLORS;
    tech: string;
}


export function Chip({ icon, color = "gray", tech }: Props) {
    return (
        <div className={`flex items-center font-medium bg-white rounded-full border ${TEXT_COLORS[color]}`}>
            {icon && (
                <img className="rounded-full w-5 h-5" alt="A"
                  src={icon} />
            )}
            <div className="text-xs mx-2 font-normal leading-none max-w-full flex-initial">{tech}</div>
        </div>
    )
}
