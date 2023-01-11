/**
 * loggedIn User Admin kina .. sheta check korbo amra ekhane ..
 */

import { useSelector } from "react-redux";

export default function useAdminCheck() {
    // redux store theke true ba false return korbe ..
    const auth = useSelector((state) => state.auth);
    console.log("auth from useAdminCheck hook 😅 ", auth);
    if (auth?.accessToken && auth?.user?.isAdmin) {
        // user?. ekta komailam
        return true;
    } else {
        return false; // 😎 return false korte hobe
    }
}
