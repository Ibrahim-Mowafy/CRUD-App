import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../state/postSlice';

const usePostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, record } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return { loading, error, record };
};

export default usePostDetails;
