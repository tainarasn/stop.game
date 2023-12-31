import React, { useEffect } from "react"
import { Route, Routes as ReacRoutes } from "react-router-dom"
import { HallRoom } from "./HallRoom"
import { Box } from "@mui/material"
import { Round } from "./Round"
import { Home } from "../Home"
import { Avaliate } from "./Round/Avaliate"
import { Ranking } from "./Round/Ranking"
import { Settings } from "./Settings"
import { Player } from "../../definitions/Player"
import { usePlayer } from "../../hooks/usePlayer"

interface RoomProps {}

export const Room: React.FC<RoomProps> = ({}) => {
    const { player, setPlayer } = usePlayer()
    console.log("routesRoom", player)
    return (
        <Box sx={{ width: "100%" }}>
            <ReacRoutes>
                <Route path="/:roomid" element={<HallRoom />} />
                <Route path="/:roomid/round" element={<Round />} />
                <Route path="/:roomid/round/avaliate" element={<Avaliate />} />
                <Route path="/:roomid/ranking" element={<Ranking />} />
                <Route path="/:roomid/settings" element={<Settings />} />
            </ReacRoutes>
        </Box>
    )
}
