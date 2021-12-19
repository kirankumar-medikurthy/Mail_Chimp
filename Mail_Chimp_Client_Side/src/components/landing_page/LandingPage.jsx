import Button from "./Button";
import "./landingpage.css";
import Navbar from "../navbar/Navbar";

const LandingPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="cont1">
          <div className="cont13">
            <div className="cont14">
              <div className="head">Do it all with Mailchimp</div>
              <div className="para">
                With Mailchimp, you get the tools you need to sell your product,
                reach new cutomers, and take your busines to the next level.
              </div>
              <div>
                <Button name="Sign Up" />
              </div>
              <div className="para1">No credit card required</div>
            </div>
            <img
              className="i1"
              src={
                require("../../project_images/landingpage_images/image 5.svg")
                  .default
              }
              alt=""
            />
            <img
              className="i2"
              src={
                require("../../project_images/landingpage_images/ques.svg")
                  .default
              }
              alt=""
            />
            <img
              className="i3"
              src={
                require("../../project_images/landingpage_images/Frame 6.svg")
                  .default
              }
              alt=""
            />
          </div>
        </div>

        <div className="cont2">
          <div className="head21">Why Mailchimp?</div>
          <div className="p1">
            We’re build for growing business. Put our marketing and ale tools
            behind your idea, dream, brand, or business and we’ll help you share
            it with the world.
          </div>
          <div className="box1">
            <div className="box11">
              <img
                className="a11"
                src={
                  require("../../project_images/landingpage_images/image 15.svg")
                    .default
                }
                alt=""
              />
              <div className="a12">Award-winning support</div>
              <div className="a13">
                Get the help you need, whenever you need it with our 24/7
                support.
              </div>
            </div>
            <div className="box12">
              <img
                className="a21"
                src={
                  require("../../project_images/landingpage_images/image 16.svg")
                    .default
                }
                alt=""
              />
              <div className="a22">250+ app integrations</div>
              <div className="a23">
                You can connect your tools to Mailchimp and unlock even more
                features
              </div>
            </div>
            <div className="box13">
              <img
                className="a31"
                src={
                  require("../../project_images/landingpage_images/image 17.svg")
                    .default
                }
                alt=""
              />
              <div className="a32">A directory of trusted pros</div>
              <div className="a33">
                Take your marketing to the next level when you work with a
                Mailchimp partner.
              </div>
            </div>
          </div>
          <div className="head22">12 million businesses rely on Mailchimp:</div>
          <div className="box2">
            <img
              className="bi11"
              src={
                require("../../project_images/landingpage_images/image 95.svg")
                  .default
              }
              alt=""
            />
            <img
              className="bi12"
              src={
                require("../../project_images/landingpage_images/image 96.svg")
                  .default
              }
              alt=""
            />
            <img
              className="bi13"
              src={
                require("../../project_images/landingpage_images/image 97.svg")
                  .default
              }
              alt=""
            />
            <img
              className="bi14"
              src={
                require("../../project_images/landingpage_images/image 98.svg")
                  .default
              }
              alt=""
            />
          </div>
          <div className="head23">Get Started For Free</div>
          <div className="b2">
            <Button name="Sign Up" />
          </div>
        </div>

        <div className="cont3">
          <div className="head3">Grow with Mailchimp</div>
          <div className="para3">
            No matter the size of your business, our tools are here to help you
            launch, build, and grow.
          </div>
          <div className="cont31">
            <img
              className="im99"
              src={
                require("../../project_images/landingpage_images/image 99.svg")
                  .default
              }
              alt=""
            />
            <div className="cont311">
              <div className="head312">Market your business</div>
              <div className="para313">
                Send the right messages on all the right channels. Build emails,
                social ads, landing pages, postcards, and more from one place.
              </div>
            </div>
          </div>
          <div className="cont32">
            <div className="cont321">
              <div className="head312">Get your business online</div>
              <div className="para313">
                Build a beautiful website with a custom domain, launch an online
                store, and allow customers to book appointments directly from
                your website.
              </div>
            </div>
            <img
              className="im100"
              src={
                require("../../project_images/landingpage_images/image 100.svg")
                  .default
              }
              alt=""
            />
          </div>
          <div className="cont31">
            <img
              className="im99"
              src={
                require("../../project_images/landingpage_images/image 101.svg")
                  .default
              }
              alt=""
            />
            <div className="cont311">
              <div className="head312">Automate your marketing</div>
              <div className="para313">
                Add a personal touch without the personal effort through
                automated messages that reach your customers at exactly the
                rigjht moments.
              </div>
            </div>
          </div>
          <div className="cont33">
            <div className="cont331">
              <img
                className="im43"
                src={
                  require("../../project_images/landingpage_images/image 43.svg")
                    .default
                }
                alt=""
              />
              <div className="im431">Audience management</div>
              <div className="im432">
                Put your people at the heart of your marketing with tool that
                help you get to know your audience and insights that can help
                drive better results.
              </div>
            </div>
            <div className="cont331">
              <img
                className="im43"
                src={
                  require("../../project_images/landingpage_images/image 42.svg")
                    .default
                }
                alt=""
              />
              <div className="im431">Creative tools</div>
              <div className="im432">
                Let your brand shine through with easy- to-use design tools,
                flexible templates, and AI- powered customs designs.
              </div>
            </div>
            <div className="cont331">
              <img
                className="im43"
                src={
                  require("../../project_images/landingpage_images/image 44.svg")
                    .default
                }
                alt=""
              />
              <div className="im431">Insights and analytics</div>
              <div className="im432">
                With all your data and insights in one place, you can see what’s
                working best and get recommendations to help you do more of it.
              </div>
            </div>
          </div>
          <div className="head32">Ready to get started?</div>
          <div className="b3">
            <Button name="Sign Up" />
          </div>
        </div>

        <div className="cont4">
          <div className="cont41">
            <div className="head4">
              How can Mailchimp help me?
              <div className="cont411">
                <img
                  className="down"
                  src={
                    require("../../project_images/landingpage_images/down.png")
                      .default
                  }
                  alt=""
                />
                <div className="head41">E-Commerce and Retail</div>
              </div>
              <hr />
              <div className="cont411">
                <img
                  className="down"
                  src={
                    require("../../project_images/landingpage_images/down.png")
                      .default
                  }
                  alt=""
                />
                <div className="head41">Mobile and Web Apps</div>
              </div>
              <hr />
              <div className="cont411">
                <img
                  className="down"
                  src={
                    require("../../project_images/landingpage_images/down.png")
                      .default
                  }
                  alt=""
                />
                <div className="head41">Startups</div>
              </div>
              <hr />
              <div className="cont411">
                <img
                  className="down"
                  src={
                    require("../../project_images/landingpage_images/down.png")
                      .default
                  }
                  alt=""
                />
                <div className="head41">Agencies and Freelancers</div>
              </div>
              <hr />
              <div className="cont411">
                <img
                  className="down"
                  src={
                    require("../../project_images/landingpage_images/down.png")
                      .default
                  }
                  alt=""
                />
                <div className="head41">Developers</div>
              </div>
              <hr />
            </div>
          </div>
          <img
            className="im41"
            src={
              require("../../project_images/landingpage_images/image 102.svg")
                .default
            }
            alt=""
          />
        </div>

        <div className="cont5">
          <div className="head5">Let’s do this</div>
          <div className="b4">
            <Button name="Sign Up" />
          </div>
        </div>

        <div className="cont6">
          <div className="cont61">
            <div className="head61">Product</div>
            <div className="p61">Why Mailchimp?</div>
            <div className="p61">Product updates</div>
            <div className="p61">Email Marketing</div>
            <div className="p61">Website</div>
            <div className="p61">Transactional Email</div>
            <div className="p61">How We Compare</div>
            <div className="p61">GDPR Compliance</div>
            <div className="p61">Status</div>
            <div className="p61">Mobile App</div>
          </div>

          <div className="cont61">
            <div className="head61">Resources</div>
            <div className="p61">Guides & Tutorials</div>
            <div className="p61">Marketing Tips</div>
            <div className="p61">Free Marketing Tools</div>
            <div className="p61">Marketing Glossary</div>
            <div className="p61">Browse by Topic</div>
            <div className="p61">Integrations Directory</div>
          </div>

          <div className="cont61">
            <div className="head61">Community</div>
            <div className="p61">Agencies & Freelancers</div>
            <div className="p61">Developers</div>
            <div className="p61">Developers</div>
            <div className="p61">Events</div>
          </div>

          <div className="cont61">
            <div className="head61">Company</div>
            <div className="p61">Our Story</div>
            <div className="p61">Newsroom</div>
            <div className="p61">Annual Report</div>
            <div className="p61">Careers</div>
          </div>

          <div className="cont61">
            <div className="head61">Help</div>
            <div className="p61">Contact Us</div>
            <div className="p61">Hire an Expert</div>
          </div>
          <div className="cont62">
            <div className="cont621">
              <div className="im4">
                <img
                  src={
                    require("../../project_images/landingpage_images/image 4.svg")
                      .default
                  }
                  alt=""
                />
              </div>
              <div className="p62">presents</div>
            </div>
            <div className="p63">
              Films, podcats, and original series that celebrate the
              entrepreneurial spirit.
            </div>
            <div className="p166">
              <div className="p16">Check it out</div>
              <div className="arrow">
                <img
                  src={
                    require("../../project_images/landingpage_images/arrow.svg")
                      .default
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="im5">
              <img
                src={
                  require("../../project_images/landingpage_images/image 103.svg")
                    .default
                }
                alt=""
              />
            </div>
            <div className="p63">
              Expert insights, industry trends, and inspiring stories that help
              you live and work on your own terms.
            </div>
            <div className="p166">
              <div className="p16">Learn more</div>
              <div className="arrow">
                <img
                  src={
                    require("../../project_images/landingpage_images/arrow.svg")
                      .default
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="cont7">
          <img
            className="im104"
            src={
              require("../../project_images/landingpage_images/image 104.svg")
                .default
            }
            alt=""
          />
          <img
            className="im106"
            src={
              require("../../project_images/landingpage_images/image 106.svg")
                .default
            }
            alt=""
          />
          <div className="cont71">
            <img
              className="im71"
              src={
                require("../../project_images/landingpage_images/face.svg")
                  .default
              }
              alt=""
            />
            <img
              className="im71"
              src={
                require("../../project_images/landingpage_images/twit.svg")
                  .default
              }
              alt=""
            />
            <img
              src={
                require("../../project_images/landingpage_images/insta.svg")
                  .default
              }
              alt=""
            />
            <img
              src={
                require("../../project_images/landingpage_images/linkin.svg")
                  .default
              }
              alt=""
            />
            <img
              className="im71"
              src={
                require("../../project_images/landingpage_images/p.svg").default
              }
              alt=""
            />
          </div>
          <div className="cont72">
            <div className="cont721">
              <div className="text">English</div>
              <img
                className="imt"
                src={
                  require("../../project_images/landingpage_images/down.png")
                    .default
                }
                alt=""
              />
            </div>
            <div className="cont722">
              @2001-2021 All Rights Reserved. Mailchinp is a registered
              trademark of The Rocket Science Group. Apple and the Apple logo
              are trademarks of Apple Inc. Mac App store is a service mark of
              Apple Inc. Google Play and the Google Play logo are trademarks of
              Google Inc.<b>Privacy&emsp;Terms&emsp;Cookie Preferences</b>
            </div>
          </div>
        </div>
        <div>
          <img
            className="ques"
            src={
              require("../../project_images/landingpage_images/ques.svg")
                .default
            }
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
