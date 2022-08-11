export class persona{
    id?: String; // no es necesario ya que es autogenerado
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String,apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}