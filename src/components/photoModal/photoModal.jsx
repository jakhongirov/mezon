import './photoModal.scss';
import { data } from '../../assets/data/data';
import { useEffect, useState } from 'react';

function PhotoModal({ show, setShow, id }) {
	const [photo, setPhoto] = useState({});

	useEffect(() => {
		const foundData = data.find((e) => e.id === id);
		setPhoto(foundData);
	}, [id]);

	return (
		<div className={show ? 'modal' : 'modal--close'}>
			<div className='mdoal__item--photo'>
				<button className='modal__btn' onClick={() => setShow(false)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='#202020'
						x='0px'
						y='0px'
						width='23'
						height='22'
						viewBox='0 0 50 50'>
						<path d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z' />
					</svg>
				</button>
				<img
					src={photo?.image}
					alt={photo?.title}
					width={300}
					height={500}
				/>
			</div>
		</div>
	);
}

export default PhotoModal;
