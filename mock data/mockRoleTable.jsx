// Importing mock users and roles data
import mockUsers from './UserMock';
import mockRoles from './RoleMock'; 


const mockRoleTable = [
    {
      userId: mockUsers[0].id, // John Doe
      userName: mockUsers[0].name,
      role: mockRoles[0].name, // Admin
      canUpdate: true, // Admins can update privileges
    },
    {
      userId: mockUsers[1].id, // Jane Smith
      userName: mockUsers[1].name,
      role: mockRoles[1].name, // Manager
      canUpdate: true, // Managers can update some privileges
    },
    {
      userId: mockUsers[2].id, // Alice Johnson
      userName: mockUsers[2].name,
      role: mockRoles[2].name, // User
      canUpdate: false, // Users cannot update privileges
    },
    {
      userId: mockUsers[3].id, // Mark Spencer
      userName: mockUsers[3].name,
      role: mockRoles[3].name, // Viewer
      canUpdate: false, // Viewers cannot update privileges
    },
    {
      userId: mockUsers[4].id, // Susan Miller
      userName: mockUsers[4].name,
      role: mockRoles[4].name, // Supervisor
      canUpdate: true, // Supervisors can update privileges
    },
    {
      userId: mockUsers[5].id, // Bob Davis
      userName: mockUsers[5].name,
      role: mockRoles[5].name, // Technician
      canUpdate: false, // Technicians cannot update privileges
    },
    {
      userId: mockUsers[6].id, // Emily Carter
      userName: mockUsers[6].name,
      role: mockRoles[6].name, // Auditor
      canUpdate: false, // Auditors cannot update privileges
    },
  ];
  
  export default mockRoleTable;
  