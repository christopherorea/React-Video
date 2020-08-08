import React,{useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './videoList';
import VideoDetail from './videoDetail';
import youtube from '../apis/youtube';

const App = ()=>{

	const [videos,setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState('')

	const KEY = 'AIzaSyBALV7OkBBetPEtwlH2eRy2vVaQoVVbRV4';
	const year = new Date();

	useEffect(()=>{
		onTermSubmit('halo trilogy tribute');
	},[]);

	const onTermSubmit = async(term)=>{
		const data = await youtube.get('/search',{
			params:{
				part: 'snippet',
				maxResults: 5,
				key : KEY,
				q: term
			}
		});
		setVideos(data.data.items);
		setSelectedVideo(data.data.items[0]);
	};

	const onVideoSelect = (newVideo)=>{
		setSelectedVideo(newVideo);
	}

	return(
		<div className='ui container'>
			<SearchBar submited={onTermSubmit} />
			<div className='ui grid'>
				<div className='ui row'>
					<div className='eleven wide column'>
						<VideoDetail video={selectedVideo}/>
					</div>
					<div className='five wide column'>
						<VideoList 
						videos={videos} 
						onVideoSelect={onVideoSelect}/>
						</div>
				</div>
			</div>
		</div>
	);
};

export default App;