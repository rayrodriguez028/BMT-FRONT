import { useEffect, useState } from "react"
import {userService} from '../services/api/userService';

const ListaUsuarios = ()=>{
    const [users, setUsers] = useState([]);
 
    useEffect(()=>{
        userService.getAllUsers ()
        .then((response)=>setUsers(response.data))
        .catch((error)=> console.error('Error con los usuarios', error));

    },[])

const toogleAdminStatus= async (userId, isAdmin)=>{
    try{
        const updtadeDataUser = {isAdmin:!isAdmin};
        const response = await userService.updtadeDataUser(userId, updtadeDataUser);
        
        if (response.status !=200) throw new Error('Error al actualizar los permisos');
        setUsers((prevUsers)=>
            prevUsers.map((user)=>
            user.id ===userId? { ...user, isAdmin: !isAdmin} : user));
    } catch( error){
        console.error ('Error con los permisos', error);
    };
    return (
        <div>
            <h2>Lsitado de usuarios</h2>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>
                        <span>{user.name} - {user.isAdmin? 'Administrador': 'Usuario'}</span>
                        <button onClick={()=> toogleAdminStatus(user.id, user.isAdmin)}> 
                            {user.isAdmin? 'Revocar permiso de Administrador': 'Conceder permiso de administrador'}
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

}
export default ListaUsuarios;