import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Box, ThemeProvider } from "@mui/material"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { SnackbarProvider } from "burgos-snackbar"
import { ConfirmDialogProvider } from "burgos-confirm"
import { IoProvider } from "./contexts/ioContext"
import { AvatarProvider } from "./contexts/avatarContext"
import { MantineProvider } from "@mantine/core"
import { useMantineTheme } from "./hooks/useMantineTheme"
import "@mantine/core/styles.css"
import { MenuCategoriesProvider } from "./contexts/menuCategoriesContext"
import { MenuPlayersProvider } from "./contexts/menuPlayersContext"
import { HostProvider } from "./contexts/hostContext"
import { RoomProvider } from "./contexts/roomContext"
import { RoomsProvider } from "./contexts/roomsContext"
import { PlayerProvider } from "./contexts/playerContext"
import { PlayersProvider } from "./contexts/playersContext"

interface ProvidersProps {
    children?: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const mui_theme = useMuiTheme()
    const mantine_theme = useMantineTheme()

    return (
        <BrowserRouter>
            <IoProvider>
                <PlayerProvider>
                    <HostProvider>
                        <RoomsProvider>
                            <RoomProvider>
                                <PlayersProvider>
                                    <AvatarProvider>
                                        <ThemeProvider theme={mui_theme}>
                                            <MenuPlayersProvider>
                                                <MenuCategoriesProvider>
                                                    <SnackbarProvider>
                                                        <ConfirmDialogProvider>
                                                            <IoProvider>
                                                                <MantineProvider theme={mantine_theme}>
                                                                    {children}
                                                                </MantineProvider>
                                                            </IoProvider>
                                                        </ConfirmDialogProvider>
                                                    </SnackbarProvider>
                                                </MenuCategoriesProvider>
                                            </MenuPlayersProvider>
                                        </ThemeProvider>
                                    </AvatarProvider>
                                </PlayersProvider>
                            </RoomProvider>
                        </RoomsProvider>
                    </HostProvider>
                </PlayerProvider>
            </IoProvider>
        </BrowserRouter>
    )
}
