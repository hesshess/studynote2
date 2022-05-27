import React, { memo } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import noimg from '../assets/img/noImg.png';

const ListItemContainer = styled.li`
    box-sizing: border-box;
    width:20%;
    flex: none;
    padding: 10px;

    @media(max-width: 1280px){
        width:25%;
    }
    @media(max-width: 960px){
        width: 33.3%;
    }
    @media(max-width: 720px){
        width:50%;
    }
    @media(max-width: 640px){
        width:100%;
    }
    .list-item-link{
        border: 1px solid #d5d5d5;
        box-sizing: border-box;
        width:100%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction:column;
        align-items: center;
        text-decoration: none;
        color: #000;
        transition: all 0.1s;

        &:hover{
            background-color: #eeeeee55;
        }
        .thumbnail{
            width: 100%;
            height: 360px;
            display: block;
            object-fit: cover;
            object-position:center top;
            flex:none;

            @media(max-width: 1280px){
        height: 360px;
    }
    @media(max-width: 960px){
        height: 340px;
    }
    @media(max-width: 720px){
        height: 320px;
    }
    @media(max-width: 640px){
        height: 100%;
    }

    }
`;
