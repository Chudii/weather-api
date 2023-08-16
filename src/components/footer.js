import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className="footer">
            <div className='icons'>
                <LinkedInIcon fontSize='large'/>
                <MailOutlineIcon fontSize='large'/>
                <GitHubIcon fontSize='large'/>
            </div>
            <p>&copy; 2023 CodeNameChu</p>
        </div>
    )
}

export default Footer;