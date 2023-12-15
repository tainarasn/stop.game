import { Box } from "@mui/material"
import React from "react"
import { colors } from "../../style/colors"
import { Header } from "../../components/Header"
import { ButtonStop } from "../../components/ButtonStop"
import { button_style } from "../../style/button"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import logo from "../../assets/logo/logo.png"
import { useNavigate } from "react-router-dom"
interface HallRoomProps {}

export const HallRoom: React.FC<HallRoomProps> = ({}) => {
    const navigate = useNavigate()

    const button_hall = {
        bgcolor: colors.button,
        fontSize: "8vw",
        width: "70%",
        color: "#000",
    }
    return (
        <Box sx={{ flexDirection: "column", width: "100%", height: "100%", gap: "4vw" }}>
            <Header color={colors.primary} bgIcon={colors.button} />
            <Box
                sx={{
                    width: "100%",
                    height: "90%",
                    bgcolor: colors.primary,
                    borderRadius: "4vw",
                    p: "12vw",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4vw",
                }}
            >
                <Box
                    sx={{
                        bgcolor: "#fff",
                        width: "100%",
                        height: "60%",
                        borderRadius: "4vw",
                        flexDirection: "column",
                        p: "4vw",
                        alignItems: "center",
                        gap: "5vw",
                        justifyContent: "space-between",
                    }}
                >
                    <img src={logo} style={{ width: "30%" }} />
                    <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                        <p style={{ fontFamily: "KG", fontSize: "8vw", color: "#000" }}>Sala #nomedasala</p>
                        <p style={{ fontFamily: "KG", fontSize: "6vw", color: "#000" }}>Compartilhe com seus amigos</p>
                        <Box sx={{ flexDirection: "row", alignItems: "center", gap: "3vw", color: "#000" }}>
                            <p style={{ fontFamily: "KG", fontSize: "6vw", color: "#000",margin:"0" }}>#link</p>
                            <ContentCopyIcon />
                        </Box>
                    </Box>

                    <p style={{ fontFamily: "KG", fontSize: "7vw", color:"#000" }}>Anfitrião, inicie o jogo!</p>
                </Box>

                <ButtonStop sx={{ ...button_style, ...button_hall }} onClick={() => navigate("/room/1/round")}>
                    Iniciar
                </ButtonStop>
                <ButtonStop sx={{ ...button_style, ...button_hall }} onClick={() => navigate("/")}>
                    Categorias
                </ButtonStop>
                <ButtonStop sx={{ ...button_style, ...button_hall }} onClick={() => navigate("/")}>
                    Configurações
                </ButtonStop>
            </Box>
        </Box>
    )
}
