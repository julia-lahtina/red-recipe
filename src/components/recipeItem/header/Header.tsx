import { BsBookmarkHeartFill } from "react-icons/bs"
import s from './Header.module.css'
import { useFavorites } from "../../../hooks/useFavorites"

export const Header = () => {

    const favorites = useFavorites()


    return (
        <header className={s.header}>
            <BsBookmarkHeartFill fontSize={20} />
            <span>{favorites.length}</span>
        </header>
    )
}