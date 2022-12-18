import { NavMenu } from "./NavMenu"
import { Presentation } from "./Presentation"
import { SocialLinks } from "./SocialLinks"

export const HomePage = () => {
    return (
        <>
            <header>
                <div className="logo-container">
                    <img className='logo-img' alt='logo' src="../../resources/images/logo.png" />
                </div>
                <NavMenu />
            </header>
            <main>
                <section id="presentation-container">

                    <Presentation />
                    <SocialLinks />
                </section>
            </main>
        </>
    )
}
