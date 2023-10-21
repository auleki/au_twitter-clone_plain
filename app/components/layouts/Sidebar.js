import Logo from "../common/Logo";
import NavLinks from "../common/NavLinks";
import UserProfileInfo from "../common/UserProfileInfo"

export default function Sidebar() {
    return (
        <section className="w-1/4">
            <Logo />
            <NavLinks />
            <UserProfileInfo />
        </section>
    )
}
