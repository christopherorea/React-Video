import React,{useState} from 'react';

const SearchBar = ({submited})=>{

	const [term,setTerm] = useState('')

	const onFormSubmit = (e)=>{
		e.preventDefault();
		// To Do: call back from parent component
		submited(term);
	}

	return(
	<div className='search-bar ui segment'>
		<form className='ui form' onSubmit={onFormSubmit}>
			<div className='field'>
				<label>Video Search</label>
				<input value={term} type='text' onChange={(e)=>setTerm(e.target.value)}/>
			</div>
		</form>
	</div>);
}

export default SearchBar;