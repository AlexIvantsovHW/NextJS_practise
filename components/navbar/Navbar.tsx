import Link from "next/link"
import s from '../../styles/Navbar.module.css'
const Navbar=()=>{
    return(
        <div className={s.container}>
            <Link href={'/'}>Main</Link>
            <Link href={'/characters'}>Characters</Link>
        </div>
    )
}
export default Navbar;