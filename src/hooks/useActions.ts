import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { toggleFavorites } from "../store/favorites/favorites.slice"
import { useMemo } from "react"
import * as userActions from "../components/user/user.actions"

const rootActions = {
    toggleFavorites,
    ...userActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}