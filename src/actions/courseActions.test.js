/* import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it("should create LOAD_COURSES_SUCCESS when loading courses", (done) => {
        //Here's an example call to nock.
        // nock('http://example.com/')
        // .get('./courses')
        // .reply(200, { body: { course: [{ id:1, firstName: 'Cory', lastName: 'House'}] }});
    });

    const expectedActions = [ 
        {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.LOAD_COURSES_SUCCESS);
        done();
    })
}); */