// Importacion de la clase que contiene los campos en comun para las entidades.
import { EntidadPadre } from './entidadpadre.modelo';

// Clase entidad para el componente 'user'.
export class UsuarioModelo extends EntidadPadre{

    public usuario: string;
    public clave: string;

}
