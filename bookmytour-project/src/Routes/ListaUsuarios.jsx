import { useEffect, useState } from "react";
import { userService } from "../services/api/userService";
import { useNavigate } from "react-router-dom";
import Styles from "../Styles/Productos.module.css";

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
    <div style={{ padding: "20px", maxWidth: "80%", justifySelf: "center" }}>
      <h2>Listado de usuarios</h2>
      <table className={Styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.rolName}</td>
              <td style={{ width: "100px" }}>
                <button
                  className={Styles.btnAgregar}
                  onClick={() => toogleAdminStatus(user.userId, user.rolName)}
                >
                  {user.rolName === "ADMIN"
                    ? "Revocar permiso de Administrador"
                    : "Conceder permiso de administrador"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaUsuarios;
