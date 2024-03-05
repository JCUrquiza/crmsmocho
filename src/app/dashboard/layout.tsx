import { Sidebar, TopMenu } from '@/components';
import { Providers } from '@/store/Providers';

export default function LoginLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="min-h-screen">

      <Providers>
        
        <TopMenu />
        <Sidebar />

        <div className="px-0 sm:px-10">
          { children }
        </div>

      </Providers>

    </main>
  )

}
