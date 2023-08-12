import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStiles?: string
    handleClick?:MouseEventHandler<HTMLButtonElement>
}