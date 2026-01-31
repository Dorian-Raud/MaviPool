
import { Mail } from 'lucide-react';

const MailButton = ({
    mail = "mavipool@outlook.fr",
    mailLink = "mavipool@outlook.fr",
    className = "btn btn-accent",
    iconColor = "#0A2463",
    iconSize = 30
}) => {
    return (
        <a href={`mailto:${mailLink}`} className={className}>
            <Mail size={iconSize} color={iconColor} /> {mail}
        </a>
    );
};

export default MailButton;
