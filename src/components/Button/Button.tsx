import { useNavigate } from "react-router-dom";

interface Props {
    name: string;
    path: string;
    primary?: string;
}

const Button = ({ name, path, primary }: Props) => {
    const navigate = useNavigate();
    const handleCliclButton = () => {
        navigate(`${path}`);
    };
    return (
        <>
            <button
                className={`m-[10px] text-content font-extralight py-2 px-5 rounded-lg duration-300 ${
                    primary
                        ? "bg-primary text-black hover:scale-110"
                        : "border border-primary text-white hover:bg-primary hover:scale-110 hover:text-black"
                } `}
                onClick={handleCliclButton}
            >
                {name}
            </button>
        </>
    );
};

export default Button;
