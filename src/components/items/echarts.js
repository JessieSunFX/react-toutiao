/**
 * @file entry file
 * @author jessie
 */

import React, {Component, useState, useEffect} from 'react';
import {itemFy, itemFy1} from './decorators';
import echarts from 'echarts';


export default () => {
    
    const [price, setPrice] = useState(0);//定义一个state,并赋值初始值为0
    // 为什么用数组不用对象？因为在使用useState的时候，React不知道叫什么名字。用对象要定义key
    // const [count, setCount] = useState(0);
    // 会不会每次都调用？不会，return 代替了render,每次都执行重新渲染，不会每次都执行useState,类似于constructor中定义了一个state;

    //------------------------------------

    useEffect(() => {//每次渲染的时候都会被调用
        console.log('我被调用了：：！', price);
        return () => {
            console.log('componentWillUnmount!');
        };
    });

    return (<div onClick={() => setPrice(50)}>
        echarts{price}
    </div>);

}