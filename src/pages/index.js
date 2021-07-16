import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"
import "../css/my.css"
import Textfield from "@atlaskit/textfield"
import Button from "@atlaskit/button"
import backLeft from "../images/left.png"
import backRight from "../images/right.png"
import backBottom from "../images/logo.png"

export default ({ props }) => {
  React.useEffect(() => {
    firebase
      .database()
      .ref("/data")
      .once("value")
      .then(snapshot => {
        setData(snapshot.val())
      })
  }, [])

  // data name
  let randomNumber = 0
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
  }
  randomNumber =
    "ธรรมล้านดวง " + getRandomIntInclusive(100000, 999999).toString()

  const [value, setValue] = useState(randomNumber)
  const handleChange = e => setValue(e.target.value)

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Top */}
        <div
          className="colorbg"
          style={{
            height: "34%",
            width: "100%",
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            className="bgimgTopLeft"
            style={{
              height: "60%",
              width: "40%",
              backgroundImage: `url(${backLeft})`,
            }}
          ></div>
          <h1
            style={{
              color: "#5c2605",
              textAlign: "center",
              fontFamily: "duangkaewregular",
            }}
          >
            เพจธรรมล้านดวง
          </h1>
          <div
            className="bgimgTopRight"
            style={{
              height: "100%",
              width: "50%",
              backgroundImage: `url(${backRight})`,
            }}
          ></div>
        </div>

        {/* Bottom */}
        <div
          className="bgimgBottom"
          style={{
            backgroundColor: "#ffffff",
            height: "66%",
            width: "100%",
            position: "absolute",
            bottom: 0,
            backgroundImage: `url(${backBottom})`,
          }}
        >
          {/* part1 */}
          <div style={{ width: "100%", backgroundColor: "#d79f00" }}>
            <div
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "#ffffff",
                borderRadius: "30px 30px 0 0",
                boxShadow: "0 -7px 7px -5px #5B5B5B",
              }}
            ></div>
          </div>

          {/* part2 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: 0, color: "#e4bb4f" }}>
              ร่วมสวดธรรมจักรทุกวัน 2 ทุ่ม
            </h3>
            <h4
              style={{
                color: "#96938c",
                marginTop: "40px",
                marginBottom: "30px",
              }}
            >
              กรอกชื่อ
            </h4>

            <Textfield
              placeholder="กรอกชื่อของคุณ
      "
              name="basic"
              defaultValue={value}
              onChange={handleChange}
              aria-label="default text field"
              css={{ width: "60%", marginBottom: "30px", textAlign: "center" }}
            />

            <Button
              appearance="primary"
              style={{
                backgroundColor: "#d79f00",
                borderRadius: "20px 20px 20px 20px",
                width: "160px",
                boxShadow: "2px 5px 16px 0px #A3A3A3",
                marginBottom: "30px",
              }}
              // onClick={requestTargetRoom}
            >
              เข้าห้อง zoom
            </Button>

            <button>ร่วมกิจกรรมผ่าน Application Zoom</button>
          </div>
        </div>
      </div>
    </>
  )
}
