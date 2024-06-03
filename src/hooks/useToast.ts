import { useState, useEffect } from "react";

/**
 * Custom hook to manage toast visibility.
 *
 * @param {string} message - The message to be displayed in the toast.
 * @param {number} [duration=3000] - The duration for which the toast should be visible (in milliseconds).
 *
 * @returns {boolean} - A boolean value indicating whether the toast should be visible.
 */
export const useToast = (message: string, duration: number = 3000) => {
    const [visible, setVisible] = useState(!!message);

    useEffect(() => {
        if (message) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, duration);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [message, duration]);

    return visible;
}