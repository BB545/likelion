import React, { useEffect } from 'react';
import loading_logo from '../assets/img/icon/Logo.svg';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/main');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]);
    
    return (
        <div className='Loading_wrap container'>
            <img src={loading_logo} alt="loading_logo" className="loading_logo" />
        </div>
    )
}

export default Loading