"use client";

import { useToast } from "@/hooks";
import { CircleAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormErrorProps {
    message?: string;
}

export const ToastError = ({ message }: FormErrorProps) => {
    const visible = useToast(message || "");
    
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.2 }}
                className="fixed top-[10%] left-1/2 z-150 transform bg-white shadow-md text-base p-4 space-x-2 rounded-md flex items-center"
                style={{ minWidth: '250px', maxWidth: '90vw' }}
              >
                <CircleAlert className="h-4 w-4 text-destructive" />
                <span className="text-overflow-ellipsis">{message}</span>
              </motion.div>
            )}
        </AnimatePresence>
    )
}