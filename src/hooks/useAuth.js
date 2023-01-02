import { useSelector } from "react-redux";

export default function useAuth() {
    // redux store theke true ba false return korbe ..
    const auth = useSelector((state) => state.auth);
    console.log("auth from useAuth hook 😅 ", auth);
    if (auth?.accessToken && auth?.user) {
        return true;
    } else {
        return false;
    }
}
/**
 * logged in thaka ba na thaka er bepar ta kintu amader redux store e ase ..
 * sheta amra component e useSelector diye dhorte pari ba nite pari .. kintu sheta jeno re-usable hoy ..
 * shetar jonno amra ekta hook baniye nicchi ..
 *
 * er kaj ashole kichui na .. she redux store theke amader return kore dibe ..je auth er accessToken ar
 * user ase kina .. // thakle true return korbe ..
 */
