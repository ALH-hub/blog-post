import { useContext, useEffect, useState } from 'react';
import Delete from '/delete.png';
import Edit from '/edit.png';
import { Link, useLocation } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Single = () => {
  const [post, setPost] = useState({});
  const currentUser = useContext(AuthContext);

  const location = useLocation();

  const postId = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(`http://localhost:3000/api/posts/${postId}`);
        setPost(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <div className='single'>
      <div className='content'>
        {console.log(post)}
        <img src={post?.img} alt='' />
        <div className='user'>
          <img
            src='https://res.cloudinary.com/dzsv3mhyd/image/upload/v1711428897/samples/upscale-face-1.jpg'
            alt=''
          />
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted: {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username == post.username && (
            <div className='edit'>
              <Link to='/write?edit=2'>
                <img src={Edit} alt='' />
              </Link>
              <img src={Delete} alt='' />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
