import './loader.scss';

function Loader({ status, color }) {
	return (
		<div className={status ? 'loader__modal' : 'modal--close'} style={{'background': color}}>
			<span className='loader'></span>
		</div>
	);
}

export default Loader;
