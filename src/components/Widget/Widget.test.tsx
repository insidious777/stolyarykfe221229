import React from 'react';
import {fireEvent, getAllByAltText, getAllByText, render} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store'
import testingList from '../../initData.json';

import {Widget} from "./Widget";

test('closes details window', () => {
    const {getAllByText, getByText, queryByText} = render(
        <Provider store={store}>
            <Widget list={testingList}/>
        </Provider>
    );

    const detailsButton = getAllByText('View');
    fireEvent.click(detailsButton[0]);


    expect(getByText(/902-738-3242/i)).toBeInTheDocument();

    const closeButton = getByText('✖');
    fireEvent.click(closeButton);

    const text = queryByText('902-738-3242')
    expect(text).toBeNull()

});


test('shows user data correctly', () => {
    const { getAllByAltText} = render(
        <Provider store={store}>
            <Widget list={testingList}/>
        </Provider>
    );

    const images = getAllByAltText('user');
    expect(images.length).toBe(3)
});

test('expands on button click', () => {
    const {getByText, getAllByAltText} = render(
        <Provider store={store}>
            <Widget list={testingList}/>
        </Provider>
    );
    let images = getAllByAltText('user');
    expect(images.length).toBe(3)

    const expandButton = getByText('View all');
    fireEvent.click(expandButton);


    images = getAllByAltText('user');
    expect(images.length).toBe(10)
});

test('shows details window', () => {
    const {getAllByText, getByText} = render(
        <Provider store={store}>
            <Widget list={testingList}/>
        </Provider>
    );

    const detailsButton = getAllByText('View');
    fireEvent.click(detailsButton[0]);


    expect(getByText(/902-738-3242/i)).toBeInTheDocument();
});

