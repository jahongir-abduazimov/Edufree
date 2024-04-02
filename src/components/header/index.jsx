import "./style.scss";
import { Container } from "@containers";

const index = () => {
    return (
        <header className="bg-[#1C1E53]">
            
            <Container>
            <nav className="flex items-center h-[90px] justify-between">
                    <div className="logo">
                        <a className="font-bold text-[24px] text-white uppercase leading-[0.12px]" href="/">[Edufree]</a>
                    </div>
                    <div className="menu flex items-center gap-[72px]">
                        <ul className="flex items-center gap-[34px]">
                            <li><a className="text-[#fff]" href="/">HOME</a></li>
                            <li><a className="text-[#fff]" href="#">TENTANG KAMI</a></li>
                            <li><a className="text-[#fff]" href="#">KURSUS</a></li>
                            <li><a className="text-[#fff]" href="#">FAQ</a></li>
                            <li><a className="text-[#fff]" href="#">BLOG</a></li>
                        </ul>
                        <div>
                            <button className="py-[13px] px-10 border rounded-[5px] text-white hover:bg-white hover:text-[#1C1E53] duration-200">Login</button>
                        </div>
                    </div>
                </nav>
            </Container>
            
        </header>
    );
};

export default index;
