import { HeaderContainer, HeaderText } from "./styles";


export default function Header() {
    return (
        <HeaderContainer className="gap-x-[5rem]">
            <HeaderText>Início</HeaderText>
            <HeaderText>Dashboard</HeaderText>
            <HeaderText>API Status</HeaderText>
        </HeaderContainer>
    )
}