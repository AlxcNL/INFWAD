import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="song">Song</NavLink>
          <NavLink to="translation">Translation</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
