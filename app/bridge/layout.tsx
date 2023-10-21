import Navbar from "@/components/navbar/navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar isPlace={false} />
      {children}
    </>
  )
}
