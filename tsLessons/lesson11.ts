type Role = "admin" | "user" | "moderator"

type RolePermissions = Record<Role, string[]>

const permissions: RolePermissions = {
    admin: ["read", "delete", "edit"],
    user: ["read"],
    // ERROR user: "read"
    moderator: ["read", "edit"],
}

console.log(permissions);
