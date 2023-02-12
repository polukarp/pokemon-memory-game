import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ name, image, handleClick }) => {
	const capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		<motion.div
			initial={{ scale: 0, rotate: 0 }}
			animate={{ scale: 1, rotate: 360 }}
			transition={{ duration: 0.4, ease: 'backOut', type: 'spring' }}
			whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
			whileTap={{ scale: 0.9 }}
			className="flex flex-col-reverse gap-2 text-center h-[200px] w-[140px] md:w-[200px] items-center justify-center
			border-black border-2 rounded-md p-4 hover:bg-gray-50 cursor-pointer"
			onClick={() => {
				handleClick(name);
			}}>
			<h4 className="font-bold font-secondary">{capitalize(name)}</h4>
			<img className="" src={image} alt={name} />
		</motion.div>
	);
};

export default Card;
