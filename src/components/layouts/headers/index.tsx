import Link from "next/link";
import { Container } from "~/components/common";
import SearchButton from "~/components/search/SearchButton";

function Header() {
    return (
        <Container>
            <header className='flex justify-between py-2'>
                <div>
                    <Link href='/' className='text-lg font-bold'>
                        Home
                    </Link>
                </div>

                <SearchButton />
            </header>
        </Container>
    );
}

export default Header;
