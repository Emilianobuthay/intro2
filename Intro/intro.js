import React from "react";
import ReactPlayer from "react-player";

import "./styleIntro.css";


export default function Intro() {
  // 3D Scroll
  let zSpacing = -1000,
  lastPos = zSpacing / 5,
  $frames = document.getElementsByClassName('frame1'),
  frames = Array.from($frames),
  zVals = []

window.onscroll = function() {

let top = document.documentElement.scrollTop,
	  delta = lastPos - top

lastPos = top

frames.forEach(function(n, i) {
  zVals.push((i * zSpacing) + zSpacing)
  zVals[i] += delta * -5.5
  let frame = frames[i],
		  transform = `translateZ(${zVals[i]}px)`,
		  opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
  frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
})

}

window.scrollTo(0, 1)

// Audio




  return (
    <>
      <div className="container-intro">
		<section className="gallery-1">

			<div className="frame1">
				<div className="frame__content1">
					<h2>Mama Hungara</h2>
				</div>
			</div>

			<div className="frame1">
				<div className="frame__content1">
				<ReactPlayer
                 alt='sueña-potente'
                 className="frame-media1 frame-media_left1"
                 url="https://player.vimeo.com/video/520227700?h=a71ae57e47abb2411c4cdf9283000c67"
                 playing={true}
                 autoplay={true}
                 controls={false}
                 volume={0}
                 muted={true}
                 loop={true}
                />
				{/* <div className="frame-media1 frame-media_left1 imag1"></div>*/}
				</div>
			</div>

			<div className="frame1 frame_bg1">
				<div className="frame__content1">
					 
					<ReactPlayer
                    alt='sueña-potente'
                    className="frame-media1 frame-media_right1"
                    url="https://player.vimeo.com/video/520227700?h=a71ae57e47abb2411c4cdf9283000c67"
                    playing={true}
                    autoplay={true}
                    controls={false}
                    volume={0}
                    muted={true}
                    loop={true}

                    />
				</div>
			</div>

			<div className="frame1"></div>

			<div className="frame1">
				<div className="frame__content1 text-right">
					<h3>Pure planet</h3>
					<p>Lorem ipsum dolor sit amet, consectetur elit adipisicing. Nemo fugit, rerum dolorem assumenda consequatur dicta error iure laboriosam temporibus.</p>
				</div>
			</div>

			<div className="frame1 frame_bg1">
				<div className="frame__content1">
				<ReactPlayer
                 alt='sueña-potente'
                 className="frame-media1 frame-media_left1"
                 url="https://player.vimeo.com/video/520227700?h=a71ae57e47abb2411c4cdf9283000c67"
                 playing={true}
                 autoplay={true}
                 controls={false}
                 volume={0}
                 muted={true}
                 loop={true}
                />
				{/*	<div className="frame-media1 frame-media_left1 imag2"></div> */}
				</div>
			</div>

			<div className="frame1"></div>

			<div className="frame1 frame_bg1">
				<div className="frame__content1">
				<ReactPlayer
                 alt='sueña-potente'
                 className="frame-media1 frame-media_right1"
                 url="https://player.vimeo.com/video/520227700?h=a71ae57e47abb2411c4cdf9283000c67"
                 playing={true}
                 autoplay={true}
                 controls={false}
                 volume={0}
                 muted={true}
                 loop={true}
                />
				{/* <div className="frame-media1 frame-media_right1 imag3"></div>*/}
				</div>
			</div>

			<div className="frame1"></div>

			<div className="frame1">
				<div className="frame__content1 text-left">
					<h3>Ask the Mountains</h3>
					<p>Lorem ipsum dolor sit amet, consectetur elit. Rerum dolorem assumenda consequatur dicta error iure laboriosam temporibus omnis quae eaque aliquam esse unde accusamus dolores non soluta.</p>
				</div>
			</div>

			<div className="frame1 frame_bg1">
				<div className="frame__content1">
				<ReactPlayer
                 alt='sueña-potente'
                 className="frame-media1 frame-media_right1"
                 url="https://player.vimeo.com/video/520227700?h=a71ae57e47abb2411c4cdf9283000c67"
                 playing={true}
                 autoplay={true}
                 controls={false}
                 volume={0}
                 muted={true}
                 loop={true}
                />
				{/* <div className="frame-media1 frame-media_right1 imag4"></div>*/}
				</div>
			</div>

			<div className="frame1">
				<div className="frame__content1">
					
					<ReactPlayer
                    alt='sueña-potente'
                    className="frame-media1 frame-media_left1"
                    url="https://player.vimeo.com/video/520227700?h=a71ae57e47abb2411c4cdf9283000c67"
                    playing={true}
                    autoplay={true}
                    controls={false}
                    volume={0}
                    muted={true}
                    loop={true}

                    />
				</div>
			</div>


			<div className="frame1 frame_bg1">
				<div className="frame__content1">
				<ReactPlayer
                 alt='sueña-potente'
                 className="frame-media1 frame-media_right1"
                 url="https://player.vimeo.com/video/520227700?h=a71ae57e47abb2411c4cdf9283000c67"
                 playing={true}
                 autoplay={true}
                 controls={false}
                 volume={0}
                 muted={true}
                 loop={true}
                />
				{/* <div className="frame-media1 frame-media_right1 imag5"></div>*/}
				</div>
			</div>

			<div className="frame1 frame_bg1">
				<div className="frame__content1">
					
					<ReactPlayer
                     alt='sueña-potente'
                     className="frame-media1"
                     url="https://player.vimeo.com/video/520227700?h=a71ae57e47abb2411c4cdf9283000c67"
                     playing={true}
                     autoplay={true}
                     controls={false}
                     volume={0}
                     muted={true}
                     loop={true}
                    />
				</div>
			</div>

	
            
			<div className="frame1">
			<div className="frame__content1"><a href="/"> Entrar</a></div>
			</div>

		</section>
	   </div>

	   {/* <img className="soundbutton paused" src="images/sound.gif" alt="Alt">
	    <audio className="audio" src="media/ambient.mp3" loop></audio>*/}
    </>
  );
}
