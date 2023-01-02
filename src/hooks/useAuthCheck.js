import { useEffect, useState } from "react-redux";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice"; // hook .. slice theke ashse .

// ekhon amra ekta custom hook banabo .
export default function useAuthCheck() {
    /**
     * etar kaj hocche localStorage e amar auth ase kina sheta check kora .. thakle .. take ami ar log in
     * korte dibo na .. true return korbo ar state er moddhe user er information pass kore dibo ..
     */

    // local storage theke amar kaj ta kora lagbe .. localStorage kintu browser er ekta jinish .. eta kintu
    // ekta side effect ..eta kintu react er kaj na .. taile ei kaj ta amake korte hobe useEffect er moddhe

    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const localAuth = localStorage?.getItem("auth"); // amra auth property er moddhe rakhchilam ..
        // localAuth ekta String...
        if (localAuth) {
            const auth = JSON.parse(localAuth);

            // auth er moddhe duita jinish chilo .. ekta accessToken ar arekta user .. //🔴🔵user e ganjam ase may be ..
            if (auth?.accessToken && auth?.user) {
                // localStorage e accesstoken peye gele .. shorashori ta ke logged in koray dibo ..
                dispatch(
                    userLoggedIn({
                        accessToken: auth.accessToken,
                        user: auth.user,
                    })
                );
            }
        }
        setAuthChecked(true);
    }, [dispatch, setAuthChecked]); //setAuthChecked

    return authChecked;
}
