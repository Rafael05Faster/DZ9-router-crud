import React from 'react';
import {Link} from 'react-router-dom';
import PostsList from './PostsList';

function MainPage() {
  return (
    <div className="main_page">
        <span className="add_btn"><Link className="post_link" to={`/posts/new`}>Опубликовать</Link></span>
        <PostsList />
    </div>
  );
}

export default MainPage;