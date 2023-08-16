import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    return (
        <div className="footer">
            <div className='social-media'>
                <div className='icons'>
                    <LinkedInIcon />
                    <MailOutlineIcon />
                    <GitHubIcon />
                </div>
            </div>
            <p>&copy; 2022 CodeNameChu</p>
        </div>
    )
}

export default Footer;