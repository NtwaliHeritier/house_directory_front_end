import React from 'react';

const Signup = () => {
  return ( 
    <form>
      <input type="text" name="first_name"/>
      <input type="text" name="last_name"/>
      <input type="text" name="username"/>
      <input type="text" name="password"/>
      <button type="submit">Register</button>
    </form>
   );
}
 
export default Signup;