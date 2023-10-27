"use client";
import { Dialog } from "@mui/material";
import { useState } from "react";

export default function HomeTemplate() {
  const [name, setName] = useState("");

  function handleSave() {
    localStorage.setItem("username", name);
  }

  return <Dialog open={true} onClose={() => ""}></Dialog>;
}
