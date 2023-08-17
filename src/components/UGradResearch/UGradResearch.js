import './UGradResearch.css'
import researchPaper from '../../documents/research-paper.pdf';
import { researchPoster } from '../../assets';
import { BsFillEnvelopePaperHeartFill as Envelope } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export default function UGradResearch(){
    return(
        <div className="mainContent">
            <div className="contentBoxCenter">
                <h3 className="nomargins">Undergraduate Research</h3>
                <h3 className="nomargins">September 2022 - June 2023</h3>
                <h1 className="nomargins" id="researchTitle">
                    Quantitative Analysis of Fast Fashion and Slow Fashion Website Design Elements Using a Web
                    Crawler
                </h1>
            </div>
            <div className="contentBoxLeft">
                <p><b>Quick Links</b></p>
                <div className="researchQuickLinks">
                    <div className="researchQuickLinkTile">
                        <Envelope className="researchLinkIcon"/>
                        <a className="research-link" href={researchPaper} target="_blank" rel="noreferrer"><h3>Thesis Paper</h3></a>
                    </div>
                    <div className="researchQuickLinkTile">
                        <MdOutlineComputer className="researchLinkIcon"/>
                        <a className="research-link" href="https://github.com/gracebmanning/gm-research-crawler-v2"
                        target="_blank" rel="noreferrer"><h3>GitHub Repository</h3></a>
                    </div>
                    <div className="researchQuickLinkTile">
                        <HiMagnifyingGlass className="researchLinkIcon"/>
                        <a className="research-link" href="https://urop.uci.edu/" target="_blank" rel="noreferrer"><h3>UROP at UCI</h3></a>
                    </div>
                </div>
            </div>
            <div className="contentBoxLeft">
                <p><b>Abstract</b></p>
                <br/>
                <p>
                    Fast fashion and slow fashion retail websites are often visually distinct, but little research
                    has been done to analyze statistical differences in their structure and content.
                    As the conversation about the social and environmental impacts of fast fashion continues to
                    grow, the need for quantitative comparisons between fast & slow fashion also rises.
                    This research aims to collect quantitative data from the retail websites of five fast fashion
                    brands and five slow fashion brands in an effort to identify and analyze their differences.
                    <br/><br/>
                    To collect data, this
                    project utilized a web crawler; a crawler is an automated program that can visit a website,
                    collect its content, and return this information for analysis. The collected content includes
                    hypertext markup language (HTML), which is the basic programming language for creating
                    web pages. The crawler collected data on the websites of five fast fashion brands: Forever21,
                    SHEIN, Fashion Nova, H&M, and PrettyLittleThing, and five slow fashion brands: Big Bud
                    Press, CHNGE, Fashion Brand Company, Tunnel Vision, and iGirl. Overall, fast fashion
                    brands had a larger number of pages (over 26,000) and categories (over 300), yet remained
                    similar to slow fashion brands in other factors.
                    <br/><br/>
                    This data scrapes the surface of what can be
                    used to help consumers identify a fast or slow fashion brand solely based on website data.
                    Additionally, it can be hard to understand the negative impacts that fast fashion has on
                    our lives. These numbers help us quantify the overproduction and waste that comes from
                    following trend cycles and buying into fast fashion. The use of a crawler to collect data can
                    be expanded in many more ways to continue learning from retail websites.
                </p>
            </div>
            <div className="contentBoxLeft">
                <p><b>Poster (Presented at UROP Symposium)</b></p>
                <br/>
                <img id="research-poster" src={researchPoster} alt="poster summarizing the research in a green, brown, and cream color palette. The sections of the paper are grouped into organic blob shapes." />
            </div>
        </div>
    );
}