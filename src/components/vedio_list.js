import React, { Component } from 'react';
import VedioItem from './vedio_item';

const VedioList = (props) => {

	const  VedioItems = props.vedios.map( (vedio) => {
	 	return < VedioItem key = {vedio.etag} vedio = { vedio } />
	 });

	return (
		<ul className="col-md-4 list-group">
		     { props.vedios.length }
			 { VedioItems } 
		</ul>
	);
}



export default VedioList ;