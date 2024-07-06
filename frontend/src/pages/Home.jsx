import { Link } from 'react-router-dom';

const Home = () => {
	const posts = [
		{
			id: 1,
			title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium nostrum labore veniam expedita eligendi repellat minus accusantium error sunt. Sapiente quibusdam corrupti doloremque eaque ipsam, illum omnis! Temporibus ducimus quam accusantium recusandae assumenda laboriosam, suscipit molestias rem, blanditiis ratione eos voluptatum voluptate officia ad! Iusto, impedit! Fugit, provident laboriosam!',
			img: 'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1711428859/sample.jpg',
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est qui rerum aliquid ut asperiores beatae distinctio iure officia alias, voluptate magni iste officiis illo ad!',
			img: 'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1711428901/cld-sample-5.jpg',
		},
		{
			id: 3,
			title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium nostrum labore veniam expedita eligendi repellat minus accusantium error sunt. Sapiente quibusdam corrupti doloremque eaque ipsam, illum omnis! Temporibus ducimus quam accusantium recusandae assumenda laboriosam, suscipit molestias rem, blanditiis ratione eos voluptatum voluptate officia ad! Iusto, impedit! Fugit, provident laboriosam!',
			img: 'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1711428900/cld-sample-4.jpg',
		},
		{
			id: 4,
			title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium nostrum labore veniam expedita eligendi repellat minus accusantium error sunt. Sapiente quibusdam corrupti doloremque eaque ipsam, illum omnis! Temporibus ducimus quam accusantium recusandae assumenda laboriosam, suscipit molestias rem, blanditiis ratione eos voluptatum voluptate officia ad! Iusto, impedit! Fugit, provident laboriosam!',
			img: 'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1711428899/cld-sample-2.jpg',
		},
		{
			id: 5,
			title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium nostrum labore veniam expedita eligendi repellat minus accusantium error sunt. Sapiente quibusdam corrupti doloremque eaque ipsam, illum omnis! Temporibus ducimus quam accusantium recusandae assumenda laboriosam, suscipit molestias rem, blanditiis ratione eos voluptatum voluptate officia ad! Iusto, impedit! Fugit, provident laboriosam!',
			img: 'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1711428898/cld-sample.jpg',
		},
	];

	return (
		<div className='home'>
			<div className='posts'>
				{posts.map((post) => {
					return (
						<div className='post' key={post.id}>
							<div className='img'>
								<img src={post.img} alt='' />
							</div>
							<div className='content' key={post.id}>
								<Link className='link' to={`/post/${post.id}`}>
									<h1>{post.title}</h1>
								</Link>
								<p>{post.desc}</p>
								<button>Read More</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
