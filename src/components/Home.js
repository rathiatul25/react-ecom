import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDemoUser } from '../actions/user';

const Home = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);

    useEffect(() => {
        dispatch(setDemoUser('Ecom User'));
    }, []);
    
    if(!userData.user) {
        return <div>Loading...</div>
    }
    return (
        <div>{userData.user}</div>
    )
}

export default Home;