import { Outlet } from "react-router-dom"
import { NavMenu } from "./"


export const Portfolio = () => {
    return (
        <>
            <header>
                <div className="logo-container">
                    <img className='logo-img' alt='logo' src="../../resources/images/logo.png" />
                </div>
                <NavMenu />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
