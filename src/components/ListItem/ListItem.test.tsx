import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store'

import {ListItem} from "./ListItem";

test('shows user data correctly', () => {
    const testingUser = {
            "phone": "902-738-3242",
            "name": "Geordan Aaryn",
            "nickname": "@geordanaaryn",
            "email": "geordan.aaryn@fallinhay.com",
            "position": "Chief Executive Officer",
            "photo": "1.jpg"
        }


    const { getByText, getByAltText } = render(
        <Provider store={store}>
            <ListItem {...testingUser}/>
        </Provider>
    );


    expect(getByText(/Geordan Aaryn/i)).toBeInTheDocument();
    expect(getByText(/@geordanaaryn/i)).toBeInTheDocument();

    const image = getByAltText('user');
    expect(image).toHaveAttribute('src', testingUser.photo)
});
