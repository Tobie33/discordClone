import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ButtonGroup } from 'react-bootstrap/ButtonGroup';
import Link from 'next/link';
import Image from "next/image"
import discordLogo from "../../public/images/discordLogo.png"
import Button  from 'react-bootstrap/Button';


const DiscordFooter = () => {
  return (
    <footer>
      <div id="footer-box" className='d-flex flex-column justify-content-between'>
        <div id="dropup-avatars-navs" className='d-flex justify-content-between'>
          <div id="dropup-and-avatars">
            <DropdownButton
              as={ButtonGroup}
              key="up"
              id="dropup"
              drop="up"
              variant="secondary"
              title="Drop up"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          </div>
          <div id="footer-navs" className='d-flex'>
            <nav className='footer-nav-cats d-flex flex-column'>
              <h6 className='footer-nav-cat-name'>Product</h6>
                <Link href="#">Download</Link>
                <Link href="#">Nitro</Link>
                <Link href="#">Status</Link>
                <Link href="#">App Directory</Link>
            </nav>
            <nav className='footer-nav-cats d-flex flex-column'>
              <h6 className='footer-nav-cat-name'>Company</h6>
                <Link href="#">About</Link>
                <Link href="#">Jobs</Link>
                <Link href="#">Brand</Link>
                <Link href="#">Newsroom</Link>
            </nav>
            <nav className='footer-nav-cats d-flex flex-column'>
              <h6 className='footer-nav-cat-name'>Resources</h6>
                <Link href="#">College</Link>
                <Link href="#">Support</Link>
                <Link href="#">Safety</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Feedback</Link>
                <Link href="#">Developers</Link>
                <Link href="#">StreamKit</Link>
                <Link href="#">Creators</Link>
                <Link href="#">Community</Link>
                <Link href="#">Official 3rd Party Merch</Link>
            </nav>
            <nav className='footer-nav-cats d-flex flex-column'>
              <h6 className='footer-nav-cat-name'>Policies</h6>
                <Link href="#">Terms</Link>
                <Link href="#">Privacy</Link>
                <Link href="#">Cookie Settings</Link>
                <Link href="#">Guidelines</Link>
                <Link href="#">Acknowledgements</Link>
                <Link href="#">Licenses</Link>
                <Link href="#">Company Information</Link>
            </nav>
          </div>
        </div>
        <div id="open-discord-section" className='d-flex justify-content-between'>
          <Image
            src={discordLogo}
            width={124}
            height={34}
            href="#"
            alt="discord logo"
          >
          </Image>
          <Button>Open Discord</Button>
        </div>
      </div>
    </footer>
  )
}

export default DiscordFooter
