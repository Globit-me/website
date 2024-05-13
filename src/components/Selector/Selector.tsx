"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import flagUS from "/public/banderas/US.png"
import flagPY from "/public/banderas/PY.png"
import flagAR from "/public/banderas/AR.png"
import flagCL from "/public/banderas/CL.png"


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
          <SelectItem value="PY"><Image src={flagPY} width={24} height={24} alt="US" /></SelectItem>
          <SelectItem value="AR"><Image src={flagAR} width={24} height={24} alt="US" /></SelectItem>
          <SelectItem value="CL"><Image src={flagCL} width={24} height={24} alt="US" /></SelectItem>
          <SelectItem value="US"><Image src={flagUS} width={24} height={24} alt="US" /></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
