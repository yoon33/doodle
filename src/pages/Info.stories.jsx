import React from 'react';
import { Info } from '../components/Info';

export default {
    component: Info,
    title: 'React Components/Banner',
}

export const Primary = () => <Info  titleOne="followers" iconOne={"followers.png"} titleTwo="story" iconTwo = "writing.png" valueOne="999,9999" valueTwo = "999" />;