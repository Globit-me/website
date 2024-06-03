"use client";

import { useToast } from "@/hooks";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormErrorProps {
    message?: string;
}

export const ToastSuccess = ({ message }: FormErrorProps) => {
    const visible = useToast(message || "");
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-24 md:mx-[25%] transform -translate-x-1/2 bg-white shadow-md text-lg p-4 space-x-2 rounded-md flex items-center"
                >
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    )
}