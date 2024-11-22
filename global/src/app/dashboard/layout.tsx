import Menu from "@/components/Menu/Menu";

export const viewport = {
initialScale: 1.0,
width: "device-width",
colorScheme: "light",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return <div>
    <Menu/>
    {children}
    </div>;
}
