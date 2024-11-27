// Importing mock users and roles data
import mockUsers from './UserMock'; // Assume mockUsers is in a separate file
import mockRoles from './RoleMock'; // Assume mockRoles is in a separate file
import mockPrivileges from './PrivilegeMock'; // Assuming mockPrivileges is in a separate file

// Mock Privilege Table (User-Role-Privilege mapping)
const mockPrivilegeTable = [
  {
    userId: mockUsers[0].id, // John Doe
    userName: mockUsers[0].name,
    role: mockRoles[0], // Admin
    privileges: [
      mockPrivileges[0], // Edit
      mockPrivileges[1], // View
      mockPrivileges[2], // Delete
      mockPrivileges[3], // Create
      mockPrivileges[4], // Approve
      mockPrivileges[5], // Export
      mockPrivileges[6], // Assign Roles
    ],
    updatePrivileges: true, // Admins can update privileges
  },
  {
    userId: mockUsers[1].id, // Jane Smith
    userName: mockUsers[1].name,
    role: mockRoles[1], // Manager
    privileges: [
      mockPrivileges[0], // Edit
      mockPrivileges[1], // View
      mockPrivileges[4], // Approve
      mockPrivileges[5], // Export
    ],
    updatePrivileges: true, // Managers can update some privileges
  },
  {
    userId: mockUsers[2].id, // Alice Johnson
    userName: mockUsers[2].name,
    role: mockRoles[2], // User
    privileges: [
      mockPrivileges[1], // View
      mockPrivileges[3], // Create
    ],
    updatePrivileges: false, // Users cannot update privileges
  },
  {
    userId: mockUsers[3].id, // Mark Spencer
    userName: mockUsers[3].name,
    role: mockRoles[3], // Viewer
    privileges: [
      mockPrivileges[1], // View
    ],
    updatePrivileges: false, // Viewers cannot update privileges
  },
  {
    userId: mockUsers[4].id, // Susan Miller
    userName: mockUsers[4].name,
    role: mockRoles[4], // Supervisor
    privileges: [
      mockPrivileges[0], // Edit
      mockPrivileges[1], // View
      mockPrivileges[3], // Create
      mockPrivileges[4], // Approve
    ],
    updatePrivileges: true, // Supervisors can update privileges
  },
  {
    userId: mockUsers[5].id, // Bob Davis
    userName: mockUsers[5].name,
    role: mockRoles[5], // Technician
    privileges: [
      mockPrivileges[0], // Edit
      mockPrivileges[2], // Delete
      mockPrivileges[5], // Export
    ],
    updatePrivileges: false, // Technicians cannot update privileges
  },
  {
    userId: mockUsers[6].id, // Emily Carter
    userName: mockUsers[6].name,
    role: mockRoles[6], // Auditor
    privileges: [
      mockPrivileges[1], // View
      mockPrivileges[6], // Assign Roles
    ],
    updatePrivileges: false, // Auditors cannot update privileges
  },
];

export default mockPrivilegeTable;
