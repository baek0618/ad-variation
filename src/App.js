import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import CountUp from "react-countup";
import SelectModal from "./components/SelectModal";
import FadeIn from "react-fade-in";
import { TypeAnimation } from "react-type-animation";
import { InView } from "react-intersection-observer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div className="main1">
        <div className="header">
          <img
            src="./img/icons/adone_WH@2x.png"
            className="headerLogo"
            alt="logo"
          />
          <div>MENU</div>
          <div>
            <span>MY PAGE</span>
            <Button variant="text" id="langButton">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#515151",
                  marginRight: "6px",
                }}
              />
              ENG
            </Button>
          </div>
        </div>
        <div style={{ paddingLeft: "50px" }}>
          <img
            className="line"
            // style={{ marginLeft: "50px" }}
            src="./img/icons/Line_4@2x.png"
            alt=""
          />
        </div>

        {/* main1 */}
        <div className="bg1Contents">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div id="bg1_content1">
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>Go into</span>
                <img
                  src="./img/icons/Arrow_6@2x.png"
                  alt=""
                  style={{ width: "16px", marginLeft: "6px" }}
                />
              </div>
            </div>
            <div id="bg1_content2">
              <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref}>
                    {inView && (
                      <FadeIn transitionDuration={1000}>
                        <div id="bg1_content2_text1">
                          Input your
                          <br />
                          Photoshop
                          <br />
                          AD data source
                        </div>
                        <div id="bg1_content2_text2">
                          The PSD AD file will be varied for the media platform
                          of your choice
                        </div>
                        <div id="bg1_content2_button1">
                          Input your Photoshop AD data source
                        </div>
                        <Button
                          onClick={handleOpen}
                          id="startButton"
                          variant="text"
                        >
                          <span>Start</span>
                          <span>＋</span>
                        </Button>
                      </FadeIn>
                    )}
                  </div>
                )}
              </InView>
            </div>
          </div>

          <div id="bg1_content3">
            Display AD automatic variation service
            <br />
            Based on algorithm
          </div>
        </div>
      </div>

      {/* divider */}
      {/* <img className="line" src="./img/icons/Line_4@2x.png" alt="" /> */}

      {/* main2 */}
      <div className="main2">
        <div id="main2_text1">*DA: Display advertise</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "50px",
          }}
        >
          <div id="main2_text2">
            <InView>
              {({ inView, ref, entry }) => (
                <div ref={ref}>
                  {inView && (
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "What is DA* automatic variation service?",
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                      ]}
                      wrapper="span"
                      speed={70}
                      style={{
                        display: "inline-block",
                        width: "800px",
                        height: "140px",
                      }}
                      repeat={Infinity}
                      cursor={false}
                    />
                  )}
                </div>
              )}
            </InView>
          </div>
          <div id="main2_text3">
            Advertisers and small businesses can achieve
            <br />
            optimal campaign performance at a reasonable cost & time
          </div>
        </div>
        <img className="line" src="./img/icons/Line_4@2x.png" alt="" />
        <div id="main2_flow">
          <img
            src="./img/main2_flow.png"
            style={{ width: "100%", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div id="main2_text4">
          <InView>
            {({ inView, ref, entry }) => (
              <div ref={ref}>
                {inView && (
                  <FadeIn transitionDuration={1000}>
                    Big data to train AI-generated
                    <br />
                    model-based AD variation algorithms
                  </FadeIn>
                )}
              </div>
            )}
          </InView>
        </div>
        <img
          className="line"
          src="./img/icons/Line_2@2x.png"
          style={{ marginTop: "60px", marginBottom: "78px" }}
          alt=""
        />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            src="./img/main2_algorithm.png"
            alt=""
            style={{ width: "75%", objectFit: "contain" }}
          />
        </div>
      </div>

      <div
        className="main2_needs"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "140px",
        }}
      >
        <div id="main2_needs_text1">
          <InView>
            {({ inView, ref, entry }) => (
              <div ref={ref}>
                {inView && (
                  <FadeIn transitionDuration={1000}>
                    <div style={{ display: "flex" }}>
                      <span>
                        Why is this service
                        <br />
                        needed?
                      </span>
                      <img
                        src="./img/icons/service_icon.png"
                        style={{ height: "130px", marginLeft: "30px" }}
                        alt=""
                      />
                    </div>
                  </FadeIn>
                )}
              </div>
            )}
          </InView>
        </div>
        <div id="main2_needs_text2">
          <span>
            The voice of
            <br />
            each user's needs
          </span>
        </div>
        <img
          src="./img/icons/Line_1@2x.png"
          alt=""
          style={{
            width: "100%",
            objectFit: "contain",
            position: "absolute",
            // background: "red",
            top: "280px",
            right: "193px",
          }}
        />

        <img
          src="./img/main2_needs.png"
          alt=""
          style={{ width: "100%", objectFit: "contain" }}
        />
      </div>

      {/* main3  */}
      <div className="main3">
        <div className="main3_contents">
          <InView>
            {({ inView, ref, entry }) => (
              <div ref={ref} style={{ minHeight: "138px" }}>
                {inView && (
                  <FadeIn transitionDuration={1000}>
                    <div id="main3_text1">
                      Solve AD on all media platforms
                      <br />
                      with our service
                    </div>
                  </FadeIn>
                )}
              </div>
            )}
          </InView>
          <img
            src="./img/icons/Line_3@2x.png"
            alt=""
            style={{ width: "100%", objectFit: "contain" }}
          />
          <div className="main3_num_container">
            <div className="main3_num_wrapper">
              <div className="main3_num_title">
                Average
                <br />
                production time
              </div>
              <div className="main3_num_value">
                <CountUp start={0} end={36} duration={2.75} enableScrollSpy>
                  {({ countUpRef, start }) => (
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                      <span
                        style={{
                          fontSize: "100px",
                          display: "flex",
                          alignItems: "flex-end",
                          width: "130px",
                        }}
                        ref={countUpRef}
                      />
                      <div style={{ marginBottom: "10px" }}>S</div>
                    </div>
                  )}
                </CountUp>
              </div>
            </div>
            <div className="main3_num_wrapper">
              <div className="main3_num_title">money saved</div>
              <div className="main3_num_value">
                <CountUp start={0} end={80} duration={2.75} enableScrollSpy>
                  {({ countUpRef, start }) => (
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                      <span
                        style={{
                          fontSize: "6.25rem",
                          display: "flex",
                          alignItems: "flex-end",
                          width: "130px",
                        }}
                        ref={countUpRef}
                      />
                      <div style={{ marginBottom: "10px" }}>%</div>
                    </div>
                  )}
                </CountUp>
              </div>
            </div>
            <div className="main3_num_wrapper">
              <div className="main3_num_title">time saved</div>
              <div className="main3_num_value">
                <CountUp start={0} end={98} duration={2.75} enableScrollSpy>
                  {({ countUpRef, start }) => (
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                      <span
                        style={{
                          fontSize: "6.25rem",
                          display: "flex",
                          alignItems: "flex-end",
                          width: "130px",
                        }}
                        ref={countUpRef}
                      />
                      <div style={{ marginBottom: "10px" }}>%</div>
                    </div>
                  )}
                </CountUp>
              </div>
            </div>
          </div>
          <div className="main3_text_wrapper">
            <div className="main3_text2">
              ROAS analysis through A/B test
              <br />
              to select the optimal media platform
            </div>
            <div className="main3_text2">
              Minimize double work, designers reduce
              <br />
              work time and maximize efficiency
            </div>
          </div>
        </div>
      </div>

      {/* main4 */}
      <div className="main4">
        <div className="main4_text_wrapper">
          <InView>
            {({ inView, ref, entry }) => (
              <div ref={ref}>
                {inView && (
                  <FadeIn transitionDuration={1000}>
                    <div className="main4_text1">
                      Choose
                      <br />
                      the media you
                      <br />
                      want to run ads on!
                    </div>
                    <div className="main4_text2">
                      Automatically converts
                      <br />
                      numerous sizes and specific specifications
                    </div>
                  </FadeIn>
                )}
              </div>
            )}
          </InView>
        </div>
      </div>

      {/* main5 */}
      <div className="main5">
        <InView>
          {({ inView, ref, entry }) => (
            <div ref={ref}>
              {inView && (
                <FadeIn transitionDuration={1000}>
                  <Button
                    onClick={handleOpen}
                    variant="text"
                    sx={{
                      textTransform: "none",
                      color: "#000000",
                      lineHeight: "1.1",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="./img/icons/psd.png"
                        style={{ width: "280px" }}
                        alt=""
                      />
                      <span
                        style={{
                          fontSize: "4.063rem",
                          fontWeight: "bold",
                          marginTop: "20px",
                        }}
                      >
                        Start now!
                      </span>
                      <span style={{ fontSize: "1.625rem", opacity: 0.6 }}>
                        Try it for yourself
                      </span>
                    </div>
                  </Button>
                </FadeIn>
              )}
            </div>
          )}
        </InView>
      </div>

      <div className="footer">
        <div className="footer_text_wrapper">
          <div className="footer_text1">
            Corporation owner : Shin Hyangdo
            <br />
            Business registration number: 707-67-00536
            <div style={{ marginTop: "30px" }}>
              Customer service center: help@ADonecorp.com / +82 10-5049-5476
            </div>
          </div>
          <div className="footer_text2">
            <img
              src="./img/icons/adone_WH@2x.png"
              style={{ width: "120px" }}
              alt=""
            />
            <span>Copyright ⓒ AD.one Corporation All rights reserved.</span>
          </div>
        </div>
      </div>

      <SelectModal open={isOpen} handleClose={handleClose} />
    </div>
  );
}

export default App;
