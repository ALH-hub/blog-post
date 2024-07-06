import Delete from '/delete.png';
import Edit from '/edit.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
	return (
		<div className='single'>
			<div className='content'>
				<img
					src='https://res.cloudinary.com/dzsv3mhyd/image/upload/v1711428859/sample.jpg '
					alt=''
				/>
				<div className='user'>
					<img
						src='https://res.cloudinary.com/dzsv3mhyd/image/upload/v1711428897/samples/upscale-face-1.jpg'
						alt=''
					/>
					<div className='info'>
						<span>Mary</span>
						<p>posted 2 days ago</p>
					</div>
					<div className='edit'>
						<Link to='/write?edit=2'>
							<img src={Edit} alt='' />
						</Link>
						<img src={Delete} alt='' />
					</div>
				</div>
				<h1>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo
					dignissimos, consectetur reprehenderit nihil non iure quod vel
					laboriosam tempore ad, fugiat asperiores? Sunt eius laboriosam
					adipisci dicta. Sed tempora iste a dignissimos impedit quo optio
					laborum expedita maxime enim aliquam mollitia dolore, quam quis
					perspiciatis corporis voluptatum atque? Perferendis, maiores.
					<br />
					<br />
					At incidunt reiciendis odit inventore, corrupti aut mollitia suscipit
					deserunt asperiores quo. Harum obcaecati corrupti laudantium
					voluptatibus libero? Minima dicta atque quas obcaecati, voluptas,
					autem odio impedit laborum necessitatibus animi vel corrupti id
					corporis molestias exercitationem nemo ipsam repellendus ut. Nostrum
					excepturi iure dignissimos quam maiores, a ratione hic beatae impedit
					quibusdam exercitationem commodi quis quasi accusantium fugiat
					veritatis rem dolores sequi incidunt minima. Tempora natus possimus
					doloribus similique cupiditate quisquam explicabo! Exercitationem
					asperiores excepturi aspernatur at possimus natus, dolorum quidem.
					<br />
					<br />
					eveniet repellat, nihil eum provident nobis explicabo beatae, illum
					fuga saepe tempora dolor laboriosam? Expedita rem architecto molestiae
					nesciunt nam recusandae quis praesentium minus sint veniam, atque
					quibusdam odio porro quos et, laudantium voluptatem, iste impedit
					omnis temporibus dicta in. Ullam officia est exercitationem id
					expedita harum aspernatur quas illum porro incidunt cum, assumenda
					beatae nemo, omnis facilis repellat, reiciendis odio accusantium
					doloribus! Quam vero laudantium temporibus, dicta eius eum quia magni
					deleniti nesciunt sit quasi delectus laboriosam atque ut mollitia
					iure! Maxime mollitia ipsum quae, eum minus totam et aperiam sed
					laborum, inventore voluptatem ipsa corrupti officia illum? Quisquam
					amet in excepturi ipsa quasi, inventore, rerum qui vel quibusdam magni
					sed reiciendis expedita eum suscipit nobis ad vero, minima animi
					incidunt provident aliquid quaerat ratione cumque! Earum quidem
					assumenda hic tempore maxime fuga sapiente. Dolores mollitia id
					architecto temporibus? Iure, reiciendis. Non itaque, commodi voluptas
					facere dolor provident cupiditate dolorem labore dignissimos,
					quisquam.
					<br />
					<br />
					esse deleniti blanditiis sed velit sapiente modi! Esse illo earum
					facere accusamus debitis quos sed quo in non temporibus, rerum
					recusandae cumque suscipit nisi obcaecati mollitia perferendis
					adipisci. Iure itaque atque dolorem voluptatem laudantium ea
					perspiciatis. Earum cumque, error quis eos aliquam impedit voluptatem
					optio provident architecto dolore enim dolores reiciendis officia
					asperiores non est quas harum expedita numquam unde, consectetur odio?
					Ipsum harum quis odit voluptates. Animi cupiditate fugit porro laborum
					quos? Ex, odit similique aspernatur sed fugit iure provident rerum
					veniam earum officia libero fugiat doloribus cupiditate blanditiis
					necessitatibus error molestias voluptatibus corrupti voluptatem
					mollitia commodi. Iste iusto voluptatibus delectus modi, magnam
					corporis quam qui minima? Reprehenderit animi soluta odit,
					voluptatibus non ullam ratione, dolor repellat ducimus numquam sed
					delectus adipisci fugit libero sit repellendus accusamus temporibus
					molestiae, reiciendis vel quam. Temporibus quo rerum a corrupti magnam
					veniam molestias enim cum porro nisi, numquam laboriosam? Quasi
					impedit veritatis iusto, est quidem, tempore nesciunt velit deserunt
					reprehenderit amet culpa harum temporibus neque incidunt atque vel
					quos, saepe autem aperiam! Eligendi laboriosam ea, repellendus quaerat
					numquam dignissimos distinctio nesciunt ut tempora, voluptas molestias
					aliquid. Corrupti dolorem quod doloremque qui non. Ab facilis
					reiciendis perspiciatis dolore, eaque optio natus, eligendi minus
					accusantium libero beatae laudantium, harum suscipit in omnis quam
					maiores ducimus rem placeat assumenda.
				</p>
			</div>
			<Menu />
		</div>
	);
};

export default Single;
