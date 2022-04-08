import React from "react";
import { FlexBox } from "../Style";

function BodyComponent(props) {
  return (
    <div>
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
      <FlexBox width="calc(100% - 6rem);" flexDirection="row">
        {/* Left Panel */}
        <FlexBox width="20%">
          <div>1.2 M</div>
          <div>Deification and worship of natural phenomena</div>
        </FlexBox>
        <FlexBox width="60%">GRIDBOX</FlexBox>
        <FlexBox width="20%">
          <div>1.2 M</div>
          <div>Deification and worship of natural phenomena</div>
        </FlexBox>
      </FlexBox>
    </div>
  );
}

export default BodyComponent;
