import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
  ClipIcon,
  ExcludeIcon,
  FlattenIcon,
  IntersectionIcon,
  JoinPathIcon,
  MaskIcon,
  OutlineIcon,
  OutlineColorIcon,
  RoundCornerIcon,
  SubsctractIcon,
  UnionIcon,
  WindowCorner,
  CrossIcon,
} from "./icons";

// Define our size constraints and snap points
const MIN_WIDTH = 150;
const MAX_WIDTH = 200;
const MIN_HEIGHT = 96;
const MAX_HEIGHT = 310;
const SNAP_SIZES = [
  { width: 200, height: 96 },
  { width: 150, height: 310 },
];

export default function Plugin() {
  const [label, setLabel] = useState(false);
  const [show, setShow] = useState(false);
  const handleResize = useCallback((width, height) => {
    setSize({ width, height });
  }, []);

  function showPop(value) {
    setShow(true);
    setLabel(value);
    // Reset to false after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      setShow(false);
    }, 800);
  }

  return (
    <MainWrapper>
      <div className={`notify ${show ? "show" : ""}`}>
        <h3>{label}</h3>
      </div>
      <Titlebar>
        <div className="left">
          <OutlineColorIcon height="64" width="64" /> <h1>Shape Shifter</h1>
        </div>
        <div className="right">
          <CrossIcon
            height="50"
            width="50"
            onClick={() => showPop("Close Plugin")}
          />
        </div>
      </Titlebar>
      <ShapeBox>
        <IconBox onClick={() => showPop("Union")}>
          <UnionIcon height={64} width={64} />
        </IconBox>
        <IconBox onClick={() => showPop("Substract")}>
          <SubsctractIcon height={64} width={64} />
        </IconBox>
        <IconBox onClick={() => showPop("Intersect")}>
          <IntersectionIcon height={64} width={64} />
        </IconBox>
        <IconBox onClick={() => showPop("Exclude")}>
          <ExcludeIcon height={64} width={64} />
        </IconBox>
      </ShapeBox>
      <div>
        <RoundCornerIcon
          className="resizer"
          height="32"
          width="32"
          onClick={() => showPop("Resize Window")}
        />
      </div>
      <ShapeBox>
        <IconBox onClick={() => showPop("Flaten")}>
          <FlattenIcon height={64} width={64} />
        </IconBox>
        <IconBox onClick={() => showPop("Mask")}>
          <MaskIcon height={64} width={64} />
        </IconBox>
        <IconBox onClick={() => showPop("Clip")}>
          <ClipIcon height={64} width={64} />
        </IconBox>
        <IconBox onClick={() => showPop("Outline")}>
          <OutlineIcon height={64} width={64} />
        </IconBox>
      </ShapeBox>
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  flex-direction: column;
  background: var(--white);
  gap: 2px;
  border-radius: 26px;
  padding-bottom: 12px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.08), 0px 20px 34px rgba(0, 0, 0, 0.18),
    0px 4px 10px rgba(0, 0, 0, 0.15), 0px 4px 24px rgba(0, 0, 0, 0.15),
    0px 0px 1px 1px rgba(0, 0, 0, 0.2);
  .resizer {
    color: var(--black);
    transition: all ease-in 333ms;
    bottom: 0;
    position: absolute;
    cursor: nwse-resize;
    right: 0;
    transform: scale(1.1);
    &:hover {
      transform: scale(1.4) translate(-0.75px, -0.75px);
    }
  }
  .notify {
    position: absolute;
    bottom: -130px;
    left: 50%;
    border-radius: 12px;
    background-color: rgba(10, 10, 10, 0.7);
    color: var(--white);
    padding: 12px 18px;
    font-weight: 500;
    z-index: 2;
    transform: translateX(-50%);
    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
    opacity: 0;
    &.show {
      opacity: 1;
      bottom: -100px;
    }
  }
`;

const ShapeBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 8px 20px;
  .active {
    background-color: var(--active-bg);
    color: var(--active-text);
  }

  span {
    font-size: 12px;
    font-weight: 500;
    user-select: none;
  }
`;

const IconBox = styled.div`
  display: flex;
  padding: 2px;
  border-radius: 12px;
  align-items: center;
  gap: 4px;
  &:hover {
    background-color: var(--hover-bg);
  }
`;

const Titlebar = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 8px 16px;
  border-bottom: 1px solid rgba(120, 120, 120, 0.2);
  .left {
    display: flex;
    align-items: center;
    h1 {
      font-size: 24px;
      line-height: 100%;
      font-weight: 500;
      margin: 0;
      color: var(--black);
    }
  }
  .right {
    display: flex;
    align-items: center;
    opacity: 0.6;
  }
`;
