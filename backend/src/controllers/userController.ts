// In-memory database simulation
interface User {
    id: number;
    name: string;
    email: string;
  }
  
  const users: User[] = [];
  
  // Get all users
  export async function getUsers(request, reply) {
    return users;
  }
  
  // Create a new user
  export async function createUser(request, reply) {
    const { name, email } = request.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    return newUser;
  }
  