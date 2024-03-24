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
        <video className="mainVideoContainer" autoPlay loop muted>
          <source src={"./img/main_video.mp4"} type="video/mp4" />
        </video>

        <div className="header">
          <img
            src="./img/icons/adone_WH@2x.png"
            className="headerLogo"
            alt="logo"
          />
          <div>MENU</div>
          <div style={{ display: "flex" }}>
            <Button variant="text" sx={{ color: "white", fontSize: "1rem" }}>
              MY PAGE
            </Button>
            <Button
              variant="text"
              id="langButton"
              style={{
                fontFamily: "gmarketSansMedium",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
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
        <div style={{ paddingLeft: "50px", zIndex: 2 }}>
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
                        <Button
                          onClick={handleOpen}
                          id="startButton"
                          variant="text"
                        >
                          <span>Start</span>
                          <span style={{ fontSize: "2.8rem" }}>＋</span>
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
            <div>
              What is DA* automatic
              <br />
              variation service?
            </div>
          </div>
          <div id="main2_text3">
            Advertisers and small businesses can achieve
            <br />
            optimal campaign performance at a reasonable cost & time
          </div>
        </div>
        <img className="line" src="./img/icons/Line_4@2x.png" alt="" />
        <InView>
          {({ inView, ref, entry }) => (
            <div ref={ref}>
              {inView ? (
                <div id="main2_flow">
                  <div className="main2_img_wrapper" style={{ width: "342px" }}>
                    <FadeIn transitionDuration={600}>
                      <img
                        src="./img/icons/data_flow_1-1.png"
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          marginBottom: "30px",
                          height: "50px",
                        }}
                        alt=""
                      />
                    </FadeIn>
                    <FadeIn transitionDuration={600}>
                      <img
                        src="./img/icons/data_flow_1-2.png"
                        style={{ width: "100%", objectFit: "contain" }}
                        alt=""
                      />
                    </FadeIn>
                  </div>

                  <div className="arrow_wrapper">
                    <FadeIn transitionDuration={600} delay={600}>
                      <img
                        src="./img/icons/arrow_icon.png"
                        alt=""
                        style={{ width: "105px", marginRight: "41px" }}
                      />
                    </FadeIn>
                  </div>

                  {/* data flow 2 */}
                  <div className="main2_img_wrapper" style={{ width: "475px" }}>
                    <FadeIn transitionDuration={600} delay={1200}>
                      <img
                        src="./img/icons/data_flow_2-1.png"
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          marginBottom: "30px",
                          height: "50px",
                        }}
                        alt=""
                      />
                    </FadeIn>
                    <FadeIn transitionDuration={600} delay={1200}>
                      <img
                        src="./img/icons/data_flow_2-2.png"
                        style={{ width: "100%", objectFit: "contain" }}
                        alt=""
                      />
                    </FadeIn>
                  </div>

                  <div className="arrow_wrapper">
                    <FadeIn transitionDuration={600} delay={1800}>
                      <img
                        src="./img/icons/arrow_icon.png"
                        alt=""
                        style={{
                          width: "105px",
                          marginLeft: "46px",
                          marginRight: "38px",
                        }}
                      />
                    </FadeIn>
                  </div>

                  {/* data flow 3 */}
                  <div className="main2_img_wrapper" style={{ width: "374px" }}>
                    <FadeIn transitionDuration={600} delay={2400}>
                      <img
                        src="./img/icons/data_flow_3-1.png"
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          marginBottom: "30px",
                          height: "50px",
                        }}
                        alt=""
                      />
                    </FadeIn>
                    <FadeIn transitionDuration={600} delay={2400}>
                      <img
                        src="./img/icons/data_flow_3-2.png"
                        style={{ width: "318px", objectFit: "contain" }}
                        alt=""
                      />
                    </FadeIn>
                  </div>
                </div>
              ) : (
                <div style={{ height: "600px" }} />
              )}
            </div>
          )}
        </InView>

        <div id="main2_text4">
          {/* <InView>
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
          </InView> */}
          Big data to train AI-generated
          <br />
          model-based AD variation algorithms
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
          <InView>
            {({ inView, ref, entry }) => (
              <div ref={ref}>
                {inView ? (
                  <div id="main2_flow_wrapper">
                    <FadeIn transitionDuration={600}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img
                          src="./img/main_2_flow_1-1.png"
                          alt=""
                          style={{
                            height: "50px",
                            objectFit: "contain",
                            marginBottom: "38px",
                          }}
                        />
                        <img
                          src="./img/main_2_flow_1-2.png"
                          alt=""
                          style={{
                            objectFit: "contain",
                            width: "564px",
                          }}
                        />
                      </div>
                    </FadeIn>
                    <FadeIn transitionDuration={1000} delay={600}>
                      <div>
                        <img
                          src="./img/icons/arrow_icon_blue.png"
                          alt=""
                          style={{
                            width: "90px",
                            marginLeft: "55px",
                            marginRight: "73px",
                          }}
                        />
                      </div>
                    </FadeIn>
                    <FadeIn transitionDuration={1000} delay={1200}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img
                          src="./img/main_2_flow_2-1.png"
                          alt=""
                          style={{
                            height: "50px",
                            objectFit: "contain",
                            marginBottom: "38px",
                          }}
                        />
                        <img
                          src="./img/main_2_flow_2-2.png"
                          alt=""
                          style={{
                            objectFit: "contain",
                            width: "540px",
                          }}
                        />
                      </div>
                    </FadeIn>
                  </div>
                ) : (
                  <div style={{ height: "640px" }} />
                )}
              </div>
            )}
          </InView>

          {/* <img
            src="./img/main2_algorithm.png"
            alt=""
            style={{ width: "75%", objectFit: "contain" }}
          /> */}
        </div>
      </div>

      <div
        className="main2_needs"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "140px",
          flexDirection: "column",
        }}
      >
        <div id="main2_needs_text1">
          <div style={{ display: "flex", zIndex: 2 }}>
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
        </div>
        <div id="main2_needs_text2">
          <span>
            The voice of
            <br />
            each user's needs
          </span>
          <img
            src="./img/icons/Line_1@2x.png"
            alt=""
            style={{
              width: "100%",
              objectFit: "contain",
              position: "absolute",
              bottom: "15px",
            }}
          />
        </div>
      </div>

      <div className="clientContainer">
        {/* client 1 */}
        <InView>
          {({ inView, ref, entry }) => (
            <div
              ref={ref}
              style={{ position: "relative", zIndex: 2, marginLeft: "240px" }}
            >
              {inView && (
                <FadeIn transitionDuration={600}>
                  <div className="clientWrapper">
                    <img
                      className="clientImg"
                      src="./img/icons/client1_img.png"
                      alt=""
                    />
                    <div id="speechBubble1">
                      It's exhausting to work with variations
                      <br />
                      for different media platform sizes
                    </div>
                    <img
                      className="clientName"
                      src="./img/icons/client1_name.png"
                      alt=""
                      style={{ left: "10px" }}
                    />
                  </div>
                </FadeIn>
              )}
            </div>
          )}
        </InView>

        {/* client 2 */}
        <InView>
          {({ inView, ref, entry }) => (
            <div
              ref={ref}
              style={{
                position: "relative",
                zIndex: 2,
                marginRight: "240px",
                alignSelf: "flex-end",
              }}
            >
              {inView && (
                <FadeIn transitionDuration={600} delay={600}>
                  <div className="clientWrapper">
                    <div id="speechBubble2">
                      I want to have the best campaign
                      <br />
                      performance with low cost and labor
                    </div>
                    <img
                      className="clientImg"
                      src="./img/icons/client2_img.png"
                      alt=""
                      style={{ marginRight: "0px", height: "188px" }}
                    />
                    <img
                      className="clientName"
                      src="./img/icons/client2_name.png"
                      alt=""
                      style={{ right: "0px" }}
                    />
                  </div>
                </FadeIn>
              )}
            </div>
          )}
        </InView>

        {/* client 3 */}
        <InView>
          {({ inView, ref, entry }) => (
            <div
              ref={ref}
              style={{
                position: "relative",
                zIndex: 2,
                marginLeft: "510px",
              }}
            >
              {inView && (
                <FadeIn transitionDuration={600} delay={1100}>
                  <div className="clientWrapper">
                    <img
                      className="clientImg"
                      src="./img/icons/client3_img.png"
                      alt=""
                    />
                    <div id="speechBubble3">
                      I have AD photoshop data,
                      <br />
                      but I can't utilize it
                    </div>
                    <img
                      className="clientName"
                      src="./img/icons/client3_name.png"
                      alt=""
                      style={{ left: "-35px" }}
                    />
                  </div>
                </FadeIn>
              )}
            </div>
          )}
        </InView>

        <div id="client_background">
          <span>Solutions to meet needs & solve inconveniences</span>
          <img
            src="./img/icons/bottom_arrow.png"
            alt=""
            style={{ width: "22px", objectFit: "contain", marginTop: "8px" }}
          />
        </div>
      </div>

      {/* main3  */}
      <div className="main3">
        <div className="main3_contents">
          <div id="main3_text1">
            Solve AD on all media platforms
            <br />
            with our service
          </div>
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
                          fontSize: "8rem",
                          display: "flex",
                          alignItems: "flex-end",
                        }}
                        ref={countUpRef}
                      />
                      <div
                        style={{
                          marginBottom: "10px",
                          marginLeft: "6px",
                          fontSize: "5rem",
                        }}
                      >
                        S
                      </div>
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
                          fontSize: "8rem",
                          display: "flex",
                          alignItems: "flex-end",
                        }}
                        ref={countUpRef}
                      />
                      <div
                        style={{
                          marginBottom: "10px",
                          fontSize: "5rem",
                          marginLeft: "6px",
                        }}
                      >
                        %
                      </div>
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
                          fontSize: "8rem",
                          display: "flex",
                          alignItems: "flex-end",
                        }}
                        ref={countUpRef}
                      />
                      <div
                        style={{
                          marginBottom: "10px",
                          fontSize: "5rem",
                          marginLeft: "6px",
                        }}
                      >
                        %
                      </div>
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

          <InView>
            {({ inView, ref, entry }) => (
              <div id="aiDataImg1" ref={ref}>
                {inView && (
                  <FadeIn transitionDuration={600}>
                    <div id="aiDataImg">
                      <FadeIn transitionDuration={600} delay={600}>
                        <img
                          src="./img/icons/ai_text.png"
                          alt=""
                          style={{
                            width: "129px",
                            objectFit: "contain",
                            right: "300px",
                            position: "absolute",
                            top: "230px",
                          }}
                        />
                      </FadeIn>
                    </div>
                  </FadeIn>
                )}
              </div>
            )}
          </InView>
        </div>

        <div id="bg_img" />
      </div>

      {/* main4 */}
      <div className="main4">
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "100%",
            maxWidth: "1920px",
          }}
        >
          <div className="main4_text_wrapper">
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
          </div>
          {/* 모니터 이미지 */}
          <img
            style={{
              position: "absolute",
              left: "58px",
              bottom: "60px",
              width: "1080px",
              maxWidth: "58%",
            }}
            src={"./img/main4_img1.png"}
          />
          {/* 앱 아이콘 이미지 */}
          <InView>
            {({ inView, ref, entry }) => (
              <div
                ref={ref}
                style={{
                  width: "970px",
                  maxWidth: "55%",
                  position: "absolute",
                  left: "58px",
                  top: "120px",
                }}
              >
                {inView && (
                  <>
                    <FadeIn transitionDuration={1000}>
                      <img
                        style={{
                          width: "100%",
                          objectFit: "contain",
                        }}
                        src={"./img/main4_img2.png"}
                      />
                    </FadeIn>
                  </>
                )}
              </div>
            )}
          </InView>
          <InView>
            {({ inView, ref, entry }) => (
              <div
                ref={ref}
                style={{
                  top: "400px",
                  width: "631px",
                  maxWidth: "40%",
                  position: "absolute",
                  right: "92px",
                }}
              >
                {inView && (
                  <FadeIn transitionDuration={1000} delay={800}>
                    <img
                      style={{
                        width: "100%",
                        objectFit: "contain",
                      }}
                      src="./img/main4_img3.png"
                    />
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
                        style={{ width: "314px" }}
                        alt=""
                      />
                      <span
                        style={{
                          fontSize: "4.063rem",
                          fontWeight: "bold",
                          marginTop: "20px",
                          marginBottom: "9px",
                          fontFamily: "gmarketSansBold",
                        }}
                      >
                        Start now!
                      </span>
                      <span
                        style={{
                          fontSize: "1.625rem",
                          opacity: 0.6,
                          fontFamily: "gmarketSansMedium",
                        }}
                      >
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
              style={{ width: "120px", marginBottom: "7px" }}
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
