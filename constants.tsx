import type React from "react"

export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
  </svg>
)

export const sidebarIcons = [
  {
    id: "gauge",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.25 12a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0Z" />
        <path d="M12 12l4-4" />
        <path d="M12 12v4.313" />
      </svg>
    ),
  },
  {
    id: "globe",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M3 12h18M12 3a15.3 15.3 0 010 18M12 3a15.3 15.3 0 000 18"></path>
      </svg>
    ),
  },
  {
    id: "bar",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 21V10M10 21V4M16 21v-7M22 21H2"></path>
      </svg>
    ),
  },
  {
    id: "line",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 17l6-6 4 3 7-7" />
        <path d="M22 21H2" />
      </svg>
    ),
  },
  {
    id: "grid",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    ),
  },
  {
    id: "search",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
  },
  {
    id: "history",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 4v6h6"></path>
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
      </svg>
    ),
  },
]

export const bottomSidebarIcons = [
  {
    id: "settings",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-1.007 1.11-.95.542.056 1.007.56 1.11 1.11.056.542-.056 1.007-.478 1.402-.268.243-.632.39-.99.39-.36 0-.722-.147-.99-.39-.422-.395-.534-.86-.478-1.402zM19.5 10.5c.542.09.95.56 1.007 1.11.056.542-.056 1.007-.478 1.402-.268.243-.632.39-.99.39-.36 0-.722-.147-.99-.39-.422-.395-.534-.86-.478-1.402a1.5 1.5 0 011.402-.92zM4.5 10.5c.542.09.95.56 1.007 1.11.056.542-.056 1.007-.478 1.402-.268.243-.632.39-.99.39-.36 0-.722-.147-.99-.39-.422-.395-.534-.86-.478-1.402a1.5 1.5 0 011.402-.92zM12 15.594c.542.09.95.56 1.007 1.11.056.542-.056 1.007-.478 1.402-.268.243-.632.39-.99.39-.36 0-.722-.147-.99-.39-.422-.395-.534-.86-.478-1.402a1.5 1.5 0 011.402-.92zM12 12a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v.75m0 13.5v.75m-6.75-8.25h-.75m13.5 0h-.75M4.938 6.223l-.53 1.06m10.124-1.06l.53 1.06M4.938 17.777l-.53-1.06m10.124 1.06l.53-1.06"
        />
      </svg>
    ),
  },
  {
    id: "help",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    ),
  },
  {
    id: "profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
]
