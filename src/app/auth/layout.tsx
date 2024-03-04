
export default function LoginLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex justify-center p-10">
            <div className="w-full sm:w-[350px] px-10">
                { children }
            </div>
        </main>
    )
}
