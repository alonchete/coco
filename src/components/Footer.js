function footer(){
    
    return(
        <footer>
          <div className="social" id="contacto">
             <ul>
                <li className="elemento "><span className='fab fa-facebook-f'></span></li>
             
                <li className="elemento"><span className='fab fa-twitter'></span></li>
              </ul>
              <ul>
                <li className="elemento"><span className='fab fa-instagram'></span></li>
              
                <li className="elemento" ><a href="https://www.youtube.com/watch?v=BBJa32lCaaY" target="_blank" ><span className='fab fa-youtube'></span></a></li>
             </ul>
          </div>
          <div className="derechos">
            <small>&copy; 2022 <b>Cococtail Libre</b> - Todos los derechos reservados </small>
          </div>
        </footer>
    
    )
    
    
    }
    
    export default footer;