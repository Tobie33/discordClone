import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ButtonGroup } from 'react-bootstrap/ButtonGroup';
import Link from 'next/link';
import Image from "next/image"
import discordLogo from "../../public/images/discordLogo.png"
import Button  from 'react-bootstrap/Button';
import { useState } from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DiscordFooter = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English')

  const languages =
  ['Dansk',
  'Deutsch',
  'English, USA',
  'Suomi',
  'Hrvatski',
  'Magyar',
  'Italiano',
  'Lietuvisikai',
  'Nederlands',
  'Norwegian',
  'Polski',
  'Portugues do Brasil',
  'Romana',
  'Pyccknn',
  'Svenska',
  'Turkce',
  'Teing Viet',
  ]

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
              variant="none"
              title={selectedLanguage}
              onSelect={(e,eventKey) => setSelectedLanguage(e)}
            >
            {languages.map((language,index) =>
              <Dropdown.Item key={index} eventKey={language}>{language}</Dropdown.Item>
            )}
            </DropdownButton>
            <div id="avatars" className='mt-5 d-flex justify-content-evenly'>
              <FontAwesomeIcon icon={faTwitter} size="xl" style={{color: "#ffffff",}} />
              <FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#ffffff",}} />
              <FontAwesomeIcon icon={faSquareFacebook} size="xl" style={{color: "#ffffff",}} />
              <FontAwesomeIcon icon={faYoutube} size="xl" style={{color: "#ffffff",}} />
              <FontAwesomeIcon icon={faTiktok} size="xl" style={{color: "#ffffff",}} />
            </div>
          </div>
          <div id="footer-navs" className='d-flex'>
            <nav className='footer-nav-cats d-flex flex-column'>
              <h6 className='footer-nav-cat-name'>Product</h6>
                <Link href="#" className='footer-nav-link'>Download</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Nitro</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Status</Link>
                <Link href="#" className='mt-2 footer-nav-link'>App Directory</Link>
            </nav>
            <nav className='footer-nav-cats d-flex flex-column navs-separation'>
              <h6 className='footer-nav-cat-name'>Company</h6>
                <Link href="#" className='footer-nav-link'>About</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Jobs</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Brand</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Newsroom</Link>
            </nav>
            <nav className='footer-nav-cats d-flex flex-column navs-separation'>
              <h6 className='footer-nav-cat-name'>Resources</h6>
                <Link href="#" className='footer-nav-link'>College</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Support</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Safety</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Blog</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Feedback</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Developers</Link>
                <Link href="#" className='mt-2 footer-nav-link'>StreamKit</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Creators</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Community</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Official 3rd Party Merch</Link>
            </nav>
            <nav className='footer-nav-cats d-flex flex-column' id="last-nav">
              <h6 className='footer-nav-cat-name'>Policies</h6>
                <Link href="#" className='footer-nav-link'>Terms</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Privacy</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Cookie Settings</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Guidelines</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Acknowledgements</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Licenses</Link>
                <Link href="#" className='mt-2 footer-nav-link'>Company Information</Link>
            </nav>
          </div>
        </div>
        <div id="open-discord-section">
          <div id="footer-logo" className='mt-3'>
            <Image
              src={discordLogo}
              width={124}
              height={68}
              href="#"
              alt="discord logo"
            >
            </Image>
            <Button id="open-discord-button">Open Discord</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default DiscordFooter
