import React from "react";
import {
  ArrowTextContainer,
  BodyContainer,
  FlexBox,
  GridContainer,
} from "../Style";
import CircleArrowComponent from "./CircleArrowComponent";

function BodyComponent(props) {
  return (
    <>
      {/* Title and main description */}
      <FlexBox
        width="60%"
        style={{
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "3.5rem",
            fontWeight: "600",
            fontFamily: "'Playfair Display', serif",
            marginBottom: "1rem",
          }}
        >
          Natur Tec Specialty
        </div>
        <div
          style={{
            textAlign: "center",
            fontFamily: "Segoe UI",
            letterSpacing: ".05rem",
            lineHeight: "2rem",
          }}
        >
          Boneville Homes presents the Natur Series which includes several
          models of new manufactured hames and new manufactured chalets!
        </div>
      </FlexBox>
      <BodyContainer height="60%" width="calc(100% - 10rem)">
        {/* Left Panel */}
        <FlexBox width="20%" height="80%">
          <div
            style={{
              fontWeight: "normal",
              fontSize: "3rem",
              letterSpacing: ".1rem",
              fontFamily: "'Bebas Neue', cursive",
            }}
          >
            1.2 M
          </div>
          <div
            style={{
              fontWeight: "normal",
              fontFamily: "Segoe UI",
            }}
          >
            Deification and worship of natural phenomena
          </div>
          <div style={{ fontFamily: "'Xanh Mono', monospace" }}>
            <CircleArrowComponent
              r={30}
              text="OUR EXCLUSIVE ARTICLES"
            ></CircleArrowComponent>
          </div>

          <div
            style={{
              fontWeight: "200",
              fontFamily: "Segoe UI",
              fontSize: "1.5rem",
              letterSpacing: "0.03rem",
            }}
          >
            THE ASSIGNMENT OF A PHYSICAL FORM TO GOD
          </div>
        </FlexBox>
        {/* Middle Panel */}
        <FlexBox width="60%">
          <GridContainer>
            <div class="a"></div>
            <div class="b"></div>
            <div class="c"></div>
            <div class="d"></div>
            <div class="e"></div>
            <div class="f"></div>
            <div class="g"></div>
            <div class="h"></div>
            <div class="i"></div>
            <div class="j"></div>
            <div class="k"></div>
            <div class="l"></div>
          </GridContainer>
        </FlexBox>
        {/* Right Panel */}
        <FlexBox width="20%">
          <div>1.2 M</div>
          <div>Deification and worship of natural phenomena</div>
        </FlexBox>
      </BodyContainer>
    </>
  );
}

export default BodyComponent;
