import { useRef } from "react";
import Button from "../common/Button";

function VideoPlayer() {
  const ref = useRef(null);
  return (
    <div>
      <video data-testid="video-container" ref={ref} width="400" controls>
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <Button
          onClick={() => {
            ref.current.play();
          }}
        >
          PLAY
        </Button>
        <Button
          onClick={() => {
            ref.current.pause();
          }}
        >
          PAUSE
        </Button>
        <Button
          onClick={() => {
            const time = ref.current.currentTime;
            ref.current.currentTime = time + 10;
          }}
        >
          SKIP 10 SECONDS
        </Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
