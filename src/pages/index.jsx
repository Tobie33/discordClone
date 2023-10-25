import NavbarAndFrontSection from "@/Components/NavbarAndFrontSection"
import firstOrdPic from "../../public/images/sections-pics/firstOrdPic.png"
import secondOrdPic from "../../public/images/sections-pics/secondOrdPic.png"
import thirdOrdPic from "../../public/images/sections-pics/thirdOrdPic.png"
import bigCentralPic from "../../public/images/sections-pics/bigCentralPic.png"
import Image from "next/image"
import Button from "react-bootstrap/Button"
import Fade  from "react-reveal/Fade"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons"

export default function MainPage(){
  return (
    <>
      <NavbarAndFrontSection />
      <section className="ordinary-sections">
        <Fade>
          <div className="pics-and-paragraph d-flex">
            <Image
              src={firstOrdPic}
              alt="firstOrdPic"
            >
            </Image>
            <div className="sections-paragraph d-flex flex-column justify-content-center">
              <h2 className="paragraph-topic">Create an invite-only place where you belong</h2>
              <p className="paragraph">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
            </div>
          </div>
        </Fade>
      </section>
      <section className="ordinary-sections even-section">
        <Fade>
          <div className="pics-and-paragraph d-flex">
            <div className="sections-paragraph d-flex flex-column justify-content-center">
              <h2 className="paragraph-topic">Where hanging out is easy</h2>
              <p className="paragraph">Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
            </div>
            <Image
              src={secondOrdPic}
              alt="secondOrdPic"
            >
            </Image>
          </div>
        </Fade>
      </section>
      <section className="ordinary-sections">
        <Fade>
          <div className="pics-and-paragraph d-flex">
            <Image
              src={thirdOrdPic}
              alt="thirdOrdPic"
            >
            </Image>
            <div className="sections-paragraph d-flex flex-column justify-content-center">
              <h2 className="paragraph-topic">From few to a fandom</h2>
              <p className="paragraph">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
            </div>
          </div>
        </Fade>
      </section>
      <section className="big-central-section even-section">
        <Fade>
          <div className="big-central-pics-and-paragraph d-flex flex-column align-items-center">
            <div className="big-central-paragraph text-center">
              <h2 className="paragraph-topic">RELIABLE TECH FOR STAYING CLOSE</h2>
              <p className="paragraph">Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
            </div>
            <Image
              src={bigCentralPic}
              alt="bigCentralPic"
            >
            </Image>
          </div>
        </Fade>
      </section>
      <div className="join-discord d-flex flex-column align-items-center">
        <h2 className="text-center mt-3 fw-bold">Ready to start your journey?</h2>
        <Button id="download-discord-button" className="mt-5"><FontAwesomeIcon icon={faArrowDownLong} style={{color: "#ffffff",}} size="sm" className="me-2"/>Download for Windows</Button>
      </div>
    </>
  )
}
