function Container(){
    let login= document.querySelector('.login');
    let create= document.querySelector('.create');
    let contenedor= document.querySelector('.contenedor')

    login.onclick = function(){
        contenedor.classList.add('signinForm')
    }

    create.onclick = function(){
        contenedor.classList.remove('signinForm')
    }

    return(

        <>
            <div class="contenedor">
                <div class="form signup">
                    <h2>Crear cuenta</h2>
                    <div class="inputBox">
                        <input type="text" required="required" />
                        <i class="fa-regular fa-user"></i>
                        <spam>usuario</spam>
                    </div>
                    <div class="inputBox">
                        <input type="text" required="required" />
                        <i class="fa-regular fa-envelope"></i>
                        <spam>email</spam>
                    </div>
                    <div class="inputBox">
                        <input type="password" required="required" />
                        <i class="fa-solid fa-lock"></i>
                        <spam>crear contraseña</spam>
                    </div>
                    <div class="inputBox">
                        <input type="password" required="required" />
                        <i class="fa-solid fa-lock"></i>
                        <spam>confirmar contraseña</spam>
                    </div>
                    <div class="inputBox">
                        <input type="submit" value="Crear Cuenta" />
                    </div>
                    <p>¿Ya eres miembro?
                        <a href="#" class="login">Log in</a>
                    </p>
                </div>


                <div class="form signin">
                    <h2>Iniciar Sesion</h2>
                    <div class="inputBox">
                        <input type="text" required="required" />
                        <i class="fa-regular fa-user"></i>
                        <spam>usuario</spam>
                    </div>
                    <div class="inputBox">
                        <input type="password" required="required" />
                        <i class="fa-solid fa-lock"></i>
                        <spam>contraseña</spam>
                    </div>
                    <div class="inputBox">
                        <input type="submit" value="Iniciar Sesion" />
                    </div>
                    <p>¿No eres eres miembro?
                        <a href="#" class="create">Crear cuenta</a>
                    </p>
                </div>

            </div>

           
        


        </>
    
    )
    
    
    }
    
    export default Container;