import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className="footer">
            <div className='icons'>
                <a href='https://www.linkedin.com/in/chudi-ibida/'>
                    <LinkedInIcon fontSize='large'/>
                </a>
                <a href='mailto:chudiibida3@gmail.com'>
                    <MailOutlineIcon fontSize='large'/>
                </a>
                <a href='https://github.com/Chudii'>
                    <GitHubIcon fontSize='large'/>
                </a>
            </div>
            <p>&copy; 2023 CodeNameChu</p>
        </div>
    )
}

export default Footer;