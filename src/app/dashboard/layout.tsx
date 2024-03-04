import { TopMenu } from '@/components';

export default function LoginLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="min-h-screen">

      <TopMenu />

      <div className="px-0 py-20 sm:px-10 bg-blue-400">
        { children }
      </div>

    </main>
  )

}
