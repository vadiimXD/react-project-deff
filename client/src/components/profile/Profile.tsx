import "./Profile.css"

import { useEffect, useState } from "react";
import ProfileCard from "../profileCard/profileCard";
import requester from "../../utils/requester";
import { ShoeType } from "../../types/ShoeType";

export default function Profile() {
    const authStringify: any = localStorage.getItem("auth")
    const auth = JSON.parse(authStringify)

    const [profile, setProfile] = useState<any>({});

    useEffect(() => {
        (async () => {
            try {
                const response = await requester(`http://localhost:1337/user/${auth?.userId}`, "GET")
                const result = await response.json();
                setProfile(result)

            } catch (error) {
                alert(error)
            }
        })()
    }, [])

    return (
        <section className="profile-container">
            <img src="https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg" alt="Profile Picture" />
            <h1>{auth?.email}</h1>

            <div className="shoes-section">

                <h2>Added shoes</h2>
                {profile?.addedShoes?.length != 0 ? (

                    profile?.addedShoes?.map((shoe: ShoeType) => <ProfileCard key={shoe._id} shoe={shoe} />)

                ) : (<h1>No added shoes!</h1>)}

            </div>
        </section>
    );

}
