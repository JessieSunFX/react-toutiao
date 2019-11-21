/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';

export const itemFy = ItemComponent => {
    return (<div className="item">
        <ItemComponent />
    </div>);
}