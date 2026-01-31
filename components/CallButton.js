
import { Phone } from 'lucide-react';

const CallButton = ({
    phoneNumber = "06 74 81 37 21",
    telLink = "+33674813721",
    className = "btn btn-accent",
    iconColor = "#0A2463",
    iconSize = 30
}) => {
    return (
        <a href={`tel:${telLink}`} className={className}>
            <Phone size={iconSize} color={iconColor} /> {phoneNumber}
        </a>
    );
};

export default CallButton;
