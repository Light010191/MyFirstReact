import Link from "next/link";
import style from './Header.module.css';

const
    pages=[
        {href:'',title:'Home'},
        {href:'/about',title:'About'}
    ];
export default function Header(){
    return <header className={style.header}>
        <nav>
            <ul>
                {pages.map(({href,title})=><li key={href}><Link href={href}></Link></li>)}
                {/* <li><Link href="/">Home</Link></li> */}
                {/* <li><Link href="/about">About</Link></li> */}
            </ul>
        </nav>
    </header>
}