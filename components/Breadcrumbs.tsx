'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { routes } from '@/translations/es'

export default function Breadcrumbs() {
  const pathname = usePathname()

  const structuredPath = () => {
    const segments = pathname.split('/')
    const currentSegments = segments.filter(segment => segment !== '')

    return ['home', ...currentSegments]
  }

  const currentPaths = structuredPath()
  const currentPath = structuredPath().pop()

  return (
    <div className="hidden items-center justify-start p-4 text-sm sm:flex">
      <ul className="flex">
        <li className="flex items-center">~</li>
        {currentPaths.map(path => (
          <li key={path} className="flex items-center before:me-3 before:ms-2 before:block before:opacity-90 before:content-['/']">
            <Link
              href={path === 'home' ? '/' : `/${path}`}
              className={`capitalize no-underline hover:no-underline ${path === currentPath ? 'font-bold text-primary' : 'text-white'}`}
            >
              {routes[path]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
