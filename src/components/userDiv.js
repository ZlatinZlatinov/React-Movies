import { useSignOut, useAuthUser } from "react-auth-kit";
import { logOutUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

export function UserDiv() {
    const signOut = useSignOut();
    const auth = useAuthUser();
    const navigate = useNavigate();

    async function dropUser() {
        const result = await logOutUser(auth().token);

        if (result) {
            signOut();
            navigate('/');
        }
    }

    return (
        <li className="btn signupLink"><button style={{
            backgroundColor: '#dd003f',
            marginLeft: '5px',
            color: '#ffffff',
            padding: '10px 15px',
            borderRadius: '20px',
            border: 'none',
            fontFamily: 'Dosis',
            fontSize: '14px',
            fontWeight: 'bold', 
            cursor: 'pointer'
        }}
            onClick={dropUser}>LOG OUT</button></li>
    );
}