//import slider1 from '../static/images/uploads/slider1.jpg'; 
import { Link } from 'react-router-dom';

const src1 = 'https://elitehts.com/wp-content/uploads/2019/12/chaise_03.jpg';

export function MainView() {
	return (
		<div className="slider movie-items">
			<div className="container">
				<div className="row">
					<div className="slick-multiItemSlider" style={{ width: '1200px', height: '780px' }}>
						<div className="movie-item">
							<div className="mv-img">
								<img src={src1} alt="none" />
							</div>
							<div className="title-in">
								<div className="cate">
								</div>
								<h6><Link to="/">Block Buster Movies</Link></h6>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}