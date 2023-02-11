import React from 'react';

const Card = ({ name, image, handleClick }) => {
	const capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		<div
			className="flex flex-col-reverse gap-2 text-center h-[200px] w-[200px] items-center justify-center
			border-black border-2 rounded-md p-4"
			onClick={() => {
				handleClick(name);
			}}>
			<h4 className="font-bold font-secondary">{capitalize(name)}</h4>
			<img className="" src={image} alt={name} />
		</div>
	);
};

export default Card;
