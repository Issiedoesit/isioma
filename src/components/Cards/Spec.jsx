import React from 'react'

const Spec = ({number, textColor, label, addBorder}) => {
  return (
    <div className={`font-mono text-sm tracking-tighter uppercase ${addBorder && "border-l-2 pl-4 border-accent-orange"} ${textColor || "text-accent-orange"}`} >Spec-{number || "00"}: {label || "LABEL"}</div>
  )
}

export default Spec