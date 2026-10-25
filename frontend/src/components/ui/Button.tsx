import { ButtonProps } from "@/types/propTypes";


export default function Button({ text, onClick }: ButtonProps) {


    return (
        <button
            onClick={onClick}
        >
            {text}
        </button>
    )
}