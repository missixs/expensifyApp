import authReducer from '../../reducers/auth';

test('should test auth login reducer', ()=>{

    const action = {
        type:'LOGIN',
        uid:'aaaa'
    };

    const result = authReducer(undefined, action);
    expect(result).toEqual({
        uid:'aaaa'
    });

});


test('should test auth logout reducer', ()=>{

    const action = {
        type:'LOGOUT'
    };

    const result = authReducer(undefined, action);
    expect(result).toEqual({});

});