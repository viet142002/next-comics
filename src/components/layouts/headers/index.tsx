import Link from "next/link";
import { Container } from "~/components/common";

function Header() {
    return (
        <Container>
            <header>
                <Link href='/'>Home</Link>
            </header>
        </Container>
    );
}

export default Header;
