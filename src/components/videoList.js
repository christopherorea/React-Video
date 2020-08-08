import React from 'react';
import VideoItem from './videoItem'

const VideoList = ({videos,onVideoSelect})=>{
	const fetched = videos.map(video=>{
		return(
			<VideoItem 
			key={video.etag} 
			video={video}
			onVideoSelect={onVideoSelect}/>
		);
	});

	return(
		<div className='ui relaxed divided list'>
			{fetched}
		</div>
	);
}

export default VideoList;