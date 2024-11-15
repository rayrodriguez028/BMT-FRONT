import { useEffect, useState } from "react";
import { userService } from "../services/api/userService";
import { useNavigate } from "react-router-dom";

const ListaUsuarios = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      // Si no hay un usuario en localStorage, redirige al home
      navigate("/");
    } else {
      const usuario = JSON.parse(user);
      // Verificar si el usuario es vacío o no tiene el rol correcto
      if (
        !usuario ||
        !usuario.usuario ||
        usuario.usuario.rol.rolName !== "ADMIN"
      ) {
        navigate("/");
      }
    }
  }, [navigate]);

  useEffect(() => {
    userService
      .getAllUsers()
      .then((response) => {
        console.log("Respuesta de la API:", response.data);
        setUsers(response.data);
      })
      .catch((error) => console.error("Error con los usuarios", error));
  }, []);

  const toogleAdminStatus = async (userId, rolName) => {
    try {
      console.log("User ID:", userId);
      const updatedRolName = rolName === "ADMIN" ? 2 : 1; // Invertir el rol

      const updateDataUser = { roleId: updatedRolName };
      console.log("Datos a enviar:", updateDataUser);
      const response = await userService.assignRole(userId, updateDataUser);

      if (response.status !== 200)
        throw new Error("Error al actualizar los permisos");

      // Actualiza el estado con el nuevo rol
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.userId === userId ? { ...user, roleId: updatedRolName } : user
        )
      );
      userService
        .getAllUsers()
        .then((response) => {
          console.log("Respuesta de la API:", response.data);
          setUsers(response.data);
        })
        .catch((error) => console.error("Error con los usuarios", error));
    } catch (error) {
      console.error("Error con los permisos", error);
    }
  };

  return (
    <div>
      <h2>Listado de usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>
            {" "}
            {/* Usamos user.userId como clave */}
            <span>
              {user.firstName} {user.lastName} -{" "}
              {user.rolName === "ADMIN" ? "Administrador" : "Usuario"}
            </span>
            <button
              onClick={() => toogleAdminStatus(user.userId, user.rolName)}
            >
              {user.rolName === "ADMIN"
                ? "Revocar permiso de Administrador"
                : "Conceder permiso de administrador"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
