package com.portfolio.demo.Interface;

import com.portfolio.demo.Entity.Persona;
import java.util.List;

public interface iPersonaService {
    //traer una lista de persona
    public List<Persona> getPersona();
    
    // guardar un objeto de tipo persona
    public void savePersona(Persona persona);
            
    // eliminar un objeto pero lo buscamos por ID
    public void deletePersona(Long id);
    
    //buscar una persona por id
    public Persona findPersona(Long id);
}
