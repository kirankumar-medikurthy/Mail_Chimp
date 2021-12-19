import React from "react";
import { Link } from "react-router-dom";
import { Button1, Button3 } from "../Buttons/Buttons";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import "./CRM.css";

const CRM = () => {
  return (
    <>
      <div className="nav-hero">
        <Navbar />
        <div className="hero-section-mk">
          <div className="hero-content-mk">
            <p className="hero-content-heading-mk">
              MARKETING CRM SOFTWARE FOR SMALL BUSINESSES
            </p>
            <p className="hero-content-title-mk">
              Build better relationships with your customers
            </p>
            <p className="hero-content-desc-mk">
              Get to know you audience and find new ways to market to them when
              you use Mailchimp for customer realtionship managemenr (CRM)
            </p>
            <Link to="/pricing/marketing">
              <Button1 text="Pick a Plan" />
            </Link>
          </div>
          <div className="hero-image-mk">
            <img
              src="https://eep.io/images/yzco4xsimv0y/1YozaEkBPIH5FVzeAeJlrb/e17a2d53bffa7fa7783a593c12482329/ILLO_Hero_CRMTools_1520.png?w=1520&fm=webp&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="feature-section-mk">
        <div className="feature-heading-mk">
          <p>CRM that scales as you do</p>
          <p>
            Cutomer relationhip management isn’t just for big businesses. Create
            strong connections from day 1 with our Marketing CRM tools, and find
            everything you need to have relevant conversations with your people-
            whether you’re building a brand new audience or you have thousands
            of contacts already.
          </p>
        </div>
        <div className="feature-list-mk">
          <div className="feature-list-items-mk">
            <p>01</p>
            <p>Connect all your contact data</p>
            <p>
              Bring all your audience data into Mailchimp to start using
              ready-made segments.
            </p>
          </div>
          <div className="feature-list-items-mk">
            <p>02</p>
            <p>Organize what you know</p>
            <p>
              Create your own segments and tags to filter audience data however
              you need to.
            </p>
          </div>
          <div className="feature-list-items-mk">
            <p>03</p>
            <p>Understand patterns in your data</p>
            <p>
              Get to know your audience at a glance with your audience
              dashboard.
            </p>
          </div>
          <div className="feature-list-items-mk">
            <p>04</p>
            <p>Turn audience insight into action</p>
            <p>
              Set up automated mesages to trigger based on specific segments or
              tags.
            </p>
          </div>
        </div>
        <div className="feature-video-mk">
          <div className="feature-video-item-mk">
            <p>
              <a href="https://mailchimp.com/features/crm/?wvideo=ocnyafpn54">
                <img
                  src="https://embedwistia-a.akamaihd.net/deliveries/c91252cb8159092f886c903614650401fec9fa3e.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=007c89e0"
                  width="400"
                  height="225"
                  style={{ width: "400px", height: "225px;" }}
                  alt=""
                />
              </a>
            </p>
            <p>
              See how Mailchimp’s all-in-one Marketing Platform help you market
              smarter.
            </p>
          </div>
          <div className="feature-video-item-mk">
            <div className="feature-item-2">
              <p>Understand customer data and act on it-all on one dashboard</p>
              <p>
                Our audience dashboard shows you pre-build segments like top
                location, recent sources of growth, common tags, and even
                customer lifetime value (CLV).
              </p>
              <Button3 text="Learn More" />
            </div>
            <img
              src="https://eep.io/images/yzco4xsimv0y/517X9c5oBkDYjniDIbq4Mc/76dfa4dd158e663dbef839423d1cd64f/81_Audience-Management_AUI.png?w=760&fm=webp&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="feature-list-2-mk">
          <div className="feature-list-item-2-mk">
            <img
              src="https://eep.io/images/yzco4xsimv0y/5LPd9AylIAKKIwoA4UC2Mo/6cb52708c538a783cde81d356564aab7/Minispot_Know-Audience_Benefits-Module.png?w=180&fm=webp&q=80"
              alt=""
            />
            <div className="pane-1-mk">
              <p>Get a holistic view of your audience</p>
              <p>
                Whether you ‘re starting from scratch with CRM or bringing an
                exisiting audience into Mailchimp, connecting favorite tools and
                keeping all your contact data in Mailchimp helps you stay
                organized and improve your marketing. Best of all, our audience
                dashboard will help you get to know your audience at a glance,
                visually showing you segments within your audience data that you
                can send targeted campaign to with just a few clicks.
              </p>
            </div>
          </div>
          <hr className="hr-line-mk" />
          <div className="feature-list-item-2-mk">
            <img
              src="https://eep.io/images/yzco4xsimv0y/1urNNN7nDase0gMCi0SiWq/35ddd4ad446963c3b3a9179d2de52032/Illustration_Tags-Feature-Dialog_App.png?w=180&fm=webp&q=80"
              alt=""
            />
            <div className="pane-1-mk">
              <p>Organize your contacts however you need to</p>
              <p>
                With all your contact data in one place, it’s easy to use
                Mailchimp’s segmentation tools to find exactly who you need to
                talk to. Segments, tags, and groups work in slightly different
                ways to help you create your own organizational structure and
                keep track of everything you learn about contacts as you grow.
              </p>
            </div>
          </div>
          <hr className="hr-line-mk" />
          <div className="feature-list-item-2-mk">
            <img
              src="https://eep.io/images/yzco4xsimv0y/71WcWFPKWkEAWg82ck2qiy/619970a8562cc4cb8b80ac08a475adca/Illustration_Conversations_App.png?w=180&fm=webp&q=80"
              alt=""
            />
            <div className="pane-1-mk">
              <p>Get insights about how to talk to your audience</p>
              <p>
                Mailchimp makes it easy to gain insights about your
                audience—from a bird's eye view or at an individual level. Our
                growth, engagement, and revenue reports will help you discover
                patterns in audience behavior and see what’s working with your
                marketing. Contact profiles let you meet the people behind the
                numbers, so you can dive in and see what actions have led to a
                purchase, leave notes about individual preferences, and more.
              </p>
            </div>
          </div>
          <hr className="hr-line-mk" />
          <div className="feature-list-item-2-mk">
            <img
              src="https://eep.io/images/yzco4xsimv0y/6omC3OfGScoCmgK8wKmoWS/b7dfb06f02f200b772f1faa7f2056bbd/Minispot_Connect-and-Personalize_vertical-grid.png?w=180&fm=webp&q=80"
              alt=""
            />
            <div className="pane-1-mk">
              <p>Build a personalized experience for every customer</p>
              <p>
                With all your contact data organized in Mailchimp, you can start
                using those insights to make sure your marketing speaks to
                individual customers across marketing channels. Use Mailchimp’s
                behavioral targeting and personalization tools to make campaigns
                feel like a 1-on-1 conversation in real time—sending the right
                message at the right moment, and always making the right
                personalized product recommendations.
              </p>
            </div>
          </div>
          <hr className="hr-line-mk" />
        </div>
        <div className="feature-video-mk">
          <div className="feature-video-item-mk">
            <div className="feature-item-2">
              <p>Stay connected with Mailchimp’s mobile app</p>
              <p>
                Never miss an opportunity to collect and organize new contacts
                wherever you meet them-at an event or in your store..
              </p>
              <p>
                Track your audience activity or explore the contact profile for
                an individual view. App tags, track engagement, or reach out to
                contact directly via email, text, or call.
              </p>
              <Button3 text="See how it works" />
            </div>
            <img
              src="https://eep.io/images/yzco4xsimv0y/5Tr112yBSbICvMTO9JrRvK/549bc116adf490673d200c084d543efa/82_Audience-Management_AUI.png?w=760&fm=webp&q=80"
              alt=""
            />
          </div>
          <div className="feature-video-item-mk" style={{ marginTop: "50px" }}>
            <img
              src="https://eep.io/images/yzco4xsimv0y/3s14p5EQVyyAuicWCi8wYG/ca9d29db44c1c4560dd95a088d34251d/ezgif.com-optimize.gif?w=760&fm=webp&q=80"
              alt=""
            />
            <div className="feature-item-2">
              <p>How to manage your audience in Mailchimp</p>
              <p>
                See how our Marketing CRM helps you get a clearer picture of who
                your audience is and how to keep them engaged.
              </p>
              <Button3 text="Read the article" />
            </div>
          </div>
        </div>
        <iframe
          width="1155"
          height="650"
          src="https://www.youtube.com/embed/qxL4pqyYxl0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="video-desc-mk">
          <p>
            "As we continue to segment and test our campaigns, we are seeing our
            revenue and engagement increase with our cutomers."
          </p>
          <p>
            Daisy Down, Co-Founder and Vice President of Marketing UrbanSitter
          </p>
          <Button3 text="See how they market smarter with CRM tools" />
        </div>
        <div className="feature-list-3-mk">
          <p className="fl-3-mk">
            Need to connect your enterprise CRM? We’ve got you covered.
          </p>
          <div className="feature-list-3-pane-2-mk">
            <p>Mailchimp for Salesforce</p>
            <p>Mailchimp and others CRMs</p>
            <p>Mailchimp integrations directory</p>
          </div>
        </div>
      </div>
      <div className="cta-section-mk">
        <div className="cta-content-mk">
          <p>Start using audience data to improve your marketing</p>
          <p>
            Mailchimp gives you the tools you need to build better customer
            relationships at scale.
          </p>
          <Button1 text="Sign Up" />
        </div>
      </div>
      <div className="feature-section-mk blog-section-mk">
        <p className="blog-item-heading-mk">
          See more ways to get targeted with your marketing
        </p>
        <div className="blog-list-mk">
          <div className="blog-items-mk">
            <img
              src="https://eep.io/images/yzco4xsimv0y/6kdJ3uKUolitlvriKjoQZ6/9fe9d149cb039e8fbf556942b62a6303/Segmenting101-recirc.gif?w=540&fm=webp&q=80"
              alt=""
            />
            <p>PRODUCT ADVICE</p>
            <p>Targeting 101: A Beginner's Guide to Segmentation</p>
            <p>
              The hardest thing about ‘segmentation’ is the term itself—learn
              how to get started.
            </p>
            <p>6 min read</p>
          </div>
          <div className="blog-items-mk">
            <img
              src="https://eep.io/images/yzco4xsimv0y/3Ur1VQoZrFbzuizlYA2yt0/8ead5b92d1792c5541280e2c345dc70f/ILLO_Thumbnail_Instagram_Ads_1_1520x852.png?w=540&fm=webp&q=80"
              alt=""
            />
            <p>PRODUCT ADVICE</p>
            <p>Targeting 101: A Beginner's Guide to Segmentation</p>
            <p>
              3 ways to make sure you’re getting the most value from an audience
              you’ve worked hard to build.
            </p>
            <p>6 min read</p>
          </div>
          <div className="blog-items-mk">
            <img
              src="https://eep.io/images/yzco4xsimv0y/5M2jPA8RDaG8KqyqKscGwq/a8c4c1d73ea9740b6c6a9043ce2b618a/Tentpole-CRM.Article-Thumbnail_1520x855.jpg?w=540&fm=webp&q=80"
              alt=""
            />
            <p>BUSINESS TIPS</p>
            <p>
              4 Simple Steps to Turn Customer Data into Targeted Campaigns That
              Sell More Stuff
            </p>
            <p>
              How to use customer data—from email engagement to purchase
              history—to send more targeted campaigns in Mailchimp.
            </p>
            <p>6 min read</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CRM;
