import { Avatar, Box, IconButton } from "@mui/material"
import React from "react"
import { avatar_list } from "../assets/avatar_list"
import { colors } from "../style/colors"
import { FaBan } from "react-icons/fa"

interface CardPlayerProps {
    variant?: boolean
}

export const CardPlayer: React.FC<CardPlayerProps> = ({ variant }) => {
    return (
        <Box sx={{ flexDirection: "row", justifyContent: "space-between", width: "100%", gap: "2vw" }}>
            <Box
                sx={{
                    alignItems: "center",
                    gap: "3vw",
                    flexDirection: "row",
                    width: "50%",
                }}
            >
                <Avatar
                    src={avatar_list[15]}
                    sx={{ width: "10vw", height: "10vw", alignSelf: "center", bgcolor: colors.button }}
                />
                <p style={{ fontFamily: "KG", fontSize: "8vw", margin: 0, color: variant ? "#000" : "#fff" }}>Ana</p>
            </Box>
            <Box sx={{ gap: "1vw" }}>
                {!variant && (
                    <IconButton sx={{ bgcolor: colors.button, width: "13vw" }}>
                        <p
                            style={{
                                fontFamily: "KG",
                                fontSize: "6vw",
                                margin: 0,
                                borderRadius: "2vw",
                                fontWeight: "800",
                                color: "#000",
                            }}
                        >
                            1º
                        </p>
                    </IconButton>
                )}
                <IconButton sx={{ bgcolor: variant ? "red" : colors.button, width: "13vw" }}>
                    {variant ? (
                        <FaBan color="#000" />
                    ) : (
                        <p
                            style={{
                                fontFamily: "KG",
                                fontSize: "5vw",
                                margin: 0,
                                borderRadius: "2vw",
                                fontWeight: "800",
                                color: "#000",
                            }}
                        >
                            125
                        </p>
                    )}
                </IconButton>
            </Box>
        </Box>
    )
}
