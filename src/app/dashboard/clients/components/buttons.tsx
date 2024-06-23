import { DetailsButton } from "./styles"

interface CustomButtonProps {
    color: string
    children: React.ReactNode
    onClick: () => void
}

export default function CustomButton({children, color, onClick}: CustomButtonProps){
    return <DetailsButton onClick={onClick} style={{backgroundColor: color}}>{children}</DetailsButton>
}