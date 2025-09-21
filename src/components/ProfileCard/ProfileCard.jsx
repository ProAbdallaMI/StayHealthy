import { Navigate, useNavigate } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = () => {
	const navigate = useNavigate();
	return (
		<div onClick={() => navigate("/profile")} className="profile-card">
			Your Profile
		</div>
	);
};

export default ProfileCard;
