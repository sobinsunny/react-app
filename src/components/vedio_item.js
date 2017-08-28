import React from 'react';


const VedioItem = ({vedio}) => {
	return (
	  <li > vedio
	  	<div>
	  		<img src=  {vedio.snippet.thumbnails.default.url } />
	  	</div>
	 </li>
	 );
}

export default VedioItem;