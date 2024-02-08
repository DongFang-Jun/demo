"use client";
import { ConfigProvider, theme } from "antd";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm
            }}>
            <ConfigProvider theme={{ cssVar: true, hashed: false }}>{children}</ConfigProvider>
        </ConfigProvider>
    );
}
