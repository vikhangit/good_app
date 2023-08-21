import { ImageResponse } from "next/server"

export const size = {
    width:32,
    height:32
}

export const contentType = "image/png"

export default function icon() {
return new ImageResponse((
    <div
    style={{
        fontSize: 24,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderRadius: "20px",
    }}>
        <p style={{
            color: "white",
        }}>
            Dw
        </p>
    </div>
))
}