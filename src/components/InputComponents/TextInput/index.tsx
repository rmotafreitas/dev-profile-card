import * as Label from "@radix-ui/react-label";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function TextInput(InputProps: Props) {
    return (
        <div className="flex flex-wrap items-center gap-[15px] px-5">
            <Label.Root className="text-[15px] font-medium leading-[35px] text-white" htmlFor="displayName">
               {InputProps.label} 
            </Label.Root>
            <input
              className="inline-flex h-[35px] w-[200px] 
                         appearance-none items-center 
                         justify-center rounded-[4px] px-[10px] text-[15px] leading-none 
                         shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black]"
              type="text"
              id="displayName"
              {...InputProps}
            />
        </div>
    );
}
