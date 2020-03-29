import {login, logout} from '../../actions/auth';

test('should test login', ()=>{
    const uid = 15236;

    const action = login(uid);
    expect(action).toEqual({
        type:'LOGIN',
        uid
    });
});

test('should test logout', ()=>{
    const action = logout();
    expect(action).toEqual({
        type:'LOGOUT'
    });
});