import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store'

import {UserDetails} from "./UserDetails";
import {useAppDispatch} from "../../app/hooks";
import {openDetails} from "../Widget/widgetSlice";

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
            <UserDetails {...testingUser}/>
        </Provider>
    );


    expect(getByText(/902-738-3242/i)).toBeInTheDocument();
    expect(getByText(/Geordan Aaryn/i)).toBeInTheDocument();
    expect(getByText(/@geordanaaryn/i)).toBeInTheDocument();
    expect(getByText(/geordan.aaryn@fallinhay.com/i)).toBeInTheDocument();
    expect(getByText(/Chief Executive Officer/i)).toBeInTheDocument();

    const image = getByAltText('user');
    expect(image).toHaveAttribute('src', testingUser.photo)
});
