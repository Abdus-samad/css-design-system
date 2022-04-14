import React, { FunctionComponent } from 'react';
import { IDestination } from '../../type';

const DestinationMars: FunctionComponent<{
	portfolio: IDestination;
}> = ({
	portfolio: { category, description, distance, images, name, travel },
}) => {
	return (
		<>
			{' '}
			<img src={images} alt='' />
			
			<article className='destination-info'>
				<h2 className='fs-800 uppercase'>{name}</h2>
				<p>
				{description}
				</p>
				<div className='flex destination-meta'>
					<div>
						<h3 className='text-accent fs-200 uppercase'>
							Avg. distance
						</h3>
						<p className='text-accent fs-500 uppercase'>
							{distance}
						</p>
					</div>{' '}
					<div>
						<h3 className='text-accent fs-200 uppercase'>
							{' '}
							Est. travel time
						</h3>
						<p className='text-accent fs-500 uppercase'>
							{' '}
						{travel}
						</p>
					</div>
				</div>
			</article>
		</>
	);
};

export default DestinationMars;
