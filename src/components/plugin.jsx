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

const Resizer = ({ onResize }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [startSize, setStartSize] = useState({
    width: MIN_WIDTH,
    height: MIN_HEIGHT,
  });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e) => {
    setIsResizing(true);
    setStartSize({ width: window.innerWidth, height: window.innerHeight });
    setStartPos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  const snapToSize = useCallback((width, height) => {
    return SNAP_SIZES.reduce((closest, size) => {
      const currentDiff =
        Math.abs(size.width - width) + Math.abs(size.height - height);
      const closestDiff =
        Math.abs(closest.width - width) + Math.abs(closest.height - height);
      return currentDiff < closestDiff ? size : closest;
    });
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isResizing) return;
      const deltaX = e.clientX - startPos.x;
      const deltaY = e.clientY - startPos.y;
      let newWidth = Math.max(
        MIN_WIDTH,
        Math.min(startSize.width + deltaX, MAX_WIDTH)
      );
      let newHeight = Math.max(
        MIN_HEIGHT,
        Math.min(startSize.height + deltaY, MAX_HEIGHT)
      );

      // Snap to predefined sizes
      const snappedSize = snapToSize(newWidth, newHeight);
      onResize(snappedSize.width, snappedSize.height);
    },
    [
      isResizing,
      onResize,
      snapToSize,
      startPos.x,
      startPos.y,
      startSize.width,
      startSize.height,
    ]
  );

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        cursor: "nwse-resize",
      }}
      onMouseDown={handleMouseDown}
    >
      <RoundCornerIcon className="resizer" />
    </div>
  );
};

export default function Plugin() {
  const [label, setLabel] = useState(false);
  return (
    <MainWrapper>
      <Titlebar>
        <div className="left">
          <OutlineColorIcon height="32" width="32" /> Shape Shifter
        </div>
        <div>
          <CrossIcon />
        </div>
      </Titlebar>
      <ShapeBox style={{ flexDirection: label ? "column" : "row" }}>
        <IconBox className={!label ? "label" : ""}>
          <UnionIcon height={32} width={32} />
          <span>Union</span>
        </IconBox>
        <IconBox className={!label ? "label" : ""}>
          <SubsctractIcon height={32} width={32} />
          <span>Substract</span>
        </IconBox>
        <IconBox className={!label ? "label" : ""}>
          <IntersectionIcon height={32} width={32} />
          <span>Intersect</span>
        </IconBox>
        <IconBox className={!label ? "label" : ""}>
          <ExcludeIcon height={32} width={32} />
          <span>Exclude</span>
        </IconBox>
      </ShapeBox>
      <Resizer />
      <ShapeBox style={{ flexDirection: label ? "column" : "row" }}>
        <IconBox className={!label ? "label" : ""}>
          <FlattenIcon height={32} width={32} />
          <span>Flatten</span>
        </IconBox>
        <IconBox className={!label ? "label" : ""}>
          <MaskIcon height={32} width={32} />
          <span>Mask</span>
        </IconBox>
        <IconBox className={`${!label ? "label" : ""}`}>
          <ClipIcon height={32} width={32} />
          <span>Frame Clip</span>
        </IconBox>
        <IconBox className={!label ? "label" : ""}>
          <OutlineIcon height={32} width={32} />
          <span>Outline Stroke</span>
        </IconBox>
      </ShapeBox>
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: var(--white);
  gap: 2px;
  border-radius: 13px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 10px 24px rgba(0, 0, 0, 0.18),
    0px 2px 5px rgba(0, 0, 0, 0.15), 0px 2px 14px rgba(0, 0, 0, 0.15),
    0px 0px 0px 0.5px rgba(0, 0, 0, 0.2);
  .resizer {
    transition: all ease-in 333ms;
    transform: scale(1.1);
    &:hover {
      transform: scale(1.4) translate(-0.75px, -0.75px);
    }
  }
`;

const Others = styled.div`
  display: flex;
  padding: 4px 16px;
  justify-content: space-between;
`;

const ShapeBox = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: space-between;
  .active {
    background-color: var(--active-bg);
    color: var(--active-text);
  }
  .label {
    flex-direction: row;
    span {
      display: none;
    }
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
  border-radius: 6px;
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
  padding: 12px 16px;
  border-bottom: 1px solid rgba(120, 120, 120, 0.1);
  .left {
    display: flex;
    align-items: center;
  }
`;
