import Link from 'next/link';
import style from '../styles/page404.module.css';
const Page404 = ()=>{
    return(
        <>
        <div className={style.mydiv22}>
            <h2 className={style.new}>404 page error </h2>
            <Link href="http://localhost:3000/"><a>homepage</a></Link>
        </div>
        </>
    )
}
export default Page404;