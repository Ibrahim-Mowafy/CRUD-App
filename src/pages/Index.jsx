import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts } from '../state/postSlice';
import PostList from '../components/PostList';
import Loading from '../components/Loading';
import { useCallback } from 'react';

const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const deleteRecord = useCallback(
    (id) => dispatch(deletePost(id)),
    [dispatch]
  );

  return (
    <Loading loading={loading} error={error}>
      <PostList data={records} deleteRecord={deleteRecord} />
    </Loading>
  );
};

export default Index;
