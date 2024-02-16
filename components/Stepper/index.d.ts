import React from "react";
interface StepperProps {
    total: number;
    current: number;
    title: string;
    backwardAction?: () => void;
}
export declare const Stepper: ({ total, current, title, }: StepperProps) => React.JSX.Element;
export {};
