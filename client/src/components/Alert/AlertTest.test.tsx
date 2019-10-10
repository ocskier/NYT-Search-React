import React from "react";

import { configure, shallow } from "enzyme";
import Adaptor from "enzyme-adapter-react-16";

configure({  adapter: new Adaptor});

import Alert from "./Alert";

describe('Alert', () => {
    it('should render correctly', () => {
        const component = shallow(<Alert type="Danger" style={{}}>Rendered!</Alert>)
    })
})