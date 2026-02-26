import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}

let scrollLockCount = 0;

export const lockScroll = () => {
    if (scrollLockCount === 0) {
        document.body.style.setProperty("overflow", "hidden", "important");
        document.body.style.setProperty("touch-action", "none", "important");
    }
    scrollLockCount++;
};

export const unlockScroll = () => {
    scrollLockCount = Math.max(0, scrollLockCount - 1);
    if (scrollLockCount === 0) {
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("touch-action");
    }
};
