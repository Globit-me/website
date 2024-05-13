"use client"

import { useState } from "react"
import Image from "next/image"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import flagUS from "/public/flags/US.png"
import flagPY from "/public/flags/PY.png"
import flagAR from "/public/flags/AR.png"
import flagCL from "/public/flags/CL.png"


export function Selector() {

    const [selectedValue, setSelectedValue] = useState<string>("PY")

  return (
    <Select
        value={selectedValue}
        onValueChange={(value) => setSelectedValue(value)}
    >
      <SelectTrigger className="w-[90px]">
        <SelectValue placeholder={selectedValue} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="PY"><Image src={flagPY} width={24} height={24} alt="PY" /></SelectItem>
          <SelectItem value="AR"><Image src={flagAR} width={24} height={24} alt="AR" /></SelectItem>
          <SelectItem value="CL"><Image src={flagCL} width={24} height={24} alt="CL" /></SelectItem>
          <SelectItem value="US"><Image src={flagUS} width={24} height={24} alt="US" /></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
