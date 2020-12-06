const users = [
    { email: 'admin', password: '123', name: 'admin' },
    { email: '1234', password: '1234', name: '1234' },
    { email: 'staff', password: '0000', name: 'staff' }
  ]
  
  export function signIn({ email, password }) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user === undefined) throw new Error();
    return user;
  }