import React from 'react'


const StackCard = ({colStart, rowStart, number, stack, info, txtColor, bgColor, borderColor}) => {
  return (
    <div className={`mx-auto flex flex-col justify-center ${colStart || ""} ${rowStart || ""} ${bgColor || "bg-primary/10"} border ${borderColor || "border-primary"} p-6 space-y-3 relative w-full md:w-fit`}>
        <span class={`text-[12px] font-mono ${txtColor || "text-primary"}`}>0x{number || "2"}</span>
        <h4 class="text-xl font-bold uppercase italic">{stack || "Tailwind"}</h4>
        <p class="text-[12px] text-slate-500 leading-tight">{info || "Utility-first design systems & rapid prototyping."}</p>
    </div>
  )
}

export default StackCard