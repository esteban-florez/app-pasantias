import Link from 'next/link'
import ProfileIcon from '@/components/ProfileDropdown'

export default function Navbar() {
  return (
    /**
     * ! <nav> doesn't work, only <div> must be fixed.
     */
    <div className="navbar border-b-2 border-gray-500 bg-base-100">
      {/* Page icon */}
      <div className="navbar-start">
        <button className="btn-ghost btn-circle btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <Link
          href="/"
          className="btn-ghost btn text-left font-title text-xl normal-case text-white"
        >
          PasantíasApp
        </Link>
      </div>

      {/* Messages */}
      <div className="navbar-end mr-4 gap-2">
        <Link href="/chats">
          <button className="btn-ghost btn-circle btn">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[2rem] w-[2rem] fill-white"
                fill="none"
                viewBox="0 0 512 512"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"
                />
              </svg>

              <span className="badge badge-xs indicator-item right-0 top-2 h-[0.6rem] w-4 border bg-secondary" />
            </div>
          </button>
        </Link>

        {/* Notification */}
        <button className="btn-ghost btn-circle btn">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[2rem] w-[2rem] fill-white"
              fill="none"
              viewBox="0 0 448 512"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29c0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29c-6 6.45-8.66 14.16-8.61 21.71c.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32c.05-7.55-2.61-15.27-8.61-21.71z"
              />
            </svg>

            <span className="badge badge-xs indicator-item right-1 top-2 h-[0.6rem] w-4 border bg-secondary" />
          </div>
        </button>

        {/* Profile */}
        <ProfileIcon />
      </div>
    </div>
  )
}
